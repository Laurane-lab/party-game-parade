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
    id: 'mur-du-son',
    coverImage: '/src/assets/aperololo-murduson.png',
    icon: '/src/assets/icon/smoke-thks-icongeek26.png',
    titre: 'Le mur du son',
    joueurs: '3-10',
    modeDeJeu: 'Seul(e) contre tous',
    modeDeJeuPromo: 'Défis musicaux premium',
    duree: '15-30 min',
    shortDescription: "Ce n'est pas celui de Willy Denzey mais il va tous vous faire chanter !",
    promoDescription: "Ce n'est pas celui de Willy Denzey mais il va tous vous faire chanter !",
    rules: "Trouver une chanson contenant le mot affiché. Pas de répétition, le maître du jeu décide qui répond.",
    conseil: "Déterminez une règle pour la priorité de réponse (ex : se lever, attraper une balle, etc.)",
    exemple: "Mot : Soleil → Chanson : 'Le soleil donne'",
    idees: "Thèmes : Disney, Rap, Français, Anglais.",
    materiel: "Aucun",
    tours: "1 tour par mot",
    is_premium: false,
    story: "N'hésite pas à faire chanter ton pote pour vérifier qu'il n'a pas inventé une chanson !"
  },
  {
    id: 'jusqua-10',
    coverImage: '/src/assets/jusqua10 v3.png',
    icon: '/src/assets/icon/scroll-thks-icongeek26.png',
    titre: "Jusqu'à 10",
    joueurs: '3-5',
    modeDeJeu: 'Seul(e) contre tous',
    modeDeJeuPromo: 'Contraintes premium',
    duree: '20 min',
    shortDescription: "Remplace les chiffres par des contraintes amusantes à chaque tour.",
    promoDescription: "Accède à des contraintes inédites et des variantes premium !",
    rules: "Compter jusqu'à 10, puis remplacer un chiffre par une contrainte à chaque tour.",
    conseil: "Décidez d'un gage pour celui qui se trompe.",
    exemple: "Dire le chiffre en chantant, dans une autre langue, ou faire une grimace.",
    idees: "Contraintes créatives, gages amusants.",
    materiel: "Aucun",
    tours: "1 tour par chiffre remplacé",
    is_premium: false,
    story: "À vous de décider ce qui se passe pour celui qui se trompe !"
  },
  {
    id: 'suite-de-stars',
    coverImage: '/src/assets/suite-de-stars-visuel.jpg',
    icon: '/src/assets/icon/wand-thks-icongeek26.png',
    titre: 'Suite de stars',
    joueurs: '3-12',
    modeDeJeu: 'Seul(e) contre tous',
    modeDeJeuPromo: 'Règles premium',
    duree: '15-30 min',
    shortDescription: "Enchaîne les noms de célébrités selon des règles originales.",
    promoDescription: "Débloque des variantes et des listes premium !",
    rules: "Citer une célébrité selon la règle choisie (ex : prénom commence par la dernière lettre du nom précédent).",
    conseil: "Pas de répétition, pas d'hésitation trop longue.",
    exemple: "Pablo Picasso → Orelsan → Natoo → Oliver Minne...",
    idees: "Variante : célébrités avec adjectif ou mot commun.",
    materiel: "Aucun",
    tours: "1 tour par joueur",
    is_premium: false,
    story: "Si la phonétique est la même, pour nous ça compte ! ex : Ramzy = i."
  },
  {
    id: 'dos-a-dos',
    coverImage: '/src/assets/dos-a-dos-visuel.jpg',
    icon: '/src/assets/icon/cloak-thks-icongeek26.png',
    titre: 'Dos à dos',
    joueurs: '4-10',
    modeDeJeu: 'En binôme',
    modeDeJeuPromo: 'Questions premium',
    duree: '20 min',
    shortDescription: "Deux joueurs répondent à des questions en pointant du doigt, attention aux embrouilles !",
    promoDescription: "Accède à des questions inédites et des variantes premium !",
    rules: "Deux joueurs dos à dos, répondent à des questions en pointant du doigt. Accord = victoire.",
    conseil: "Préparez des questions originales pour plus de fun.",
    exemple: "Qui passe le plus de temps sur son téléphone ?",
    idees: "Questions sur les habitudes, les défauts, les talents.",
    materiel: "Aucun",
    tours: "1 tour par binôme",
    is_premium: true,
    story: "Nous déclinons toute responsabilité en cas d'embrouilles entre vous..."
  },
  {
    id: 'mission-secrete',
    coverImage: '/src/assets/aperololo-missionsecrete.jpg',
    icon: '/src/assets/icon/cauldron-thks-icongeek26.png',
    titre: 'Mission secrète',
    joueurs: '6-20',
    modeDeJeu: 'En équipe',
    modeDeJeuPromo: 'Missions premium',
    duree: '15 min',
    shortDescription: "Accomplis des missions secrètes sans te faire repérer, et démasque les autres !",
    promoDescription: "Débloque des missions secrètes premium et des outils de suivi !",
    rules: "Chaque joueur reçoit une mission à accomplir sans se faire repérer. Accusations possibles pour démasquer les autres.",
    conseil: "Sois discret et observateur pour réussir tes missions.",
    exemple: "Mission : Faire rire quelqu'un sans qu'il s'en rende compte.",
    idees: "Missions créatives, défis secrets.",
    materiel: "Aucun",
    tours: "1 tour par mission",
    is_premium: true,
    story: "Pour faciliter le compte des points et l'attribution des missions, Apérololo t'a concocté un petit Excel."
  },
  {
    id: 'sans-rire',
    coverImage: '/src/assets/aperololo-faireriresansrire.png',
    icon: '/src/assets/icon/crystals-thks-icongeek26.png',
    titre: 'Sans rire',
    joueurs: '4-8',
    modeDeJeu: 'Seul(e) contre tous',
    modeDeJeuPromo: 'Tours premium',
    duree: '30 min',
    shortDescription: "Fais rire les autres sans craquer toi-même. Celui qui rit perd des points !",
    promoDescription: "Débloque des variantes de tours et des blagues premium !",
    rules: "Essayer de faire rire les autres sans rire soi-même. Celui qui rit perd des points.",
    conseil: "Ajoutez des tours ou des concours de blagues pour varier le jeu.",
    exemple: "Faire une imitation, raconter une blague de daron.",
    idees: "Concours de blagues, imitations, défis muets.",
    materiel: "Aucun",
    tours: "3 tours ou plus selon l'envie",
    is_premium: true,
    story: "Vous pouvez ajouter autant de tours que vous voulez. Le tour 4 peut être un concours de blagues de darons par exemple."
  },
  {
    id: 'pas-dans-le-rythme',
    coverImage: '/src/assets/aperololo-pasdanslerythme.jpg',
    icon: '/src/assets/icon/mortar-thks-icongeek26.png',
    titre: 'Pas dans le rythme',
    joueurs: '4-15',
    modeDeJeu: 'En équipe',
    modeDeJeuPromo: 'Playlist premium',
    duree: '25 min',
    shortDescription: "C'est comme un blindtest mais sans musique. Idéal pour ne pas casser les oreilles de tes voisins !",
    promoDescription: "Accède à des playlists et des idées premium !",
    rules: "Le maître du jeu choisit une musique, un joueur lit les paroles sans chanter, les autres doivent deviner.",
    conseil: "Prépare une playlist variée pour plus de fun.",
    exemple: "Devine une chanson Disney, un tube des années 90.",
    idees: "Playlist Disney, années 90, tubes du moment.",
    materiel: "Aucun",
    tours: "1 tour par chanson",
    is_premium: true,
    story: "Apérololo t'a préparé une petite playlist si tu es en manque d'idées."
  },
  {
    id: 'les-encheres',
    coverImage: '/src/assets/aperololo-lesencheres.jpg',
    icon: '/src/assets/icon/hat-thks-icongeek26.png',
    titre: 'Les enchères',
    joueurs: '3-10',
    modeDeJeu: 'En équipe',
    modeDeJeuPromo: 'Thèmes premium',
    duree: '20 min',
    shortDescription: "Le but est de donner un maximum de réponses sur un thème donné.",
    promoDescription: "Débloque des thèmes et des variantes premium !",
    rules: "Trouver le plus de réponses possibles à un thème en 1 minute. Champions, enchères, points à gagner.",
    conseil: "Choisissez bien votre champion !",
    exemple: "Mot interdit : 'oui' ou 'non'. Mot interdit : un prénom commun.",
    idees: "Thèmes : écrivains, marques, objets du quotidien.",
    materiel: "Aucun",
    tours: "1 tour par thème",
    is_premium: true,
    story: "Choisissez bien votre champion !"
  },
  {
    id: 'mot-commun',
    coverImage: '/src/assets/motcommun.png',
    icon: '/src/assets/icon/home-thks-icongeek26.png',
    titre: 'Le mot commun',
    joueurs: '3-10',
    modeDeJeu: 'Seul(e) contre tous',
    modeDeJeuPromo: 'Mots premium',
    duree: '20 min',
    shortDescription: "Plus rapide et plus fun qu'une énigme !",
    promoDescription: "Débloque des mots et des objets premium !",
    rules: "Trouver le mot en commun entre trois mots donnés. Ramener un objet lié pour valider la réponse.",
    conseil: "Soyez créatifs pour trouver des objets originaux.",
    exemple: "Soleil-Coeur-Lion : Roi. Secret-Muet-Outre : Tombe.",
    idees: "Mots variés, objets insolites.",
    materiel: "Aucun",
    tours: "1 tour par mot",
    is_premium: true,
    story: "Vos amis n'auront jamais été aussi créatifs que lorsqu'il faut gagner !"
  },
  {
    id: 'dessine-a-la-chaine',
    coverImage: '/src/assets/dessine a la chaine.png',
    icon: '/src/assets/icon/quill-thks-icongeek26.png',
    titre: "Dessine à la chaîne",
    joueurs: '4-10',
    modeDeJeu: 'En équipe',
    modeDeJeuPromo: 'Options premium',
    duree: '30 min',
    shortDescription: "Découvre la fusion d'un Pictionary et d'un téléphone arabe !",
    promoDescription: "Débloque des options de jeu et des thèmes premium !",
    rules: "Chaque équipe se met en file indienne, le dernier joueur dessine sur le dos du suivant, le dernier doit deviner.",
    conseil: "Ne vous moquez plus des dessins de votre petit cousin !",
    exemple: "Thème : Tes vacances de rêve. Question : Si tu pouvais dîner avec une célébrité, qui choisirais-tu ?",
    idees: "Thèmes variés, options de jeu.",
    materiel: "Feuilles, stylos, ruban adhésif",
    tours: "1 tour par équipe",
    is_premium: true,
    story: "Après ça, vous ne pourrez plus vous moquer des dessins de votre petit cousin !"
  }
];
