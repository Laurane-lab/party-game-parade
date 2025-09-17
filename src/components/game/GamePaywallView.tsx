import { Game } from "@/data/games";
import { Button } from "@/components/ui/button";
import GameStoryQuote from "./GameStoryQuote";

interface GamePaywallViewProps {
  game: Game;
  isAuthenticated: boolean;
  isUserPremium: boolean;
  user: any;
  onRedirectToPayment: (email?: string) => void;
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
      onRedirectToPayment(user?.email);
    } else {
      onNavigateToConnexion();
    }
  };

  const buttonLabel = isUserPremium && !user ? 'Se connecter pour accéder' : 'Devenir premium';

  return (
    <>
      <GameStoryQuote story={game.story} />
      <div className="flex flex-col items-center mt-8 space-y-4">
        <Button
          variant="secondary"
          className="w-full max-w-md px-6 py-4 rounded-xl text-xl font-extrabold"
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
    </>
  );
};

export default GamePaywallView;
