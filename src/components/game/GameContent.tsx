import { Game } from "@/data/games";
import GameFullView from "./GameFullView";
import GamePaywallView from "./GamePaywallView";
import PremiumSidebar from "./PremiumSidebar";

interface GameContentProps {
  game: Game;
  user: any;
  isAuthenticated: boolean;
  isUserPremium: boolean;
  onRedirectToPayment: () => void;
  onNavigateToConnexion: () => void;
  onNavigateToConnexionForPayment: () => void;
}

const GameContent = ({
  game,
  user,
  isAuthenticated,
  isUserPremium,
  onRedirectToPayment,
  onNavigateToConnexion,
  onNavigateToConnexionForPayment
}: GameContentProps) => {
  const hasFullAccess = !game.is_premium || (game.is_premium && user && isUserPremium);

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Colonne principale - Contenu du jeu */}
      <div className="flex-1 min-w-0">
        {hasFullAccess ? (
          <GameFullView 
            game={game}
            isAuthenticated={isAuthenticated}
            isUserPremium={isUserPremium}
            user={user}
            onRedirectToPayment={onRedirectToPayment}
            onNavigateToConnexionForPayment={onNavigateToConnexionForPayment}
          />
        ) : (
          <GamePaywallView
            game={game}
            isAuthenticated={isAuthenticated}
            isUserPremium={isUserPremium}
            user={user}
            onRedirectToPayment={onRedirectToPayment}
            onNavigateToConnexion={onNavigateToConnexion}
            onNavigateToConnexionForPayment={onNavigateToConnexionForPayment}
          />
        )}
      </div>

      {/* Colonne droite - Bouton Premium + Formulaire Brevo - seulement pour les jeux gratuits */}
      {!game.is_premium && (
        <PremiumSidebar
          isAuthenticated={isAuthenticated}
          isUserPremium={isUserPremium}
          user={user}
          onRedirectToPayment={onRedirectToPayment}
          onNavigateToConnexion={onNavigateToConnexion}
          onNavigateToConnexionForPayment={onNavigateToConnexionForPayment}
        />
      )}
    </div>
  );
};

export default GameContent;
