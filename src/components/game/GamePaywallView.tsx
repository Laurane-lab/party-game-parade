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
  const previewExamples = game.examples?.slice(0, 2) ?? [];

  return (
    <>
      {/* Description courte pour les jeux premium */}
      {game.is_premium && (
        <div className="text-base font-sans mb-6 max-w-xl lg:max-w-md mx-auto">
          <p className="text-gray-700">{game.shortDescription}</p>
        </div>
      )}

      {previewExamples.length > 0 && (
        <div className="font-sans mb-8 max-w-xl lg:max-w-md mx-auto text-left">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">Exemples</h3>
          <div className="space-y-2">
            {previewExamples.map((example, index) => {
              const hasHtml = /<[a-z][\s\S]*>/i.test(example);

              if (hasHtml) {
                return (
                  <p
                    key={index}
                    className="text-sm text-gray-600 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: example }}
                  />
                );
              }

              return (
                <p key={index} className="text-sm text-gray-600 leading-relaxed">
                  {example}
                </p>
              );
            })}
          </div>
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
