import { Game } from "@/data/games";
import SectionList from "./SectionList";

interface ExamplesSectionProps {
  game: Game;
}

const ExamplesSection = ({ game }: ExamplesSectionProps) => {
  if (!game.examples) return null;

  // Special case for "Dos à dos"
  if (game.titre === "Dos à dos") {
    return <SectionList title="Idées de questions" items={game.examples} />;
  }

  // Special case for "Suite de stars" with hideExamples check
  if (game.titre === "Suite de stars") {
    if (game.hideExamples) return null;
    return <SectionList title="Exemples" items={game.examples} />;
  }

  // Special case for "Jusqu'à 10" - shows contraintes and example as paragraph
  if (game.titre === "Jusqu'à 10") {
    return (
      <>
        {game.contraintes && (
          <SectionList title="Idées de contraintes" items={game.contraintes} />
        )}
        {game.examples && (
          <div className="text-base font-sans mt-4">
            <strong>Exemple :</strong>
            <p className="ml-6 mt-2">{game.examples}</p>
          </div>
        )}
      </>
    );
  }

  // Special case for "Le mot commun" with custom explanations
  if (game.titre === "Le mot commun") {
    return (
      <div className="text-base font-sans">
        <strong>Exemples :</strong>
        {game.examples.map((ex, idx) => (
          <div key={idx} className="mb-1">
            <ul className="list-disc ml-6 mt-2">
              <li>{ex}</li>
            </ul>
            <div className="ml-6 mt-1 text-sm text-muted-foreground">
              {idx === 0 && "Objets qui fonctionnent : une carte d'un roi, une lumière pour illustrer Versailles, une couronne etc."}
              {idx === 1 && "Objets qui fonctionnent : une urne, une tête de mort, une pierre, etc."}
              {idx === 2 && "Objets qui fonctionnent : un oeuf, tout objet rond,  etc."}
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Special case for "Les enchères"
  if (game.titre === "Les enchères") {
    return (
      <div className="text-base font-sans mt-4">
        <strong>Exemple :</strong>
        <p className="ml-6 mt-2" dangerouslySetInnerHTML={{ __html: game.examples[0] }}></p>
      </div>
    );
  }

  // Default case
  return <SectionList title="Exemples" items={game.examples} />;
};

export default ExamplesSection;
