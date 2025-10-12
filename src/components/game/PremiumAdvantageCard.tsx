import { Game } from "@/data/games";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { usePremium } from "@/hooks/use-premium";

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
  const { isPremium } = usePremium();

  // Si l'utilisateur est déjà premium, ne pas afficher le composant
  if (isPremium) {
    return null;
  }

  const handleButtonClick = () => {
    if (isAuthenticated) {
      onRedirectToPayment(user?.email);
    } else {
      onNavigateToConnexionForPayment();
    }
  };

  // Liste des avantages premium génériques
  const genericAdvantages = [
    "Accès à tous les 7 jeux premium",
    "Versions enrichies des jeux gratuits",
    "Règles complètes et listes de matériel",
    "Exemples créatifs et variantes",
    "Accès à vie - payez une fois, jouez toujours",
    "Accès anticipé aux nouveaux packs de jeux"
  ];

  // Combine les avantages génériques avec l'avantage spécifique du jeu
  const premiumAdvantages = [
    game.avantagePremium, // Avantage spécifique du jeu en premier
    ...genericAdvantages
  ];

  return (
    <div className="bg-white rounded-lg p-3 mb-6 shadow-lg border-2 border-party-pink max-w-md mx-auto">
      {/* Titre */}
      <h3 className="text-lg font-bold mb-3 text-center text-gray-900">
        Le starter pack premium
      </h3>

      {/* Liste des avantages */}
      <ul className="space-y-1 mb-4">
        {premiumAdvantages.map((advantage, index) => (
          <li key={index} className="flex items-center gap-2">
            <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
            <span className="text-xs text-gray-700">{advantage}</span>
          </li>
        ))}
      </ul>

      {/* Bouton */}
      <Button
        onClick={handleButtonClick}
        className="w-full text-sm px-6 py-2 bg-gradient-to-r from-party-pink to-party-orange hover:from-party-orange hover:to-party-pink text-white font-semibold rounded-lg"
      >
        Passer Premium
      </Button>

      {/* Texte sous le bouton */}
      <p className="text-center text-xs mt-2 text-gray-600">
        Connexion puis paiement unique de 4,99€
      </p>
    </div>
  );
};

export default PremiumAdvantageCard;
