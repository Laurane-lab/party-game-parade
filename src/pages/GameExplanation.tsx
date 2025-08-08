import faireRireSansRireVisuel from "@/assets/aperololo-faireriresansrire.png";
import aperololoMissionSecrete from "@/assets/aperololo-missionsecrete.jpg";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import PaywallDialog from "@/components/PaywallDialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import catMascot from "@/assets/New mascot.png";
import aperololoMurduson from "@/assets/aperololo-murduson.png";
import visuel10 from "@/assets/10-visuel.png";
import suiteDeStarsVisuel from "@/assets/aperololo-suitedestarsV2.jpg";
import aperololoDosados from "@/assets/aperololo-dosados.jpg";
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

const games = [
		{
			id: 1,
			name: "Le mur du son",
			shortDescription: "Trouve une chanson avec le mot affiché. Rapidité et créativité sont de mise !",
			players: "3-10",
			duration: "15-30 minutes",
			rules: [
				"Le but du jeu est de trouver une chanson qui contient l\’un des mots affichés sur l\’écran.",
				"Le maître du jeu à le dernier mot sur quelle personne / équipe peut répondre en premier.",
				"Les mots ne peuvent pas être répétés.",
				"Le jeu s'arrête quand tous les mots ont été utilisés ou que les équipes ne trouvent plus."
			],
			conseil: [
				"Déterminez une règle pour savoir à qui donner la priorité de réponse, par exemple se lever, s'assoir, attraper une balle lancée par le maître du jeu, etc.",
			],
			nuages: [
				{ theme: "Français", url: "https://www.canva.com/design/DAGun3oVMXc/J0Fu8KnYwCcKvaboj25QhA/edit?utm_content=DAGun3oVMXc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" },
				{ theme: "Anglais", url: "https://www.canva.com/design/DAGuoMzArNc/pT44bheGxbCkpkfOvviBqw/edit?utm_content=DAGuoMzArNc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" },
				{ theme: "Spécial Disney", url: "https://www.canva.com/design/DAGuoKfV-NE/TqP--GPRsJlDObIqnJXK4g/edit?utm_content=DAGuoKfV-NE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" },
				{ theme: "Spécial Rap", url: "https://www.canva.com/design/DAGuoAyKL6s/Mp3dq5gokfs24vS-L4h0Ow/edit?utm_content=DAGuoAyKL6s&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" }
			],
			examples: [],
			images: [aperololoMurduson, catMascot],
			story: `"N'hésite pas à faire chanter ton pote pour vérifier qu\’il n\’a pas inventé une chanson !
			Si la chanson n'existe pas mais que tu kiffes les paroles, tu peux donner un point, après tout c'est toi le maître du jeu !"`,
			is_premium: false,
		},
		{
			id: 2,
			name: "Jusqu'à 10",
			shortDescription: "Remplace les chiffres par des contraintes amusantes à chaque tour.",
			players: "3-5",
			duration: "20 minutes",
			rules: [
				"Le premier joueur dit 1, le suivant 2, etc jusqu\’à 10.",
				"Celui qui dit 10, choisit ensuite une contrainte pour remplacer l\’un des chiffres.",
				"Le joueur ayant choisit la contrainte commence par dire 1, le suivant 2, etc jusqu\’à 10 en remplaçant le dit chiffre par la contrainte choisie.",
				"Le jeu s'arrête quand tous les chiffres ont été remplacés.",
			],
			contraintes: [
				"Dire le chiffre en chantant",
				"Dire le chiffre dans une autre langue",
				"Faire une grimace en disant le chiffre",
				"Remplacer le chiffre par un autre mot",
			],
			images: [visuel10, catMascot],
			story: `"À vous de décidez ce qu\’il se passe pour celui qui se trompe. Il peut avoir un gage ou finir son verre d\’eau cul sec par exemple !" `,
			is_premium: false,
		},
	// 8 nouveaux jeux
   {
	  id: 3,
	  name: "Suite de stars",
	  shortDescription: "Enchaîne les noms de célébrités selon des règles originales.",
	  players: "3-12",
	  duration: "15-30 minutes",
	  rules: [
		  "Option 1 : Chacun doit citer une célébrité dont le prénom commence par la dernière lettre du nom de la célébrité précédente.",
		  "Option 2 : Chacun doit citer une célébrité ayant un mot commun ou un adjectif dans son prénom/nom",
		  "Règles communes : Pas de répétition, pas d'hésitation trop longue.",
	  ],
	  examples: [
		  "Option 1 : Pablo Picasso - Orelsan - Natoo - Oliver Minne - Einstein Albert...",
		  "Option 2 : Angelina Jolie - Loïs Boisson - Vin Diesel...",
	  ],
	  images: [suiteDeStarsVisuel, suiteDeStarsVisuel],
	  story: `Si la phonétique est la même, pour nous ça compte ! ex : Ramzy = i`,
	  is_premium: false,
   },
		{
			id: 4,
			name: "Dos à dos",
			shortDescription: "Deux joueurs répondent à des questions en pointant du doigt, attention aux embrouilles !",
			players: "4-10",
			duration: "20 minutes",
			rules: [
				"Deux personnes se mettent dos à dos.",
				"Les autres joueurs posent une question et comptent jusqu'à trois.",
				"À 3, les deux joueurs doivent pointer : eux-mêmes s\’ils pensent être la réponse, vers l\’extérieur s\’ils pensent que c\’est l\’autre.",
				"Si les joueurs sont d\’accords (Manu s\’est montré du doigt et Isabelle a pointé vers l\’extérieur) ils gagnent. Sinon c\’est l\’assemblée !",
			],
			examples: [
				"Qui passe le plus de temps sur son téléphone ?",
				"Qui est le plus bordélique ?",
				"Qui raconte les pires blagues ?",
				"Qui fait le plus de bruit en mangeant ?",
				"Qui finirait en prison en premier ?",
				"Qui risque de se perdre même avec un GPS ?",
				"Qui fait les meilleures imitations ? (Démo demandée !)",
				"Qui finirait par rejoindre les méchants dans un film juste par flemme de fuir ?",
			],
			images: [aperololoDosados, catMascot],
			story: `Nous déclinons toutes responsabilités en cas d\’embrouilles entre vous...`,
			is_premium: true,
		},
		{
			id: 5,
			name: "Mission secrète",
			shortDescription: "Accomplis des missions secrètes sans te faire repérer, et démasque les autres !",
			players: "6-20",
			duration: "15 minutes",
			rules: [
				"Chaque joueur reçoit une ou plusieurs missions secrètes à accomplir pendant le week-end.",
				"Le but est de réaliser ses missions sans se faire repérer et de découvrir les missions des autres.",
				"Une fois la mission accomplie, le joueur va voir le Maître du Jeu pour la faire valider.",
				"Tu penses qu’un joueur est en train de réaliser sa mission, tu peux tenter de lui faire perdre ses points : Demande au maître du jeu un entretien privé avec lui. Le Maître du Jeu déclenche l’alarme (cloche, téléphone... à vous de choisir) pour prévenir les autres joueurs.",
				"Vous expliquez ce que vous pensez être l’intitulé de la mission et le joueur accusé a 3 minutes pour se défendre.",
				"Puis, l’accusateur décide s’il confirme son accusation ou pas : si l’accusation est correcte, le joueur accusé perd les points de sa mission et l’accusateur gagne 5 points. Si l’accusation est incorrecte : l’accusateur perd 5 points.",
				"Le maître du jeu révèle à l'assemblée les accusations et le dénouement.",
				"À la fin du week-end, le joueur avec le plus de points l’emporte !",
			],
			examples: [],
			images: [aperololoMissionSecrete, catMascot],
			story: `Pour faciliter le compte des points et l'attribution des missions, Apérololo t'a concocté un petit Excel. <a href="https://docs.google.com/spreadsheets/d/1N_WMsFVpcNyd0H1gWy5fbPeLK94FwINfwFNuOxQgwhg/edit?usp=sharing" target="_blank" rel="noopener noreferrer" style="color:#a259ff;font-weight:bold;">Clique ici</a> pour y accéder !`,
			is_premium: true,
		},
		{
			id: 6,
			name: "Faire rire, sans rire",
			shortDescription: "Fais rire les autres sans craquer toi-même. Celui qui rit perd des points !",
			players: "4-8",
			duration: "30 minutes",
			rules: [
				"Le but est d’essayer de faire rire les autres sans rire.", 
				"Dès que quelqu’un rit, il prend 1 point.",
				"A la fin des 3 tours (voir plus bas), celui qui a le plus de points a perdu.",
				"Pour jouer tous les participants doivent être en cercle.",
				"Le joueur avec les plus petits pieds commence le tour 1, puis le joueur à sa gauche le tour 2, etc.",
			],
			examples: [
				"Quel est le plus grand océan du monde ?",
				"Qui a chanté 'Shape of You' ?",
			],
			images: [faireRireSansRireVisuel, catMascot],
			story: `Un jeu pour les cerveaux et les curieux !`,
			is_premium: true,
		},
		{
			id: 7,
			name: "Blind Test Remix",
			shortDescription: "Devine les extraits musicaux, bonus si tu chantes le refrain !",
			players: "4-15",
			duration: "25 minutes",
			rules: [
				"Le maître du jeu lance des extraits musicaux, les joueurs doivent deviner le titre ou l'artiste.",
				"Bonus si tu chantes le refrain !",
			],
			examples: [
				"Devine une chanson Disney.",
				"Devine un tube des années 90.",
			],
			images: [catMascot, catMascot],
			story: `Ambiance musicale et souvenirs garantis !`,
			is_premium: true,
		},
		{
			id: 8,
			name: "Le Mot Interdit",
			shortDescription: "Un mot est interdit à chaque tour, attention aux gages !",
			players: "3-10",
			duration: "20 minutes",
			rules: [
				"Un mot est interdit pour la manche, chaque joueur qui le prononce reçoit un gage.",
				"Le mot change à chaque tour.",
			],
			examples: [
				"Mot interdit : 'oui' ou 'non'.",
				"Mot interdit : un prénom commun.",
			],
			images: [catMascot, catMascot],
			story: `Attention aux pièges, les gages sont parfois surprenants !`,
			is_premium: true,
		},
		{
			id: 9,
			name: "Speed Dating Amical",
			shortDescription: "Discute avec tous les joueurs en changeant de partenaire à chaque tour.",
			players: "6-20",
			duration: "30 minutes",
			rules: [
				"Les joueurs se mettent par deux et ont 2 minutes pour discuter avant de changer de partenaire.",
				"Le maître du jeu propose des thèmes ou des questions pour lancer la discussion.",
			],
			examples: [
				"Thème : Tes vacances de rêve.",
				"Question : Si tu pouvais dîner avec une célébrité, qui choisirais-tu ?",
			],
			images: [catMascot, catMascot],
			story: `Idéal pour briser la glace et créer des liens !`,
			is_premium: true,
		},
		{
			id: 10,
			name: "Challenge TikTok",
			shortDescription: "Réalise des challenges TikTok et vote pour le plus drôle ou le plus réussi.",
			players: "3-12",
			duration: "20 minutes",
			rules: [
				"Chaque joueur doit réaliser un challenge TikTok tiré au sort.",
				"Les autres votent pour le plus drôle ou le plus réussi.",
			],
			examples: [
				"Danse sur un son viral.",
				"Reproduis un sketch célèbre.",
			],
			images: [catMascot, catMascot],
			story: `Parfait pour les soirées connectées et créatives !`,
			is_premium: true,
		},
	// ...add 8 more games...
];


const GameExplanation = () => {
	const gameIcons = [
		cauldronIcon,
		cloakIcon,
		crystalsIcon,
		hatIcon,
		homeIcon,
		mortarIcon,
		quillIcon,
		scrollIcon,
		smokeIcon,
		wandIcon,
	];

	const [isAuthenticated, setIsAuthenticated] = useState(false); // à remplacer par la vraie logique de connexion
	const [hasPaid, setHasPaid] = useState(false); // à remplacer par la vraie logique de paiement
	const [selected, setSelected] = useState(0);
	const [paywallOpen, setPaywallOpen] = useState(false);
	const [paywallGame, setPaywallGame] = useState(null);
	const game = games[selected];

	const handleGameClick = (i) => {
			const game = games[i];
			setSelected(i);
			// Si le jeu est premium et que l'utilisateur n'a pas payé, afficher la popup
			if (game.is_premium && (!isAuthenticated || !hasPaid)) {
				setPaywallGame(game);
				setPaywallOpen(true);
			} else {
				setPaywallOpen(false);
			}
	};

	return (
		<div className="min-h-screen bg-background flex flex-row py-10 px-0">
			{/* Liste des jeux */}
			<aside className="w-80 bg-muted/50 px-8 py-10 flex flex-col gap-4 border-r">
				<h2 className="text-xl font-bold mb-6">Jeux</h2>
				{games.map((g, i) => (
					<Button
						key={g.name}
						variant="ghost"
						className={`flex items-center w-full text-lg py-6 px-4 rounded-lg mb-2 border-2 shadow-sm transition
							${selected === i
								? "bg-party-purple border-party-purple"
								: "bg-white border-party-purple/40 hover:border-party-purple hover:shadow-md"}
						`}
						onClick={() => handleGameClick(i)}
					>
						{/* Game icon image */}
						<span className="flex-shrink-0 w-8 h-8 flex items-center justify-center mr-2">
							<img src={gameIcons[i]} alt={`Icone jeu ${g.name}`} className="w-8 h-8 object-contain" />
						</span>
						<span
							className={`w-full text-left font-semibold block overflow-hidden text-ellipsis whitespace-nowrap
								${selected === i ? "text-party-yellow" : "text-party-purple"}
							`}
							title={g.name}
						>
							{g.name}
						</span>
					</Button>
				))}
			</aside>

			{/* Droite : Détails du jeu */}
			<main className="flex-1 px-12 py-10">
				<div className={paywallOpen ? "pointer-events-none blur-md" : ""}>
					<div className="flex flex-col items-center mb-4 max-w-md mx-auto w-full">
						   {/* Ajout de l'image d'illustration du jeu au-dessus du titre */}
						   <img
							   src={game.images[0]}
							   alt={`Illustration jeu ${game.name}`}
							   className="mb-4 shadow-lg rounded-xl"
							   style={{ display: 'block', maxWidth: '100%', height: 'auto' }}
						   />
						   <h1 className="text-3xl font-bold text-primary text-center">
							   {game.name}
						   </h1>
					   </div>
					<Card className="mb-8">
						<CardHeader>
							<CardTitle className="text-2xl">Détails du jeu</CardTitle>
						</CardHeader>
						<CardContent>
							<ul className="text-lg mb-2">
								<li>
									<strong>Joueurs :</strong> {game.players}
								</li>
								<li>
									<strong>Description courte :</strong> {game.shortDescription}
								</li>
							</ul>
							<div className="mb-2">
								<strong>Règles :</strong>
								<ol className="list-decimal ml-6 mt-2 text-base">
									{game.rules.map((rule, idx) => (
										<li key={idx}>{rule}</li>
									))}
								</ol>
							</div>
							{game.name === "Le mur du son" ? (
								<>
									<div>
										<strong>Conseil :</strong>
										<ul className="list-disc ml-6 mt-2 text-base">
											{game.conseil.map((c, idx) => (
												<li key={idx}>{c}</li>
											))}
										</ul>
									</div>
									<div className="mt-4">
										<strong>Accès aux nuages de mots :</strong>
										<ul className="list-disc ml-6 mt-2 text-base">
											{game.nuages.map((nuage, idx) => (
												<li key={idx}>
													<a href={nuage.url} target="_blank" rel="noopener noreferrer" className="text-party-blue underline hover:text-party-green">
														{nuage.theme}
													</a>
												</li>
											))}
										</ul>
									</div>
								</>
							) : game.name === "Jusqu'à 10" ? (
								<div>
									<strong>Idées de contraintes :</strong>
									<ul className="list-disc ml-6 mt-2 text-base">
										{game.contraintes && game.contraintes.map((contrainte, idx) => (
											<li key={idx}>{contrainte}</li>
										))}
									</ul>
								</div>
							) : game.name === "Faire rire, sans rire" ? (
								<div>
									<strong>Tours :</strong>
									<ul className="list-disc ml-6 mt-2 text-base">
										<li>
											<span className="font-semibold" style={{color:'#a259ff'}}>Tour 1 :</span> 
											<br />1. Chaque joueur va chercher 1 ou 2 objets et les mets sur la table. 
											<br />2. À  tour de role un joueur choisit un objet et donne : 
											<br /> - Le nom de l’objet,
											<br /> - Son origne/époque,
											<br /> - À quoi il sert.
											<br /><em>Exemple : Ceci n’est pas une tasse, c’est un téléphone de la Rome antique, qui servait à appeler Cléopâtre uniquement.</em>
										</li>
										<li>
											<span className="font-semibold" style={{color:'#2ec4b6'}}>Tour 2 :</span> 
											<br />1. En faisant un tour de table, chaque joueur dit un mot qui n’existe pas.
											<br />2. À tout moment, l’un des participants peut demander la définition du mot et le joueur doit la donner.
											<br />3. Donner un mot qui existe donne +1. 
											<br /><em>Exemple : "Loubrirute" est une insulte utilisé par les adolescents Lituaniens.</em>
										</li>
										<li>
											<span className="font-semibold" style={{color:'#ffbe0b'}}>Tour 3 :</span> 
											<br />1. Chaque joueur doit imiter un animal dans une situation et les autres doivent deviner l’animal et si possible la situation.
											<br /><em>Exemple : Un chat qui discute avec un autre chat. Miaou-Miaouuu-Miaou-Miaou.</em>
										</li>
									</ul>
								</div>
							) : (
								<div></div>
							)}
							{/* Histoire d'Aperololo comme citation avec le chat à gauche, centré */}
							<div className="mt-8 bg-party-pink/10 rounded-lg p-4 flex items-center gap-4 shadow-md border border-party-pink/40">
								<img
									src={catMascot}
									alt="Mascotte Aperololo"
									className="w-16 h-16 object-contain self-center"
								/>
								<blockquote className="text-base text-party-purple italic flex-1 px-2">
									<span className="block" dangerouslySetInnerHTML={{ __html: game.story }} />
								</blockquote>
							</div>
						</CardContent>
					</Card>
					<Button
						asChild
						size="lg"
						className="text-lg px-8 py-3 bg-gradient-to-r from-party-blue to-party-green hover:from-party-green hover:to-party-blue"
					>
						<a href="/games">Découvrir d'autres jeux</a>
					</Button>
				</div>
				{/* Histoire retirée en dehors de la Card */}
						{/* Paywall Dialog extracted to its own component */}
						<PaywallDialog 
							open={paywallOpen} 
							onOpenChange={setPaywallOpen} 
							game={paywallGame} 
							message="Ce jeu fait partie du pack premium. Payez une seule fois pour débloquer tous les jeux premium !"
						/>
				   {/* Boutons de test pour simuler la connexion et le paiement */}
        <div className="mt-8 flex gap-4">
          <Button onClick={() => setIsAuthenticated(!isAuthenticated)}>
            {isAuthenticated ? "Se déconnecter" : "Se connecter"}
          </Button>
          <Button onClick={() => setHasPaid(!hasPaid)} disabled={!isAuthenticated}>
            {hasPaid ? "Annuler le paiement" : "Payer"}
          </Button>
        </div>
			</main>
		</div>
	);
};

// Icon credit for Flaticon
// Add at the bottom of the page, after main content
const IconCredit = () => (
	<div className="w-full text-center text-xs text-muted-foreground mt-8 mb-2">
		<a href="https://www.flaticon.com/free-icons/magic" title="magic icons" target="_blank" rel="noopener noreferrer" className="underline hover:text-party-purple">
			Magic icons created by Icongeek26 - Flaticon
		</a>
	</div>
);

const GameExplanationWithCredit = () => (
	<>
		<GameExplanation />
		<IconCredit />
	</>
);

export default GameExplanationWithCredit;
