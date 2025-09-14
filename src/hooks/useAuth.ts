import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { User } from '@supabase/supabase-js';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);
  const [isPremium, setIsPremium] = useState(false);
  const [isPremiumLoading, setIsPremiumLoading] = useState(false);

  useEffect(() => {
    // Get initial session - this is fast and synchronous from local storage
    const getInitialSession = async () => {
      const { data } = await supabase.auth.getSession();
      setUser(data.session?.user || null);
      setIsAuthLoading(false);

      // Start premium check in background if user is authenticated
      if (data.session?.user.id) {
        checkPremiumStatus(data.session.user.id);
      }
    };

    const checkPremiumStatus = async (userId: string) => {
      setIsPremiumLoading(true);
      try {
        // Récupérer les informations de l'utilisateur depuis Supabase
        const { data: userData } = await supabase.auth.getUser();
        const userEmail = userData?.user?.email;

        if (!userEmail) {
          setIsPremium(false);
          return;
        }

        // Vérifier si l'utilisateur est premium dans sa propre entrée
        const { data: profileData } = await supabase
          .from('profiles')
          .select('is_premium')
          .eq('id', userId)
          .single();

        if (profileData?.is_premium) {
          setIsPremium(true);
          return;
        }

        // Si l'utilisateur n'est pas premium selon son ID, vérifier par email
        // Cela permet de détecter si l'utilisateur a payé avec un autre appareil/navigateur
        const { data: emailProfiles } = await supabase
          .from('profiles')
          .select('is_premium, payment_date')
          .eq('email', userEmail)
          .eq('is_premium', true)
          .limit(1);

        if (emailProfiles && emailProfiles.length > 0) {
          // L'utilisateur a payé avec cette adresse email
          // Mettons à jour son profil actuel
          await supabase
            .from('profiles')
            .upsert({
              id: userId,
              is_premium: true,
              email: userEmail,
              // Conserver la date de paiement d'origine si possible
              payment_date: emailProfiles[0]?.payment_date || new Date().toISOString()
            });

          setIsPremium(true);
          return;
        }

        setIsPremium(false);
      } catch (error) {
        console.error('Erreur lors de la vérification du statut premium:', error);
        setIsPremium(false);
      } finally {
        setIsPremiumLoading(false);
      }
    };

    getInitialSession();

    // Listen for auth state changes
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        setUser(session?.user || null);

        // Authentication state is immediately available
        setIsAuthLoading(false);

        // Handle premium status separately
        if (session?.user.id) {
          checkPremiumStatus(session.user.id);
        } else {
          setIsPremium(false);
          setIsPremiumLoading(false);
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const logout = async () => {
    await supabase.auth.signOut();
  };

  return {
    user,
    loading: isAuthLoading, // Deprecated: use isAuthLoading instead
    isAuthLoading,
    isPremium,
    isPremiumLoading,
    logout
  };
};
