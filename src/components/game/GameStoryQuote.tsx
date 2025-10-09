const catMascot = "/assets/New mascot.png";

interface GameStoryQuoteProps {
  story: string;
}

const GameStoryQuote = ({ story }: GameStoryQuoteProps) => {
  return (
    <div className="mt-8 bg-party-pink/10 rounded-lg p-4 flex items-center gap-4 shadow-md border border-party-pink/40">
      <img
        src={catMascot}
        alt="Mascotte Aperololo"
        className="w-16 h-16 object-contain self-center"
      />
      <blockquote className="text-base text-gray-900 italic flex-1 px-2">
        <span className="block" dangerouslySetInnerHTML={{ __html: story }} />
      </blockquote>
    </div>
  );
};

export default GameStoryQuote;
