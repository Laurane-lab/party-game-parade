import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";

const supabaseRedirectUrl = import.meta.env.VITE_SUPABASE_REDIRECT_URL;

export default function Connexion() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Handle callback: check if user is authenticated
  useEffect(() => {
    const session = supabase.auth.getSession();
    if (session) {
      navigate("/");
    }
  }, [navigate]);

  const handleOAuthLogin = async (provider: 'google' | 'apple') => {
    setLoading(true);
    setError(null);
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: supabaseRedirectUrl,
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
          <img src="/src/assets/New mascot.png" alt="Mascotte" className="w-20 h-20 mb-4" />
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
