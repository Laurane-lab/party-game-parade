import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

// Replace with your Supabase project credentials
const supabaseUrl = "https://your-project.supabase.co";
const supabaseKey = "public-anon-key";
const supabase = createClient(supabaseUrl, supabaseKey);

export default function Connexion() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleOAuthLogin = async (provider: 'google' | 'apple') => {
    setLoading(true);
    setError(null);
    const { error } = await supabase.auth.signInWithOAuth({ provider });
    if (error) setError(error.message);
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-80 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-6 text-center">Connexion</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        {/* Only Google login button for now */}
        <button
          type="button"
          className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 flex items-center justify-center"
          onClick={() => handleOAuthLogin('google')}
          disabled={loading}
        >
          {loading ? "Connexion..." : "Se connecter avec Google"}
        </button>
      </div>
    </div>
  );
}
