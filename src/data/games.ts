// Structure centralisée des jeux Party Game Parade
// Modifie ici pour mettre à jour partout sur le site

export type Game = {
  id: string;
  coverImage: string;
  icon: string;
  titre: string;
  joueurs: string;
  modeDeJeu: string;
  modeDeJeuPromo?: string;
  duree: string;
  shortDescription: string;
  promoDescription?: string;
  rules: string;
  conseil?: string;
  exemple?: string;
  idees?: string;
  materiel?: string;
  tours?: string;
  is_premium: boolean;
  story: string;
};

export const games: Game[] = [
  {
    id: 'aperololo',
    coverImage: '/src/assets/aperololo-lesencheres.jpg',
    icon: '/src/assets/icon/hat-thks-icongeek26.png',
    titre: 'Aperololo',
    joueurs: '4-12',
    modeDeJeu: 'Défis en équipe',
    modeDeJeuPromo: 'Défis premium et exclusifs',
    duree: '20 min',
    shortDescription: "Un jeu d'ambiance pour lancer la soirée !",
    promoDescription: "Profitez d'Aperololo en version premium pour des défis exclusifs !",
    rules: "Chaque équipe tire un défi et doit le réaliser.",
    conseil: "Soyez créatifs et osez !",
    exemple: "Exemple de défi : Faire rire l'équipe adverse.",
    idees: "Défis créatifs, défis musicaux, défis d'imitation.",
    materiel: "Aucun",
    tours: "1 tour par équipe",
    is_premium: true,
    story: "Lancez des défis et amusez-vous entre amis."
  },
  {
    id: 'dessine-a-la-chaine',
    coverImage: '/src/assets/dessine a la chaine.png',
    icon: '/src/assets/icon/quill-thks-icongeek26.png',
    titre: "Dessine à la chaîne",
    joueurs: '3-8',
    modeDeJeu: 'Tour par tour',
    duree: '15 min',
    shortDescription: "Un jeu de dessin collaboratif et hilarant.",
    rules: "Un joueur dessine, le suivant devine, et ainsi de suite.",
    conseil: "Ne vous prenez pas trop au sérieux !",
    exemple: "Dessiner un animal, puis le suivant doit deviner et dessiner ce qu'il pense.",
    idees: "Animaux, objets, célébrités.",
    materiel: "Feuilles et stylos",
    tours: "1 tour par joueur",
    is_premium: false,
    story: "Dessinez et faites deviner, attention aux déformations !"
  },
  // Ajoute ici d'autres jeux selon la même structure
];
