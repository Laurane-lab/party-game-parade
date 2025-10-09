import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import { usePremium } from "@/hooks/use-premium";

const defaultAvatar = "/assets/aperololo-pp.png";

interface ProfileButtonProps {
  size?: "sm" | "lg";
  onLogout?: () => void;
}

const ProfileButton = ({ size = "lg", onLogout }: ProfileButtonProps) => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { isPremium } = usePremium();

  // Si l'utilisateur n'est pas connecté
  if (!user) {
    return (
      <Button variant="outline" size={size} onClick={() => navigate('/connexion')}>
        Connexion
      </Button>
    );
  }

  // Utilisateur connecté - récupérer la photo de profil
  const avatarUrl = user.user_metadata?.avatar_url || user.user_metadata?.picture;
  const displayAvatar = avatarUrl || defaultAvatar;

  return (
    <Button 
      variant="outline" 
      size={size} 
      onClick={() => navigate('/profil')}
      className="flex items-center gap-1 relative px-2"
    >
      <div className="relative">
        {/* Photo de profil avec cercle premium si applicable */}
        <div className={`relative w-6 h-6 rounded-full overflow-hidden ${
          isPremium ? 'ring-2 ring-yellow-400' : ''
        }`}>
          <img 
            src={displayAvatar} 
            alt="Photo de profil" 
            className="w-full h-full object-cover"
            onError={(e) => {
              // En cas d'erreur de chargement, utiliser l'avatar par défaut
              e.currentTarget.src = defaultAvatar;
            }}
          />
        </div>
      </div>
      
      <span className="ml-1">Profil</span>
      
      {/* Couronne pour les utilisateurs premium - à droite du texte */}
      {isPremium && (
        <div className="w-3 h-3 text-yellow-400">
          <svg 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="w-full h-full drop-shadow-sm"
          >
            <path d="M5 16L3 6l5 2 4-4 4 4 5-2-2 10H5z"/>
          </svg>
        </div>
      )}
    </Button>
  );
};

export default ProfileButton;