import { Game } from "@/data/games";
import { Button } from "@/components/ui/button";
import GameStoryQuote from "./GameStoryQuote";

interface GamePaywallViewProps {
  game: Game;
  isAuthenticated: boolean;
  isUserPremium: boolean;
  user: any;
  onRedirectToPayment: () => void;
  onNavigateToConnexion: () => void;
}

const GamePaywallView = ({
  game,
  isAuthenticated,
  isUserPremium,
  user,
  onRedirectToPayment,
  onNavigateToConnexion
}: GamePaywallViewProps) => {
  const handleButtonClick = () => {
    if (isAuthenticated) {
      onRedirectToPayment();
    } else {
      onNavigateToConnexion();
    }
  };

  const buttonLabel = isUserPremium && !user ? 'Se connecter pour accéder' : 'Devenir premium';

  return (
    <>
      <GameStoryQuote story={game.story} />
      <div className="flex justify-center mt-8">
        <Button
          variant="secondary"
          className="w-full max-w-md px-6 py-4 rounded-xl text-xl font-extrabold"
          onClick={handleButtonClick}
        >
          {buttonLabel}
        </Button>
      </div>
    </>
  );
};

export default GamePaywallView;
