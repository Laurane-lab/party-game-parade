import { Game } from "@/data/games";
import RulesList from "./RulesList";
import SectionList from "./SectionList";
import NuagesLinks from "./NuagesLinks";
import ToursSection from "./ToursSection";
import ExamplesSection from "./ExamplesSection";
import SpotifySuggestions from "./SpotifySuggestions";
import GameStoryQuote from "./GameStoryQuote";

interface GameFullViewProps {
  game: Game;
}

const GameFullView = ({ game }: GameFullViewProps) => {
  return (
    <>
      {/* Description courte pour les jeux premium avant les règles complètes */}
      {game.is_premium && (
        <div className="text-base font-sans mb-6">
          <p className="text-gray-700">{game.shortDescription}</p>
        </div>
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
      {game.titre === "Le mur du son" && game.conseil && game.nuages ? (
        <>
          <SectionList title="Conseil" items={game.conseil} />
          <NuagesLinks nuages={game.nuages} />
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
        <SectionList title="Idées d'enchères" items={game.idees as string[]} asHtml />
        </>
      )}

      {/* Section Matériel pour 'Mission secrète' */}
      {game.titre === "Mission secrète" && game.materiel && (
        <div className="mt-6 text-base font-sans">
          <strong>Matériel :</strong>
          <p className="mt-2" dangerouslySetInnerHTML={{ __html: game.materiel as string }}></p>
        </div>
      )}

      <GameStoryQuote story={game.story} />
    </>
  );
};

export default GameFullView;
