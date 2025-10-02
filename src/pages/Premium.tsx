import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import BrevoForm from "@/components/BrevoForm";
import { useAuth } from "@/hooks/use-auth";
import { useIsMobile } from "@/hooks/use-mobile";
import { UserGroupIcon, ClockIcon } from "@heroicons/react/24/outline";
import cauldronIcon from "@/assets/icon/cauldron-thks-icongeek26.png";
import cloakIcon from "@/assets/icon/cloak-thks-icongeek26.png";
import crystalsIcon from "@/assets/icon/crystals-thks-icongeek26.png";
import hatIcon from "@/assets/icon/hat-thks-icongeek26.png";
import homeIcon from "@/assets/icon/home-thks-icongeek26.png";
import mortarIcon from "@/assets/icon/mortar-thks-icongeek26.png";
import quillIcon from "@/assets/icon/quill-thks-icongeek26.png";
import scrollIcon from "@/assets/icon/scroll-thks-icongeek26.png";
import smokeIcon from "@/assets/icon/smoke-thks-icongeek26.png";
import wandIcon from "@/assets/icon/wand-thks-icongeek26.png";
import { redirectToPayment } from "@/lib/payment";

interface GameInfo {
  name: string;
  modeDeJeu: string;
  players: string;
  duration: string;
  shortDescription: string;
  icon: string;
  material?: string; // Optional property for material included with the game
}

// Mapping entre les noms des jeux affichés et leurs IDs dans games.ts
const getGameIdFromName = (gameName: string): string | null => {
  const gameMapping: { [key: string]: string } = {
    "Le mur du son": "le-mur-du-son",
    "Jusqu'à 10": "jusqua-10",
    "Suite de stars": "suite-de-stars",
    "Dos à dos": "dos-a-dos",
    "Mission secrète": "mission-secrete",
    "Sans rire": "sans-rire",
    "Pas dans le rythme": "pas-dans-le-rythme",
    "Les enchères": "les-encheres",
    "Le mot commun": "mot-commun",
    "Dessine à la chaîne": "dessine-a-la-chaine"
  };
  return gameMapping[gameName] || null;
};

const Premium = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, user } = useAuth();
  const isMobile = useIsMobile();
  const [paymentCanceled, setPaymentCanceled] = useState(false);
  const [paymentError, setPaymentError] = useState<string | null>(null);

  // Fonction pour gérer le clic sur une carte de jeu
  const handleGameCardClick = (gameName: string) => {
    const gameId = getGameIdFromName(gameName);
    if (gameId) {
      navigate(`/game-explanation?id=${gameId}`);
    }
  };

  // Vérifier si le paiement a été annulé ou s'il y a eu une erreur
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('canceled') === 'true') {
      setPaymentCanceled(true);
    }

    const error = params.get('error');
    if (error) {
      switch (error) {
        case 'payment':
          setPaymentError("Erreur lors de la création de la session de paiement");
          break;
        case 'email':
          setPaymentError("Email non disponible. Veuillez vous reconnecter");
          break;
        case 'stripe':
          setPaymentError("Erreur du service de paiement. Veuillez réessayer plus tard");
          break;
        default:
          setPaymentError("Une erreur s'est produite. Veuillez réessayer");
      }
    }
  }, [location]);

  // Importer la liste des jeux premium depuis GameExplanation
  const freeGames: GameInfo[] = [
    {
      name: "Le mur du son",
      modeDeJeu: "Toi contre tous",
      players: "3-10",
      duration: "15-30 min",
      shortDescription: "Ce n'est pas celui de Willy Denzey mais il va tous vous faire chanter !",
      icon: cauldronIcon
    },
    {
      name: "Jusqu'à 10",
      modeDeJeu: "Toi contre tous",
      players: "3-5",
      duration: "20 min",
      shortDescription: "Et si compter jusqu'à 10 n'était pas si simple finalement ?",
      icon: hatIcon
    },
    {
      name: "Suite de stars",
      modeDeJeu: "Toi contre tous",
      players: "3-12",
      duration: "15-30 min",
      shortDescription: "Enchaîne les noms de célébrités selon des règles originales.",
      icon: wandIcon
    }
  ];

  const premiumGames: GameInfo[] = [
    {
      name: "Dos à dos",
      modeDeJeu: "En binôme",
      players: "4-10",
      duration: "20 min",
      shortDescription: "Connais-tu vraiment ton binôme ou les invités seront-ils plus forts que vous ?",
      icon: cloakIcon,
      material: "10 idées de questions"
    },
    {
      name: "Mission secrète",
      modeDeJeu: "En équipe",
      players: "6-20",
      duration: "15 min",
      shortDescription: "Accomplis des missions secrètes sans te faire repérer, et démasque les autres !",
      icon: cloakIcon,
      material: "Tableau des scores et 40 idées de missions"
    },
    {
      name: "Sans rire",
      modeDeJeu: "Toi contre tous",
      players: "4-8",
      duration: "30 min",
      shortDescription: "Fais rire les autres sans craquer toi-même. Celui qui rit perd des points !",
      icon: crystalsIcon,
      material: "3 minis jeux"
    },
    {
      name: "Pas dans le rythme",
      modeDeJeu: "En équipe",
      players: "4-15",
      duration: "25 min",
      shortDescription: "Un blind test... sans musique. Idéal pour ne pas casser les oreilles de tes voisins !",
      icon: hatIcon,
      material: "Une playlist réalisée par nos soins"
    },
    {
      name: "Les enchères",
      modeDeJeu: "En équipe",
      players: "3-10",
      duration: "20 min",
      shortDescription: "Le but est de donner un maximum de réponses sur un thème donné.",
      icon: mortarIcon,
      material: "5 idées d'enchères"
    },
    {
      name: "Le mot commun",
      modeDeJeu: "Toi contre tous",
      players: "3-10",
      duration: "30 min",
      shortDescription: "Trouve le lien entre trois mots et lance-toi dans une course pour réclamer ta victoire !",
      icon: scrollIcon,
      material: "7 propositions d'énigmes"
    },
    {
      name: "Dessine à la chaîne",
      modeDeJeu: "En équipe",
      players: "4-10",
      duration: "30 min",
      shortDescription: "Découvre la fusion d'un Pictionary et d'un téléphone arabe !",
      icon: quillIcon,
      material: "Aucun"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <div className={`flex flex-col items-center justify-center flex-1 px-4 ${isMobile ? 'pt-20 pb-10' : 'py-10'}`}>
        {paymentCanceled && (
          <div className="bg-amber-50 border-l-4 border-amber-500 text-amber-700 p-4 mb-8 w-full max-w-3xl mx-auto">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-amber-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zm-1 9a1 1 0 01-1-1v-4a1 1 0 112 0v4a1 1 0 01-1 1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm">Votre paiement a été annulé. Vous pouvez réessayer quand vous le souhaitez.</p>
              </div>
            </div>
          </div>
        )}

        {paymentError && (
          <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 mb-8 w-full max-w-3xl mx-auto">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zm-1 9a1 1 0 01-1-1v-4a1 1 0 112 0v4a1 1 0 01-1 1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm">{paymentError}</p>
              </div>
            </div>
          </div>
        )}
        <h1 className="text-3xl md:text-4xl font-bold text-party-pink mb-8 text-center leading-tight">Débloque tous les jeux pour 4,99€ !</h1>

        {/* Grille des jeux premium */}
        <div className="max-w-5xl w-full mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {/* Jeux gratuits en premier */}
            {freeGames.map((game) => (
              <div 
                key={game.name} 
                className="rounded-xl border border-green-300 bg-green-50 shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col items-start text-left cursor-pointer hover:bg-green-100 relative" 
                style={{ minHeight: '180px' }}
                onClick={() => handleGameCardClick(game.name)}
              >
                <div className="flex items-center w-full mb-2 gap-2">
                  <img src={game.icon} alt={game.name + ' icon'} className="w-7 h-7 object-contain" style={{ marginRight: '6px' }} />
                  <h2 className="text-lg font-semibold text-party-green m-0 whitespace-nowrap overflow-hidden text-ellipsis" style={{ maxWidth: '140px' }}>{game.name}</h2>
                </div>
                <div className="flex flex-row gap-2 text-xs mb-2 w-full">
                  <span className="px-2 py-1 rounded bg-party-pink/20 text-party-pink font-semibold">{game.modeDeJeu}</span>
                  <span className="px-2 py-1 rounded bg-party-blue/20 text-party-blue font-semibold flex items-center gap-1">
                    <UserGroupIcon className="w-3 h-3" />
                    {game.players}
                  </span>
                  <span className="px-2 py-1 rounded bg-party-purple/20 text-party-purple font-semibold flex items-center gap-1">
                    <ClockIcon className="w-3 h-3" />
                    {game.duration}
                  </span>
                </div>
                <div className="text-sm text-muted-foreground mb-0 w-full flex-grow">{game.shortDescription}</div>
                <div className="w-full flex justify-center mt-4">
                  <span className="px-3 py-1 bg-green-500 text-white rounded-md text-sm font-bold">
                    GRATUIT
                  </span>
                </div>
              </div>
            ))}
            {/* Jeux premium ensuite */}
            {premiumGames.map((game) => (
              <div 
                key={game.name} 
                className="rounded-xl border border-gray-200 bg-gray-50 shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col items-start text-left cursor-pointer hover:bg-gray-100" 
                style={{ minHeight: '220px' }}
                onClick={() => handleGameCardClick(game.name)}
              >
                <div className="flex items-center w-full mb-2 gap-2">
                  <img src={game.icon} alt={game.name + ' icon'} className="w-7 h-7 object-contain" style={{ marginRight: '6px' }} />
                  <h2 className="text-lg font-semibold text-party-purple m-0 whitespace-nowrap overflow-hidden text-ellipsis" style={{ maxWidth: '140px' }}>{game.name}</h2>
                </div>
                <div className="flex flex-row gap-2 text-xs mb-2 w-full">
                  <span className="px-2 py-1 rounded bg-party-pink/20 text-party-pink font-semibold">{game.modeDeJeu}</span>
                  <span className="px-2 py-1 rounded bg-party-blue/20 text-party-blue font-semibold flex items-center gap-1">
                    <UserGroupIcon className="w-3 h-3" />
                    {game.players}
                  </span>
                  <span className="px-2 py-1 rounded bg-party-purple/20 text-party-purple font-semibold flex items-center gap-1">
                    <ClockIcon className="w-3 h-3" />
                    {game.duration}
                  </span>
                </div>
                <div className="text-sm text-muted-foreground mb-2 w-full">{game.shortDescription}</div>
                {game.material && (
                  <div className="mt-auto w-full">
                    <div className="p-2 rounded-md">
                      <h4 className="font-bold text-xs mb-1 text-gray-600">Inclus :</h4>
                      <p className="text-xs text-gray-500">{game.material}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="max-w-md mx-auto flex flex-col gap-4">
            <Button
              className="w-full py-3 text-lg"
              variant="secondary"
              onClick={() => {
                if (isAuthenticated) {
                  redirectToPayment({ email: user?.email });
                } else {
                  navigate('/connexion?redirect_to=payment');
                }
              }}
            >
               Débloque tous les jeux pour 4,99€
            </Button>
            {!isAuthenticated && (
              <p className="text-center text-sm text-gray-600 -mt-2">
                Si tu es déjà premium,{' '}
                <button onClick={() => navigate('/connexion?redirect_to=payment')} className="underline hover:text-party-pink focus:outline-none">
                  clique ici pour te connecter
                </button>
              </p>
            )}
            <Button
              className="w-full mb-2"
              variant="ghost"
              onClick={() => navigate('/')}
            >
              Retour à l'accueil
            </Button>

            {/* Formulaire Brevo intégré directement */}
            <div className="mt-4">
              <BrevoForm />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Premium;
