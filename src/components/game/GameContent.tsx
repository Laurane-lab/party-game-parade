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
        {/* Avantage Premium - affiché pour tous sauf les utilisateurs premium */}
        {!isUserPremium && game.avantagePremium && game.avantagePremium.trim() && (
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-4 mb-6">
            <p className="text-purple-800 font-medium">
              ✨ {game.avantagePremium}
            </p>
          </div>
        )}
        
        {hasFullAccess ? (
          <GameFullView game={game} />
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

      {/* Colonne droite - Bouton Premium + Formulaire Brevo */}
      <PremiumSidebar
        isAuthenticated={isAuthenticated}
        isUserPremium={isUserPremium}
        user={user}
        onRedirectToPayment={onRedirectToPayment}
        onNavigateToConnexion={onNavigateToConnexion}
        onNavigateToConnexionForPayment={onNavigateToConnexionForPayment}
      />
    </div>
  );
};

export default GameContent;
