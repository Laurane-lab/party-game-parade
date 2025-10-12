import { Game } from "@/data/games";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PremiumAdvantageCardProps {
  game: Game;
  isAuthenticated: boolean;
  user: any;
  onRedirectToPayment: (email?: string) => void;
  onNavigateToConnexionForPayment: () => void;
}

const PremiumAdvantageCard = ({
  game,
  isAuthenticated,
  user,
  onRedirectToPayment,
  onNavigateToConnexionForPayment
}: PremiumAdvantageCardProps) => {
  const handleButtonClick = () => {
    if (isAuthenticated) {
      onRedirectToPayment(user?.email);
    } else {
      onNavigateToConnexionForPayment();
    }
  };

  // Liste des avantages premium génériques
  const premiumAdvantages = [
    "Accès à tous les 7 jeux premium",
    "Versions enrichies des jeux gratuits",
    "Règles complètes et listes de matériel",
    "Exemples créatifs et variantes",
    "Accès à vie - payez une fois, jouez toujours",
    "Accès anticipé aux nouveaux packs de jeux"
  ];

  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-6 mb-6 text-white">
      {/* Titre */}
      <h3 className="text-2xl font-bold mb-4 text-center">
        Pour devenir premium
      </h3>

      {/* Avantage spécifique du jeu */}
      {game.avantagePremium && game.avantagePremium.trim() && (
        <div className="bg-white/20 rounded-lg p-3 mb-4">
          <p className="font-medium text-center">
            ✨ {game.avantagePremium}
          </p>
        </div>
      )}

      {/* Liste des avantages */}
      <ul className="space-y-2 mb-6">
        {premiumAdvantages.map((advantage, index) => (
          <li key={index} className="flex items-center gap-3">
            <Check className="w-5 h-5 text-green-300 flex-shrink-0" />
            <span className="text-sm">{advantage}</span>
          </li>
        ))}
      </ul>

      {/* Bouton */}
      <Button
        onClick={handleButtonClick}
        className="w-full bg-white text-purple-600 hover:bg-gray-100 font-bold py-3 rounded-lg"
      >
        Passer Premium
      </Button>

      {/* Texte sous le bouton */}
      <p className="text-center text-xs mt-3 text-white/80">
        Paiement unique de 4,99€ - Accès à vie
      </p>
    </div>
  );
};

export default PremiumAdvantageCard;
