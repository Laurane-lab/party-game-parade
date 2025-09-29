import { Game } from "@/data/games";
import GameFullView from "./GameFullView";
import GamePaywallView from "./GamePaywallView";

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

  if (hasFullAccess) {
    return <GameFullView game={game} />;
  }

  return (
    <GamePaywallView
      game={game}
      isAuthenticated={isAuthenticated}
      isUserPremium={isUserPremium}
      user={user}
      onRedirectToPayment={onRedirectToPayment}
      onNavigateToConnexion={onNavigateToConnexion}
      onNavigateToConnexionForPayment={onNavigateToConnexionForPayment}
    />
  );
};

export default GameContent;
