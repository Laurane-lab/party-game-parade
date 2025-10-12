import { Game } from "@/data/games";
import { Star } from "lucide-react";
import { UserGroupIcon, ClockIcon, PlayIcon } from '@heroicons/react/24/outline';

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
        
        {/* Informations de jeu avec icônes */}
        <div className="flex flex-wrap justify-center gap-6">
          <div className="flex items-center gap-2">
            <PlayIcon className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600 font-medium">
              {game.modeDeJeu}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <UserGroupIcon className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600 font-medium">
              {game.joueurs} joueurs
            </span>
          </div>
          <div className="flex items-center gap-2">
            <ClockIcon className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600 font-medium">
              {game.duree}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameHero;
