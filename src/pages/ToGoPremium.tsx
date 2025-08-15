import React from "react";
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
  // Importer la liste des jeux premium depuis GameExplanation
  const premiumGames = [
    {
      name: "Dos à dos",
      modeDeJeu: "En binôme",
      players: "4-10",
      shortDescription: "Deux joueurs répondent à des questions en pointant du doigt, attention aux embrouilles !",
      icon: cauldronIcon
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
      shortDescription: "C'est comme un blindtest mais version lecture. Révélez votre talent de lecteur sans casser les oreilles de vos amis !",
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
      shortDescription: "C'est comme un téléphone arabe mais en dessin !",
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-xl w-full text-center border border-party-pink">
        <img src={catMascot} alt="Mascotte Aperololo" className="w-20 h-20 mx-auto mb-4" />
  <h1 className="text-2xl font-bold text-party-pink mb-6 leading-tight">Débloquez tous les jeux pour 4,99€ !</h1>
        {/* Grille des jeux premium */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
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
        <p className="mb-6 text-party-purple text-lg">Accédez à l'intégralité des jeux pour seulement 4,99€ et profitez de toutes les fonctionnalités premium.</p>
        <Button className="w-full mb-2" variant="secondary">Payer 4,99€ et devenir premium</Button>
        <Button className="w-full" variant="ghost" onClick={() => window.location.href = '/'}>Retour à l'accueil</Button>
      </div>
    </div>
  );
};

export default ToGoPremium;
