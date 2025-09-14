import { Game } from "@/data/games";

interface GameHeroProps {
  game: Game;
  imageSrc: string;
}

const GameHero = ({ game, imageSrc }: GameHeroProps) => {
  return (
    <div className="flex flex-col items-center mb-6 max-w-md mx-auto w-full">
      {/* Image d'illustration du jeu au-dessus du titre */}
      <img
        src={imageSrc}
        alt={`Illustration jeu ${game.titre}`}
        className="mb-4 shadow-lg rounded-xl"
        style={{ display: 'block', maxWidth: '100%', height: 'auto' }}
      />
      <h1 className="text-3xl font-bold text-primary text-center mb-4">
        {game.titre}
      </h1>
      <div className="w-full flex justify-center mb-4 gap-2">
        <span className="px-2 py-1 rounded bg-party-pink/20 text-party-pink font-semibold">{game.modeDeJeu}</span>
        <span className="px-2 py-1 rounded bg-party-blue/20 text-party-blue font-semibold">{game.joueurs} joueurs</span>
      </div>
      {game.is_premium && (
        <div className="w-full text-base font-sans mb-4">
          <p className="text-center">{game.shortDescription}</p>
        </div>
      )}
    </div>
  );
};

export default GameHero;
