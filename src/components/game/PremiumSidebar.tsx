import { Button } from "@/components/ui/button";

interface PremiumSidebarProps {
  isAuthenticated: boolean;
  isUserPremium: boolean;
  user: any;
  onRedirectToPayment: (email?: string) => void;
  onNavigateToConnexion: () => void;
  onNavigateToConnexionForPayment: () => void;
}

const PremiumSidebar = ({
  isAuthenticated,
  isUserPremium,
  user,
  onRedirectToPayment,
  onNavigateToConnexion,
  onNavigateToConnexionForPayment
}: PremiumSidebarProps) => {
  const handleButtonClick = () => {
    if (isAuthenticated) {
      onRedirectToPayment(user?.email);
    } else {
      // Le bouton principal "Débloquer les 7 jeux pour 4,99€" doit rediriger vers le paiement après connexion
      onNavigateToConnexionForPayment();
    }
  };

  const buttonLabel = isUserPremium && !user ? 'Se connecter pour accéder' : 'Ce jeu et 9 autres pour 4,99€';

  return (
    <div className="lg:w-60 flex-shrink-0 space-y-6">
      {/* Bouton Premium - disparaît si l'utilisateur est premium */}
      {!isUserPremium && (
        <div className="space-y-2">
          <Button
            variant="secondary"
            className="w-full px-3 py-2.5 rounded-xl text-sm font-extrabold"
            onClick={handleButtonClick}
          >
            {buttonLabel}
          </Button>
          
          {!isAuthenticated && (
            <div className="text-center">
              <span className="text-xs text-gray-600">
                Déjà premium ? {" "}
                <button
                  onClick={onNavigateToConnexion}
                  className="text-blue-600 underline hover:text-blue-800 font-medium cursor-pointer"
                >
                  Clique ici pour te connecter
                </button>
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PremiumSidebar;
