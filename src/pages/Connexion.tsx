import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import { useNavigate, useLocation } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import mascot from "@/assets/New mascot.png";
import { redirectToPayment } from "@/lib/payment";
import { getOAuthRedirectUrl, getEnvironmentType } from "@/lib/config";
import { getProfile } from "@/lib/profile";
import { Session } from "@supabase/supabase-js";

export default function Connexion() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleRedirect = async (session: Session) => {
      const redirectTo = new URLSearchParams(location.search).get('redirect_to') || sessionStorage.getItem('redirect_to');
      const redirectAfterLogin = sessionStorage.getItem('redirect_after_login');

      // Clean up session storage
      sessionStorage.removeItem('redirect_to');
      sessionStorage.removeItem('redirect_after_login');

      // Priority 1: Always check premium status first.
      const profile = await getProfile(session.user.id);
      if (profile?.is_premium) {
        // If user is premium, always redirect to games, regardless of origin.
        navigate("/game-explanation");
        return;
      }

      // User is NOT premium, proceed with other cases.
      // Case 2: User was explicitly sent to log in for payment (e.g., from /premium page)
      if (redirectTo === 'payment') {
        const gameId = sessionStorage.getItem('game_id_for_payment');
        redirectToPayment({ email: session.user.email, gameId: gameId || undefined });
        sessionStorage.removeItem('game_id_for_payment'); // Clean up after use
        return;
      }

      // Case 3: User was trying to access a protected page and was redirected to login
      if (redirectAfterLogin) {
        navigate(redirectAfterLogin);
        return;
      }
      
      // Case 4: Standard login for a non-premium user (new or existing)
      // Redirect to home page as a default.
      navigate('/');
    };

    // Check session on initial component mount
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        handleRedirect(session);
      }
    });

    // Listen for auth state changes (e.g., after OAuth redirect)
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (_event === "SIGNED_IN" && session) {
          handleRedirect(session);
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [navigate]);

  const handleOAuthLogin = async (provider: 'google' | 'apple') => {
    setLoading(true);
    setError(null);

    const params = new URLSearchParams(location.search);
    const redirectTo = params.get('redirect_to');
    if (redirectTo) {
      sessionStorage.setItem('redirect_to', redirectTo);
    }

    // Log environment info for debugging
    console.log(`OAuth login in ${getEnvironmentType()} environment`);
    console.log(`Redirect URL: ${getOAuthRedirectUrl()}`);

    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: getOAuthRedirectUrl(),
      },
    });
    if (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <div className="flex flex-col items-center justify-center flex-1">
        <div className="bg-white p-8 rounded shadow-md w-80 flex flex-col items-center">
          <img src={mascot} alt="Mascotte" className="w-20 h-20 mb-4" />
          <h2 className="text-2xl font-bold mb-6 text-center">Connexion</h2>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          {loading ? (
            <div className="text-gray-500 mb-4">Chargement...</div>
          ) : (
            <button
              type="button"
              className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 flex items-center justify-center"
              onClick={() => handleOAuthLogin('google')}
              disabled={loading}
            >
              Se connecter avec Google
            </button>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
