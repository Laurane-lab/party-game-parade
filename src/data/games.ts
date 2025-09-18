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
  rules: string[];
  conseil?: string[];
  examples?: string[];
  idees?: string | string[];
  materiel?: string | string[];
  tours?: { title: string; color: string; description: string[] }[];
  is_premium: boolean;
  story: string;
  nuages?: { theme: string; url: string }[];
  contraintes?: string[];
  showTours?: boolean;
  hideExamples?: boolean;
  optionsDeJeu?: string[];
};

export const games: Game[] = [
  {
    id: 'le-mur-du-son',
    coverImage: '/src/assets/aperololo-murduson.png',
    icon: '/src/assets/icon/smoke-thks-icongeek26.png',
    titre: 'Le mur du son',
    joueurs: '3-10',
    modeDeJeu: 'seul(e) contre tous',
    duree: '15-30 minutes',
    shortDescription: "Trouve une chanson avec le mot affiché. Rapidité et créativité sont de mise !",
    rules: [
        "Le but du jeu est de trouver une chanson qui contient l’un des mots affichés sur l’écran.",
        "Le maître du jeu a le dernier mot sur quelle personne peut répondre en premier.",
        "Les mots ne peuvent pas être répétés.",
        "Le jeu s'arrête quand tous les mots ont été utilisés ou que les joueurs ne trouvent plus."
    ],
    conseil: [
        "Détermine une règle pour savoir à qui donner la priorité de réponse, par exemple se lever, s'asseoir, attraper une balle lancée par le maître du jeu, etc.",
    ],
    nuages: [
        { theme: "Français", url: "https://www.canva.com/design/DAGun3oVMXc/J0Fu8KnYwCcKvaboj25QhA/edit?utm_content=DAGun3oVMXc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" },
        { theme: "Anglais", url: "https://www.canva.com/design/DAGuoMzArNc/pT44bheGxbCkpkfOvviBqw/edit?utm_content=DAGuoMzArNc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" },
        { theme: "Spécial Disney", url: "https://www.canva.com/design/DAGuoKfV-NE/TqP--GPRsJlDObIqnJXK4g/edit?utm_content=DAGuoKfV-NE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" },
        { theme: "Spécial Rap", url: "https://www.canva.com/design/DAGuoAyKL6s/Mp3dq5gokfs24vS-L4h0Ow/edit?utm_content=DAGuoAyKL6s&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" }
    ],
    examples: [],
    story: "N'hésite pas à faire chanter ton pote pour vérifier qu’il n’a pas inventé une chanson !\nSi la chanson n'existe pas mais que tu kiffes les paroles, tu peux donner un point, après tout c'est toi le maître du jeu !",
    is_premium: false,
    materiel: "aucun",
    tours: [],
  },
  {
    id: 'jusqua-10',
    coverImage: '/src/assets/jusqua10 v3.png',
    icon: '/src/assets/icon/scroll-thks-icongeek26.png',
    titre: "Jusqu'à 10",
    joueurs: '3-5',
    modeDeJeu: 'seul(e) contre tous',
    duree: '20 minutes',
    shortDescription: "Remplace les chiffres par des contraintes amusantes à chaque tour.",
    rules: [
        "Le premier joueur dit 1, le suivant 2, etc jusqu’à 10.",
        "Celui qui dit 10, choisit ensuite une contrainte pour remplacer l’un des chiffres.",
        "Le joueur ayant choisi la contrainte commence par dire 1, le suivant 2, etc jusqu’à 10 en remplaçant le dit chiffre par la contrainte choisie.",
        "S'il y a une erreur, on recommence !",
        "Le jeu s'arrête quand tous les chiffres ont été remplacés.",
    ],
    contraintes: [
        "Dire le chiffre en chantant",
        "Dire le chiffre dans une autre langue",
        "Faire une grimace en disant le chiffre",
        "Remplacer le chiffre par un autre mot",
    ],
    story: "À toi de décider ce qui se passe pour celui qui se trompe. Il peut avoir un gage ou finir son verre d’eau cul sec par exemple ! ",
    is_premium: false,
    conseil: [],
    examples: ["Un, deux, Oie, Quatre, Cinq, Six, Siete, Huiiiiiit, Neuf, Dix."],
    materiel: "aucun",
    tours: [],
  },
  {
    id: 'suite-de-stars',
    coverImage: '/src/assets/suite de star v3.png',
    icon: '/src/assets/icon/wand-thks-icongeek26.png',
    titre: 'Suite de stars',
    joueurs: '3-12',
    modeDeJeu: 'seul(e) contre tous',
    duree: '15-30 minutes',
    shortDescription: "Enchaînes les noms de célébrités selon des règles originales.",
    rules: [
      "Option 1 : Chacun doit citer une célébrité dont le prénom commence par la dernière lettre du nom de la célébrité précédente.",
      "Option 2 : Chacun doit citer une célébrité ayant un mot commun ou un adjectif dans son prénom/nom",
      "Règles communes : Pas de répétition, pas d'hésitation trop longue.",
    ],
    examples: [
      "Option 1 : Pablo Picasso - Orelsan - Natoo - Oliver Minne - Einstein Albert...",
      "Option 2 : Angelina Jolie - Loïs Boisson - Vin Diesel...",
    ],
    story: "Ce jeu nous a peut-être été inspiré du légendaire Johnny Depp de Orel & Gringe.",
    is_premium: false,
    conseil: [],
    materiel: "aucun",
    tours: [],
  },
  {
    id: 'dos-a-dos',
    coverImage: '/src/assets/aperololo-dosados.jpg',
    icon: '/src/assets/icon/cloak-thks-icongeek26.png',
    titre: 'Dos à dos',
    joueurs: '4-10',
    modeDeJeu: 'en binôme',
    duree: '20 minutes',
    shortDescription: "Un jeu rapide et hilarant qui met votre complicité à l’épreuve. Connais-tu vraiment ton binôme ou les invités seront-ils plus forts que vous ? Oserez-vous vous mettre dos à dos pendant que le reste de l'assemblée attend de vous piéger ? Apérololo te donne 10 idées de questions pour réaliser ce jeu.",
    rules: [
        "Deux personnes se mettent dos à dos.",
        "Les autres joueurs posent une question et comptent jusqu'à trois.",
        "À 3, les deux joueurs doivent pointer : eux-mêmes s’ils pensent être la réponse, vers l’extérieur s’ils pensent que c\’est l\’autre.",
        "Si les joueurs sont d\’accords (Manu s\’est montré du doigt et Isabelle a pointé vers l\’extérieur) ils gagnent. Sinon c\’est l\’assemblée !",
    ],
    examples: [
        "Qui passe le plus de temps sur son téléphone ?",
        "Qui est le plus bordélique ?",
        "Qui raconte les pires blagues ?",
        "Qui est le plus jaloux ?",
        "Qui fait le plus de bruit en mangeant ?",
        "Qui finirait en prison en premier ?",
        "Qui risque de se perdre même avec un GPS ?",
        "Qui sauterait sur l’occasion de jouer dans une télé-réalité ?",
        "Qui fait les meilleures imitations ? (Démo demandée !)",
        "Qui finirait par rejoindre les méchants dans un film juste par flemme de fuir ?",
    ],
    story: "Nous déclinons toute responsabilité en cas d’embrouilles entre vous...",
    is_premium: true,
    conseil: [],
    materiel: "aucun",
    tours: [],
  },
  {
    id: 'mission-secrete',
    coverImage: '/src/assets/aperololo-missionsecrete.jpg',
    icon: '/src/assets/icon/cauldron-thks-icongeek26.png',
    titre: 'Mission secrète',
    joueurs: '6-20',
    modeDeJeu: 'en équipe',
    duree: '15 minutes',
    shortDescription: "Un jeu parfait pour pimenter ton week-end : accomplis tes missions en douce et tente de découvrir celles des autres. Bluff, stratégie et éclats de rire garantis. Apérololo te fournit un tableau de bord pour attribuer les missions et compter les scores. Nous te proposons également 40 idées de missions.",
    rules: [
        "Chaque joueur reçoit une ou plusieurs missions secrètes à accomplir pendant le week-end.",
        "Le but est de réaliser tes missions sans te faire repérer et de découvrir les missions des autres.",
        "Une fois la mission accomplie, le joueur va voir le Maître du Jeu pour la faire valider.",
        "Tu penses qu’un joueur est en train de réaliser sa mission ? Tu peux tenter de lui faire perdre ses points : demande au maître du jeu un entretien privé avec ledit joueur. Le Maître du Jeu déclenche l’alarme (cloche, téléphone... à toi de choisir) pour prévenir les autres joueurs.",
        "L'accusateur explique ce qu'il pense être l’intitulé de la mission et le joueur accusé a 3 minutes pour se défendre.",
        "Puis, l'accusé s'en va et l’accusateur décide s’il confirme son accusation ou pas : si l’accusation est confirmée et correcte, le joueur accusé perd les points de sa mission et l’accusateur gagne 5 points. Si l’accusation est confirmée et incorrecte : l’accusateur perd 5 points.",
        "Le maître du jeu révèle à l'assemblée les accusations et le dénouement.",
        "À la fin du week-end, le joueur avec le plus de points l’emporte !",
    ],
    examples: [],
    story: "Tu ne t'imagines pas à quel point tes amis sont prêts à faire n'importe quoi pour t'induire en erreur. J'en ai vu des choses étranges en faisant ce jeu !",
    is_premium: true,
    conseil: [],
    materiel: "Accède au tableau de bord pour gérer les missions et les scores en <a href='https://docs.google.com/spreadsheets/d/1N_WMsFVpcNyd0H1gWy5fbPeLK94FwINfwFNuOxQgwhg/edit?usp=sharing' target='_blank' rel='noopener noreferrer' style='font-weight:bold;color:#a259ff;text-decoration:underline;'>cliquant ici</a>.",
    tours: [],
  },
  {
    id: 'sans-rire',
    coverImage: '/src/assets/aperololo-faireriresansrire.png',
    icon: '/src/assets/icon/crystals-thks-icongeek26.png',
    titre: 'Sans rire',
    joueurs: '4-8',
    modeDeJeu: 'seul(e) contre tous',
    duree: '30 minutes',
    shortDescription: "Ton but est de déclencher les fous rires des autres joueurs sans jamais rire toi-même. Celui qui garde son sérieux gagne. Apérololo te propose trois tours, trois règles différentes… et trois fois plus de chances de rire !",
    showTours: true,
    rules: [
        "Le but est d’essayer de faire rire les autres sans rire.", 
        "Dès que quelqu’un rit, il prend +1 point.",
        "À la fin des 3 tours (voir plus bas), celui qui a le plus de points a perdu.",
        "Pour jouer tous les participants doivent être en cercle.",
        "Le joueur avec les plus petits pieds commence le tour 1, puis le joueur à sa gauche le tour 2, etc.",
    ],
    examples: [
        "Quel est le plus grand océan du monde ?",
        "Qui a chanté 'Shape of You' ?",
    ],
    story: "Vous pouvez ajouter autant de tours que vous voulez. Un concours de blagues de darons par exemple.",
    is_premium: true,
    conseil: [],
    materiel: "aucun",
    tours: [
      {
        title: "Tour 1",
        color: "#a259ff",
        description: [
          "<div>1. Chaque joueur va chercher 1 ou 2 objets et les met sur la table.</div>",
          "<div>2. À tour de rôle un joueur choisit l'un des objets et donne :</div>",
          `<ul class="ml-4 list-disc"><li>Le nom de l’objet</li><li>Son origine/époque</li><li>À quoi il sert</li></ul>`,
          "<em>Exemple : Ceci n’est pas une tasse, c’est un téléphone de la Rome antique, qui servait à appeler Cléopâtre uniquement.</em>"
        ]
      },
      {
        title: "Tour 2",
        color: "#2ec4b6",
        description: [
          "<div>1. En faisant un tour de table, chaque joueur dit un mot qui n’existe pas.</div>",
          "<div>2. À tout moment, l’un des participants peut demander la définition du mot et le joueur doit la donner.</div>",
          "<div>3. Dire un mot qui existe donne +1.</div>",
          "<em>Exemple : \"Loubrirute\" est une insulte utilisée par les adolescents Lituaniens.</em>"
        ]
      },
      {
        title: "Tour 3",
        color: "#ffbe0b",
        description: [
          "<div>1. Chaque joueur doit imiter un animal dans une situation et les autres doivent deviner l’animal et si possible la situation.</div>",
          "<em>Exemple : Miaou-Miaouuu-Miaou-Miaou = un chat qui discute avec un autre chat. </em>"
        ]
      }
    ],
  },
  {
    id: 'pas-dans-le-rythme',
    coverImage: '/src/assets/aperololo-pasdanslerythme.jpg',
    icon: '/src/assets/icon/mortar-thks-icongeek26.png',
    titre: 'Pas dans le rythme',
    joueurs: '4-15',
    modeDeJeu: 'en équipe',
    duree: '25 minutes',
    shortDescription: "Un blind test… sans musique. Oui, tu as bien lu ! Idéal pour ne pas casser les oreilles de tes voisins. Dans ce jeu, les hits se découvrent autrement et les paroles prennent tout leur sens.",
    hideExamples: true,
    rules: [
        "Le maître du jeu choisit une musique et montre les paroles à un joueur.",
        "Ce joueur doit <span style='font-weight:bold;color:#a259ff'>lire</span> les paroles à haute voix <span style='font-weight:bold;color:#a259ff'>sans chanter</span>, comme s'il lisait un discours.",
        "Les autres joueurs doivent deviner de quelle chanson il s'agit en moins de 30 secondes.",
        "S'ils trouvent, l'équipe gagne un point.",
        "À la fin du temps imparti, l'équipe adverse peut faire une proposition pour remporter le point.",
    ],
    examples: [
        "Devine une chanson Disney.",
        "Devine un tube des années 90.",
    ],
    story: "On espère que la playlist qu'on vous a préparé va vous plaire ! N'hésitez pas à nous envoyer vos suggestions de chansons.",
    is_premium: true,
    conseil: [],
    materiel: "aucun",
    tours: [],
  },
  {
    id: 'les-encheres',
    coverImage: '/src/assets/aperololo-lesencheres.jpg',
    icon: '/src/assets/icon/hat-thks-icongeek26.png',
    titre: 'Les enchères',
    joueurs: '3-10',
    modeDeJeu: 'en équipe',
    duree: '20 minutes',
    shortDescription: "Défie tes amis dans une guerre d'enchères. Tu n'auras qu'une minute pour honorer ton pari et faire marquer des points à ton équipe.",
    rules: [
        "Le maître du jeu propose un thème et le but est de trouver le plus de réponses possibles au thème en <span style='font-weight:bold;color:#a259ff'>une minute</span>.",
        "Les équipes désignent un champion (qui change à chaque manche.)",
        "Les champions font un Shifumi ou un défi : le gagnant décide s'il prend ou donne la main.",
        "Ils ont 2 minutes pour faire monter les enchères.",
        "Quand les 2 minutes sont écoulées ou qu'un champion déclare ne pas sur-enchérir alors le champion qui a gagné l'enchère débute son énumération.",
        "Attention, le champion ne peut pas être aidé par son équipe.",
        "Si le champion réussit son enchère l'équipe gagne 10 points, sinon les points vont à l'autre équipe.",
    ],
    idees: [
        "Ecrivains Français",
        "Dire <em>Tchin-Tchin</em> dans d'autres langues",
        "Marques de bières",
        "Instruments de musique",
        "Objets dans un sac à main"
    ],
    examples: [
        "Mot interdit : 'oui' ou 'non'.",
        "Mot interdit : un prénom commun.",
    ],
    story: "Choisis bien ton champion !",
    is_premium: true,
    conseil: [],
    materiel: "aucun",
    tours: [],
  },
  {
    id: 'dessine-a-la-chaine',
    coverImage: '/src/assets/dessine a la chaine.png',
    icon: '/src/assets/icon/quill-thks-icongeek26.png',
    titre: "Dessine à la chaîne",
    joueurs: '4-10',
    modeDeJeu: 'en équipe',
    duree: '30 minutes',
    shortDescription: "Découvre la fusion d'un Pictionary et d'un téléphone arabe !",
    rules: [
        "L'équipe se met en file indienne, tous les joueurs regardent dans la même direction.",
        "Le maître du jeu montre secrètement l'objet à dessiner au dernier joueur de chaque file.",
        "Ce joueur dessine l'objet sur une feuille collée sur le dos de la personne devant lui.",
        "Le joueur suivant, en se basant sur ce qu'il a senti, doit dessiner à son tour sur le dos de la personne devant lui, et ainsi de suite.",
        "Le dernier joueur de la file doit dire à haute voix ce qu'il pense qu'on lui a dessiné dans le dos."
    ],
    materiel: [
        "Feuilles A4",
        "Gros feutres ou marqueurs",
        "Ruban adhésif"
    ],
    optionsDeJeu: [
        "Chacun son tour : les équipes passent une à une.",
        "Course contre la montre : les équipes dessinent en même temps. Le gagnant reste celui qui devine correctement et non le plus rapide !"
    ],
    examples: [
        "Thème : Tes vacances de rêve.",
        "Question : Si tu pouvais dîner avec une célébrité, qui choisirais-tu ?",
    ],
    story: "Après ça, je crois que vous ne pourrez plus vous moquez des dessins de votre petit cousin !",
    is_premium: true,
    conseil: [],
    tours: [],
  },
  {
    id: 'mot-commun',
    coverImage: '/src/assets/motcommun.png',
    icon: '/src/assets/icon/home-thks-icongeek26.png',
    titre: 'Le mot commun',
    joueurs: '3-10',
    modeDeJeu: 'seul(e) contre tous',
    duree: '20 minutes',
    shortDescription: "On joue avec des mots pour mettre à l'épreuve ta vivacité d'esprit, ta capacité d'association et ton cardio. Trouve le lien entre trois mots et lance-toi dans une course effrénée pour réclamer ta victoire !",
    rules: [
        "Le maître du jeu énonce trois mots à voix haute.",
        "Les joueurs doivent trouver le mot en commun entre ces mots.",
        "Quand ils pensent avoir trouvé, ils doivent aller chercher un objet qui correspond ou est en lien avec le mot qu'ils ont trouvé.",
        "Les joueurs n'ont le droit de se lever uniquement lorsque le maître du jeu a fini de dire les trois mots.",
        "Le premier revenu aura la priorité pour donner sa réponse, si elle est bonne il gagne sinon c'est au second de tenter sa chance etc.",
    ],  
    examples: [
        "Soleil-Coeur-Lion : Roi",
        "Secret-Muet-Outre : Tombe",
        "Ski-Branches-Soleil : Lunettes",
        "Moral-Boule-Absolu : Zéro",
        "Lampe-Argent-Livre : Poche",
        "Billet-Courant-journal : Coupure",
        "Pomme-Rose-Sang : Rouge", 
    ],
    story: "Si le maître du jeu ne voit pas le lien entre l'objet et la réponse du joueur, il peut demander des explications. Vos amis n'auront jamais été aussi créatifs que lorsqu'il faut gagner !",
    is_premium: true,
    conseil: [],
    materiel: "aucun",
    tours: [],
  }
];
