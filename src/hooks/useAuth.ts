import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { Session } from '@supabase/supabase-js';

export const useAuth = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [isPremium, setIsPremium] = useState(false);

  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);

      // Si l'utilisateur est connecté, vérifier son statut premium
      if (data.session?.user.id) {
        await checkPremiumStatus(data.session.user.id);
      }

      setLoading(false);
    };

    const checkPremiumStatus = async (userId: string) => {
      try {
        // Récupérer les informations de l'utilisateur depuis Supabase
        const { data: userData } = await supabase.auth.getUser();
        const userEmail = userData?.user?.email;

        if (!userEmail) {
          setIsPremium(false);
          return;
        }

        // Vérifier si l'utilisateur est premium dans sa propre entrée
        const { data: profileData, error: profileError } = await supabase
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
        const { data: emailProfiles, error: emailError } = await supabase
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
      }
    };

    getSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        setSession(session);

        // Mettre à jour le statut premium lorsque l'état d'authentification change
        if (session?.user.id) {
          await checkPremiumStatus(session.user.id);
        } else {
          setIsPremium(false);
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

  return { session, loading, isPremium, logout };
};
