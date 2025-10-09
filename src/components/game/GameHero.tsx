import { Game } from "@/data/games";
import { Star } from "lucide-react";

interface GameHeroProps {
  game: Game;
  imageSrc: string;
  isUserPremium?: boolean;
}

const GameHero = ({ game, imageSrc, isUserPremium = false }: GameHeroProps) => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 mb-8 w-full">
      {/* Image à gauche */}
      <div className="flex-shrink-0 lg:w-80">
        <img
          src={imageSrc}
          alt={`Illustration jeu ${game.titre}`}
          className="w-full shadow-lg rounded-xl"
          style={{ display: 'block', maxWidth: '100%', height: 'auto' }}
        />
      </div>
      
      {/* Informations à droite */}
      <div className="flex-1 space-y-4">
        {/* Titre avec étoile */}
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-bold text-primary">
            {game.titre}
          </h1>
          <Star className="w-6 h-6 text-yellow-400 fill-current" />
        </div>
        
        {/* Badges existants + durée */}
        <div className="flex flex-wrap gap-2">
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
        
        {/* Avantage Premium - affiché pour tous sauf les utilisateurs premium */}
        {!isUserPremium && game.avantagePremium && game.avantagePremium.trim() && (
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-4">
            <p className="text-purple-800 font-medium">
              ✨ {game.avantagePremium}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameHero;
