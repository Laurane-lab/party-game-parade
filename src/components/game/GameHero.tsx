import { Game } from "@/data/games";
import { Star } from "lucide-react";

interface GameHeroProps {
  game: Game;
  imageSrc: string;
}

const GameHero = ({ game, imageSrc }: GameHeroProps) => {
  return (
    <div className="flex flex-col items-center gap-4 mb-8 w-full">
      {/* Image de couverture */}
      <div className="w-full max-w-md">
        <img
          src={imageSrc}
          alt={`Illustration jeu ${game.titre}`}
          className="w-full shadow-lg rounded-xl"
          style={{ display: 'block', maxWidth: '100%', height: 'auto' }}
        />
      </div>
      
      {/* Informations sous l'image */}
      <div className="flex flex-col items-center gap-2 text-center">
        {/* Titre avec étoile */}
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-bold text-primary">
            {game.titre}
          </h1>
          <Star className="w-6 h-6 text-yellow-400 fill-current" />
        </div>
        
        {/* Badges existants + durée */}
        <div className="flex flex-wrap justify-center gap-2">
          <span className="px-3 py-1 rounded bg-party-pink/20 text-party-pink font-semibold">
            {game.modeDeJeu}
          </span>
          <span className="px-3 py-1 rounded bg-party-blue/20 text-party-blue font-semibold">
            {game.joueurs} joueurs
          </span>
          <span className="px-3 py-1 rounded bg-green-100 text-green-700 font-semibold">
            {game.duree}
          </span>
        </div>
      </div>
    </div>
  );
};

export default GameHero;
