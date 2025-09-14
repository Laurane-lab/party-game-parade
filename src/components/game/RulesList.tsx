import { Game } from "@/data/games";

interface RulesListProps {
  game: Game;
}

const RulesList = ({ game }: RulesListProps) => {
  return (
    <div className="mb-2 text-base font-sans">
      <strong>Règles :</strong>
      <ol className="list-decimal ml-6 mt-2">
        {game.rules.map((rule, idx) => {
          if (game.titre === "Pas dans le rythme" && idx === 1) {
            return <li key={idx} dangerouslySetInnerHTML={{ __html: rule }} />;
          }
          return <li key={idx}>{rule}</li>;
        })}
      </ol>
    </div>
  );
};

export default RulesList;
