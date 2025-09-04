import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import catMascot from "@/assets/New mascot.png";
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

const ToGoPremium = () => {
  const navigate = useNavigate();
  // Importer la liste des jeux premium depuis GameExplanation
  const freeGames = [
    {
      name: "Le mur du son",
      modeDeJeu: "Toi contre tous",
      players: "3-10",
      shortDescription: "Ce n'est pas celui de Willy Denzey mais il va tous vous faire chanter !",
      icon: cauldronIcon
    },
    {
      name: "Jusqu'à 10",
      modeDeJeu: "Toi contre tous",
      players: "3-5",
      shortDescription: "Et si compter jusqu'à 10 n'était pas si simple finalement ?",
      icon: hatIcon
    },
    {
      name: "Suite de stars",
      modeDeJeu: "Toi contre tous",
      players: "3-12",
      shortDescription: "Enchaîne les noms de célébrités selon des règles originales.",
      icon: wandIcon
    }
  ];

  const premiumGames = [
    {
      name: "Dos à dos",
      modeDeJeu: "En binôme",
      players: "4-10",
      shortDescription: "Connais-tu vraiment ton binôme ou les invités seront-ils plus forts que vous ?",
      icon: cloakIcon
    },
    {
      name: "Mission secrète",
      modeDeJeu: "En équipe",
      players: "6-20",
      shortDescription: "Accomplis des missions secrètes sans te faire repérer, et démasque les autres !",
      icon: cloakIcon
    },
    {
      name: "Sans rire",
      modeDeJeu: "Toi contre tous",
      players: "4-8",
      shortDescription: "Fais rire les autres sans craquer toi-même. Celui qui rit perd des points !",
      icon: crystalsIcon
    },
    {
      name: "Pas dans le rythme",
      modeDeJeu: "En équipe",
      players: "4-15",
      shortDescription: "C'est comme un blindtest mais sans musique. Idéal pour ne pas casser les oreilles de tes voisins !",
      icon: hatIcon
    },
    {
      name: "Les enchères",
      modeDeJeu: "En équipe",
      players: "3-10",
      shortDescription: "Le but est de donner un maximum de réponses sur un thème donné.",
      icon: mortarIcon
    },
    {
      name: "Dessine à la chaîne",
      modeDeJeu: "En équipe",
      players: "4-10",
      shortDescription: "Découvre la fusion d'un Pictionary et d'un téléphone arabe !",
      icon: quillIcon
    },
    {
      name: "Le mot commun",
      modeDeJeu: "Toi contre tous",
      players: "3-10",
      shortDescription: "Plus rapide et plus fun qu'une énigme !",
      icon: scrollIcon
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="flex flex-col items-center justify-center flex-1">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-xl w-full text-center border border-party-pink">
          <img src={catMascot} alt="Mascotte Aperololo" className="w-20 h-20 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-party-pink mb-6 leading-tight">Débloque tous les jeux pour 4,99€ !</h1>
          {/* Grille des jeux premium */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {/* Jeux gratuits en premier */}
            {freeGames.map((game) => (
              <div key={game.name} className="rounded-xl border border-green-300 bg-green-50 shadow-sm p-6 flex flex-col items-start text-left" style={{ minHeight: '180px' }}>
                <div className="flex items-center w-full mb-2 gap-2">
                  <img src={game.icon} alt={game.name + ' icon'} className="w-7 h-7 object-contain" style={{marginRight: '6px'}} />
                  <h2 className="text-lg font-semibold text-party-green m-0 whitespace-nowrap overflow-hidden text-ellipsis" style={{maxWidth: '140px'}}>{game.name}</h2>
                </div>
                  <div className="flex flex-row gap-2 text-xs mb-2 w-full">
                    <span className="px-2 py-1 rounded bg-party-pink/20 text-party-pink font-semibold">{game.modeDeJeu}</span>
                    <span className="px-2 py-1 rounded bg-party-blue/20 text-party-blue font-semibold">{game.players} joueurs</span>
                </div>
                <div className="text-sm text-muted-foreground mb-0 w-full">{game.shortDescription}</div>
              </div>
            ))}
            {/* Jeux premium ensuite */}
            {premiumGames.map((game) => (
              <div key={game.name} className="rounded-xl border border-gray-200 bg-gray-50 shadow-sm p-6 flex flex-col items-start text-left" style={{ minHeight: '180px' }}>
                <div className="flex items-center w-full mb-2 gap-2">
                  <img src={game.icon} alt={game.name + ' icon'} className="w-7 h-7 object-contain" style={{marginRight: '6px'}} />
                  <h2 className="text-lg font-semibold text-party-purple m-0 whitespace-nowrap overflow-hidden text-ellipsis" style={{maxWidth: '140px'}}>{game.name}</h2>
                </div>
                <div className="flex flex-row gap-2 text-xs mb-2 w-full">
                  <span className="px-2 py-1 rounded bg-party-pink/20 text-party-pink font-semibold">{game.modeDeJeu}</span>
                  <span className="px-2 py-1 rounded bg-party-blue/20 text-party-blue font-semibold">{game.players} joueurs</span>
                </div>
                <div className="text-sm text-muted-foreground mb-0 w-full">{game.shortDescription}</div>
              </div>
            ))}
          </div>
                    <Button className="w-full mb-2" variant="secondary" onClick={() => navigate('/connexion?redirect_to=payment')}>Accède à l'intégralité des jeux pour seulement 4,99€.</Button>
          <Button className="w-full" variant="ghost" onClick={() => window.location.href = '/'} id="main-home-btn-ref">Retour à l'accueil</Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

// ...existing code...

// Bouton flottant pour retour à l'accueil
import { useEffect, useRef, useState } from "react";

const FloatingHomeButton = () => {
  const mainButtonRef = useRef(null);
  const [hideFloating, setHideFloating] = useState(false);

  useEffect(() => {
    const checkVisibility = () => {
      let hide = false;
      if (mainButtonRef.current) {
        const rect = mainButtonRef.current.getBoundingClientRect();
        // Visible si le bouton principal est dans la fenêtre
        hide = rect.top < window.innerHeight && rect.bottom > 0;
      }
      // Disparaît si on est en bas de la page
      const scrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 2;
      setHideFloating(hide || scrolledToBottom);
    };
    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);
    checkVisibility();
    return () => {
      window.removeEventListener('scroll', checkVisibility);
      window.removeEventListener('resize', checkVisibility);
    };
  }, []);

  return (
    <>
      <button
        ref={mainButtonRef}
        style={{ display: 'none' }}
        id="main-home-btn-ref"
      />
      {!hideFloating && (
        <button
          onClick={() => window.location.href = '/'}
          className="fixed bottom-3 right-3 z-50 bg-party-pink text-white rounded-full shadow-lg px-2 py-1 text-xs font-bold hover:bg-party-purple transition"
          aria-label="Retour à l'accueil"
          style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.15)' }}
        >
          Accueil
        </button>
      )}
    </>
  );
};

const ToGoPremiumWithFloatingButton = () => (
  <>
    <FloatingHomeButton />
    <ToGoPremium />
  </>
);

export default ToGoPremiumWithFloatingButton;
