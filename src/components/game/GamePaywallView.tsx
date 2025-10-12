import { Game } from "@/data/games";
import GameStoryQuote from "./GameStoryQuote";
import GameBrevoForm from "./GameBrevoForm";

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
  game
}: GamePaywallViewProps) => {
  return (
    <>
      {/* Description courte pour les jeux premium */}
      {game.is_premium && (
        <div className="text-base font-sans mb-6">
          <p className="text-gray-700">{game.shortDescription}</p>
        </div>
      )}
      
      <GameStoryQuote story={game.story} />
      
      {/* Formulaire Brevo pour inscription newsletter */}
      <GameBrevoForm />
    </>
  );
};

export default GamePaywallView;
