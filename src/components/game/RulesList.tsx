import { Game } from "@/data/games";

interface RulesListProps {
  game: Game;
}

const RulesList = ({ game }: RulesListProps) => {
  return (
    <div className="mb-8 text-base font-sans">
      <div className="flex items-center gap-3 mb-4 pb-2 border-b border-gray-200">
        <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-lg">
          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-800">Règles</h3>
      </div>
      <ol className="list-decimal ml-6 space-y-2">
        {game.rules.map((rule, idx) => {
          const hasHtml = /<[a-z][\s\S]*>/i.test(rule);
          if (hasHtml) {
            return <li key={idx} className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: rule }} />;
          }
          return <li key={idx} className="text-gray-700 leading-relaxed">{rule}</li>;
        })}
      </ol>
    </div>
  );
};

export default RulesList;
