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
          <div className="text-base font-sans mt-8">
            <div className="flex items-center gap-3 mb-4 pb-2 border-b border-gray-200">
              <div className="flex items-center justify-center w-8 h-8 bg-purple-100 rounded-lg">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Exemple</h3>
            </div>
            <p className="ml-6 text-gray-700 leading-relaxed">{game.examples}</p>
          </div>
        )}
      </>
    );
  }

  // Special case for "Le mot commun" with custom explanations
  if (game.titre === "Le mot commun") {
    return (
      <div className="text-base font-sans mt-8">
        <div className="flex items-center gap-3 mb-4 pb-2 border-b border-gray-200">
          <div className="flex items-center justify-center w-8 h-8 bg-purple-100 rounded-lg">
            <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Exemples</h3>
        </div>
        {game.examples.map((ex, idx) => (
          <div key={idx} className="mb-4">
            <ul className="list-disc ml-6">
              <li className="text-gray-700 leading-relaxed">{ex}</li>
            </ul>
            <div className="ml-6 mt-2 text-sm text-muted-foreground">
              {idx === 0 && "Objets qui fonctionnent : une carte d'un roi, une lumière pour illustrer Versailles, une couronne etc."}
              {idx === 1 && "Objets qui fonctionnent : une urne, une tête de mort, une pierre, etc."}
              {idx === 2 && "Objets qui fonctionnent : un oeuf, tout objet rond,  etc."}
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Default case
  return <SectionList title="Exemples" items={game.examples} />;
};

export default ExamplesSection;
