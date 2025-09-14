import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { User } from '@supabase/supabase-js';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const handleAuthChange = (user: User | null) => {
      if (mounted) {
        setUser(user);
        setIsLoading(false);
      }
    };

    // Get initial session - this is fast and synchronous from local storage
    const getInitialSession = async () => {
      try {
        const { data } = await supabase.auth.getSession();
        handleAuthChange(data.session?.user || null);
      } catch (error) {
        console.error('Error getting initial session:', error);
        if (mounted) {
          setUser(null);
          setIsLoading(false);
        }
      }
    };

    getInitialSession();

    // Listen for auth state changes
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        handleAuthChange(session?.user || null);
      }
    );

    return () => {
      mounted = false;
      authListener.subscription.unsubscribe();
    };
  }, []);

  const logout = async () => {
    await supabase.auth.signOut();
  };

  return {
    user,
    isLoading,
    loading: isLoading, // Deprecated: use isLoading instead
    isAuthenticated: !!user,
    logout,
  };
};
