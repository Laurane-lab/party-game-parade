import { useState } from "react";
import { useAuth } from "@/hooks/use-auth";
import { usePremium } from "@/hooks/use-premium";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const defaultAvatar = "/assets/aperololo-pp.png";

export default function Profil() {
  const { user, logout } = useAuth();
  const { isPremium } = usePremium();
  const navigate = useNavigate();
  const [emailConsent, setEmailConsent] = useState(true);

  // Si l'utilisateur n'est pas encore chargé, on affiche un loader
  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex items-center justify-center">
        <div className="text-gray-600">Chargement...</div>
      </div>
    );
  }

  // Récupérer les informations de l'utilisateur
  const firstName = user.user_metadata?.given_name || user.user_metadata?.first_name || '';
  const lastName = user.user_metadata?.family_name || user.user_metadata?.last_name || '';
  const fullName = user.user_metadata?.full_name || `${firstName} ${lastName}`.trim();
  const avatarUrl = user.user_metadata?.avatar_url || user.user_metadata?.picture;
  const displayAvatar = avatarUrl || defaultAvatar;

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8 max-w-2xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Titre de la page */}
          <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Mon Profil</h1>
          
          {/* Photo de profil et informations */}
          <div className="flex flex-col items-center mb-8">
            <div className={`relative w-24 h-24 rounded-full overflow-hidden mb-4 ${
              isPremium ? 'ring-4 ring-yellow-400' : 'ring-2 ring-gray-200'
            }`}>
              <img 
                src={displayAvatar} 
                alt="Photo de profil" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = defaultAvatar;
                }}
              />
            </div>
            
            {/* Couronne premium */}
            {isPremium && (
              <div className="w-6 h-6 text-yellow-400 mb-2">
                <svg 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  className="w-full h-full drop-shadow-sm"
                >
                  <path d="M5 16L3 6l5 2 4-4 4 4 5-2-2 10H5z"/>
                </svg>
              </div>
            )}
            
            {/* Nom et prénom */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              {fullName || "Utilisateur"}
            </h2>
            
            {/* Email */}
            <p className="text-gray-600 mb-4">{user.email}</p>
            
            {/* Statut Premium */}
            {isPremium && (
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                Membre Premium
              </span>
            )}
          </div>
          
          {/* Section emails */}
          <div className="mb-8 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-start space-x-3">
              <Checkbox 
                id="email-consent"
                checked={emailConsent}
                onCheckedChange={(checked) => setEmailConsent(checked === true)}
                className="mt-1"
              />
              <label 
                htmlFor="email-consent" 
                className="text-sm text-gray-700 leading-relaxed cursor-pointer"
              >
                J'accepte de recevoir des emails de la part de aperololo.com 
                <br />
                <span className="text-gray-500">(pas plus de 1 mail par mois)</span>
              </label>
            </div>
          </div>
          
          {/* Informations de suppression de compte */}
          <div className="mb-6 p-4 bg-red-40 rounded-lg border border-red-200">
            <p className="text-sm text-red-900">
              Pour supprimer ton compte, écris un mail à{" "}
              <a 
                href="mailto:lauraneboullay@gmail.com" 
                className="underline hover:text-red-800"
              >
                lauraneboullay@gmail.com
              </a>
            </p>
          </div>
          
          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate('/game-explanation')}
              className="flex-1 sm:flex-none bg-[hsl(var(--party-green))] text-white hover:bg-[hsl(var(--party-green))]/90 border-[hsl(var(--party-green))]"
            >
              Retour aux jeux
            </Button>
            <Button 
              onClick={handleLogout}
              variant="outline"
              className="flex-1 sm:flex-none border-red-300 text-red-500 hover:bg-red-50 hover:text-red-600"
            >
              Se déconnecter
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}