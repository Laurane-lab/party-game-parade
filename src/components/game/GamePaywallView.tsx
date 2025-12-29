import { Game } from "@/data/games";
import GameStoryQuote from "./GameStoryQuote";
import GameBrevoForm from "./GameBrevoForm";
import PremiumAdvantageCard from "./PremiumAdvantageCard";

interface GamePaywallViewProps {
  game: Game;
  isAuthenticated: boolean;
  isUserPremium: boolean;
  user: any;
  onRedirectToPayment: (email?: string) => void;
  onNavigateToConnexion: () => void;
  onNavigateToConnexionForPayment: () => void;
}

const GamePaywallView = ({
  game,
  isAuthenticated,
  isUserPremium,
  user,
  onRedirectToPayment,
  onNavigateToConnexion,
  onNavigateToConnexionForPayment
}: GamePaywallViewProps) => {
  return (
    <>
      {/* Description courte pour les jeux premium */}
      {game.is_premium && (
        <div className="text-base font-sans mb-6">
          <p className="text-gray-700">{game.shortDescription}</p>
        </div>
      )}
      
      {/* Avantage Premium - entre description courte et story pour les jeux premium */}
      {game.is_premium && !isUserPremium && (
        <PremiumAdvantageCard
          game={game}
          isAuthenticated={isAuthenticated}
          user={user}
          onRedirectToPayment={onRedirectToPayment}
          onNavigateToConnexionForPayment={onNavigateToConnexionForPayment}
        />
      )}
      
      <GameStoryQuote story={game.story} />
      
      {/* Formulaire Brevo pour inscription newsletter */}
      <GameBrevoForm />
    </>
  );
};

export default GamePaywallView;
