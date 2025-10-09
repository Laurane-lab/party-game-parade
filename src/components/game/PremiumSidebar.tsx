import { Button } from "@/components/ui/button";
import BrevoForm from "@/components/BrevoForm";

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

  const buttonLabel = isUserPremium && !user ? 'Se connecter pour accéder' : 'Premium : 10 jeux pour 4,99€';

  return (
    <div className="lg:w-80 flex-shrink-0 space-y-6">
      {/* Bouton Premium - disparaît si l'utilisateur est premium */}
      {!isUserPremium && (
        <div className="space-y-4">
          <Button
            variant="secondary"
            className="w-full px-6 py-4 rounded-xl text-lg font-extrabold"
            onClick={handleButtonClick}
          >
            {buttonLabel}
          </Button>
          
          {!isAuthenticated && (
            <div className="text-center">
              <span className="text-sm text-gray-600">
                Si tu es déjà premium, {" "}
                <button
                  onClick={onNavigateToConnexion}
                  className="text-blue-600 underline hover:text-blue-800 font-medium cursor-pointer"
                >
                  clique ici pour te connecter
                </button>
              </span>
            </div>
          )}
        </div>
      )}
      
      {/* Formulaire Brevo - apparaît pour tous les utilisateurs */}
      <div className="mt-10">
        <BrevoForm />
      </div>
    </div>
  );
};

export default PremiumSidebar;
