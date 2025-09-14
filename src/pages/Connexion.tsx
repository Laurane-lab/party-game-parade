import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import { useNavigate, useLocation } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import mascot from "@/assets/New mascot.png";

const supabaseRedirectUrl = import.meta.env.VITE_SUPABASE_REDIRECT_URL;

export default function Connexion() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Handle callback: check if user is authenticated
  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        const redirectTo = sessionStorage.getItem('redirect_to');
        sessionStorage.removeItem('redirect_to'); // Clean up after reading

        if (redirectTo === 'payment') {
          // Construire l'URL avec le paramètre de redirection pour le retour après paiement
          const successUrl = `${window.location.origin}/payment-success?success=true`;
          const cancelUrl = `${window.location.origin}/to-go-premium?canceled=true`;
          
          // Utilisation de l'URL Stripe checkout.session.url avec des paramètres de retour
          window.location.href = `https://buy.stripe.com/4gM14p1P98Gja3a6R4bEA00?success_url=${encodeURIComponent(successUrl)}&cancel_url=${encodeURIComponent(cancelUrl)}`;
        } else {
          navigate("/game-explanation");
        }
      }
    };
    checkSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (session) {
          const redirectTo = sessionStorage.getItem('redirect_to');
          sessionStorage.removeItem('redirect_to'); // Clean up after reading
          
          if (redirectTo === 'payment') {
            // Construire l'URL avec le paramètre de redirection pour le retour après paiement
            const successUrl = `${window.location.origin}/payment-success?success=true`;
            const cancelUrl = `${window.location.origin}/to-go-premium?canceled=true`;
            
            // Utilisation de l'URL Stripe checkout.session.url avec des paramètres de retour
            window.location.href = `https://buy.stripe.com/4gM14p1P98Gja3a6R4bEA00?success_url=${encodeURIComponent(successUrl)}&cancel_url=${encodeURIComponent(cancelUrl)}`;
          } else {
            navigate("/game-explanation");
          }
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [navigate, location.search]);

  const handleOAuthLogin = async (provider: 'google' | 'apple') => {
    setLoading(true);
    setError(null);

    const params = new URLSearchParams(location.search);
    const redirectTo = params.get('redirect_to');
    if (redirectTo) {
      sessionStorage.setItem('redirect_to', redirectTo);
    }

    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/connexion`,
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
