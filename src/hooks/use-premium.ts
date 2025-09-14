import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/lib/supabase';
import { useAuth } from './use-auth';

export const usePremium = () => {
  const { user, isLoading: isAuthLoading } = useAuth();
  const [isPremium, setIsPremium] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [lastCheckedUserId, setLastCheckedUserId] = useState<string | null>(null);

  const checkPremiumStatus = useCallback(async (userId?: string) => {
    const targetUserId = userId || user?.id;

    if (!targetUserId) {
      setIsPremium(false);
      setIsLoading(false);
      setLastCheckedUserId(null);
      return false;
    }

    // Avoid redundant checks for the same user
    if (targetUserId === lastCheckedUserId && !userId) {
      return isPremium;
    }

    setIsLoading(true);
    try {
      const { data: profileData } = await supabase
        .from('profiles')
        .select('is_premium')
        .eq('user_id', targetUserId)
        .single();

      const premiumStatus = profileData?.is_premium || false;
      setIsPremium(premiumStatus);
      setLastCheckedUserId(targetUserId);
      return premiumStatus;
    } catch (error) {
      console.error('Erreur lors de la vérification du statut premium:', error);
      setIsPremium(false);
      setLastCheckedUserId(targetUserId);
      return false;
    } finally {
      setIsLoading(false);
    }
  }, [user?.id, lastCheckedUserId, isPremium]);

  // Check premium status whenever user changes or auth finishes loading
  useEffect(() => {
    if (isAuthLoading) {
      return; // Wait for auth to finish loading
    }

    if (!user?.id) {
      // User logged out - immediately clear premium status
      setIsPremium(false);
      setIsLoading(false);
      setLastCheckedUserId(null);
      return;
    }

    // User logged in or changed - check premium status
    if (user.id !== lastCheckedUserId) {
      checkPremiumStatus(user.id);
    }
  }, [user?.id, isAuthLoading, lastCheckedUserId, checkPremiumStatus]);

  // Expose method to manually refresh premium status
  const refetch = useCallback(() => {
    if (!user?.id) {
      return Promise.resolve(false);
    }
    // Force a refresh by bypassing the lastCheckedUserId check
    setLastCheckedUserId(null);
    return checkPremiumStatus(user.id);
  }, [user?.id, checkPremiumStatus]);

  return {
    isPremium,
    isLoading: isLoading || isAuthLoading,
    refetch,
  };
};
