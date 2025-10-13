import { Game } from "@/data/games";
import RulesList from "./RulesList";
import SectionList from "./SectionList";
import NuagesLinks from "./NuagesLinks";
import ToursSection from "./ToursSection";
import ExamplesSection from "./ExamplesSection";
import SpotifySuggestions from "./SpotifySuggestions";
import GameStoryQuote from "./GameStoryQuote";
import GameBrevoForm from "./GameBrevoForm";
import PremiumAdvantageCard from "./PremiumAdvantageCard";

interface GameFullViewProps {
  game: Game;
  isAuthenticated?: boolean;
  isUserPremium?: boolean;
  user?: any;
  onRedirectToPayment?: (email?: string) => void;
  onNavigateToConnexionForPayment?: () => void;
}

const GameFullView = ({ 
  game, 
  isAuthenticated = false, 
  isUserPremium = false, 
  user, 
  onRedirectToPayment = () => {}, 
  onNavigateToConnexionForPayment = () => {} 
}: GameFullViewProps) => {
  return (
    <>
      {/* Description courte pour les jeux premium avant les règles complètes */}
      {game.is_premium && (
        <div className="text-base font-sans mb-6">
          <p className="text-gray-700">{game.shortDescription}</p>
        </div>
      )}
      
      {/* Avantage Premium - entre description courte et rules pour les jeux premium quand l'utilisateur n'est pas premium */}
      {game.is_premium && !isUserPremium && game.avantagePremium && game.avantagePremium.trim() && (
        <PremiumAdvantageCard
          game={game}
          isAuthenticated={isAuthenticated}
          user={user}
          onRedirectToPayment={onRedirectToPayment}
          onNavigateToConnexionForPayment={onNavigateToConnexionForPayment}
        />
      )}
      
      <RulesList game={game} />

      {/* Section Idées de chansons pour 'Pas dans le rythme' */}
      {game.titre === "Pas dans le rythme" && <SpotifySuggestions />}

      {/* Section Options de jeu pour 'Dessine à la chaîne' */}
      {game.titre === "Dessine à la chaîne" && game.materiel && game.optionsDeJeu && (
        <>
          <SectionList title="Matériel" items={game.materiel as string[]} />
          <SectionList title="Options de jeu" items={game.optionsDeJeu as string[]} />
        </>
      )}

      {/* Section pour 'Le mur du son' */}
      {game.titre === "Le mur du son" ? (
        <>
          {game.examples && <ExamplesSection game={game} />}
          {game.nuages && <NuagesLinks nuages={game.nuages} />}
        </>
      ) : game.titre === "Dos à dos" && game.examples ? (
        <ExamplesSection game={game} />
      ) : game.titre === "Suite de stars" && game.examples ? (
        <ExamplesSection game={game} />
      ) : game.titre === "Jusqu'à 10" && game.contraintes ? (
        <ExamplesSection game={game} />
      ) : game.titre === "Le mot commun" && game.examples ? (
        <ExamplesSection game={game} />
      ) : game.showTours && game.tours && game.tours.length > 0 ? (
        <ToursSection tours={game.tours} />
      ) : (
        <div className="text-base font-sans"></div>
      )}

      {/* Section Idées d'enchères pour 'Les enchères' */}
      {game.titre === "Les enchères" && game.idees && (
        <>
        <ExamplesSection game={game} />
        <SectionList title="Idées d'enchères" items={game.idees as string[]} />
        </>
      )}

      {/* Section Matériel pour 'Mission secrète' */}
      {game.titre === "Mission secrète" && game.materiel && (
        <div className="mt-8 text-base font-sans">
          <div className="flex items-center gap-3 mb-4 pb-2 border-b border-gray-200">
            <div className="flex items-center justify-center w-8 h-8 bg-green-100 rounded-lg">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Matériel</h3>
          </div>
          <p className="ml-6 text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: game.materiel as string }}></p>
        </div>
      )}

      <GameStoryQuote story={game.story} />
      
      {/* Formulaire Brevo pour inscription newsletter */}
      <GameBrevoForm />
    </>
  );
};

export default GameFullView;
