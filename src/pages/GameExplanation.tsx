import dessineALaChaine from "@/assets/dessine a la chaine.png";
import faireRireSansRireVisuel from "@/assets/aperololo-faireriresansrire.png";
import aperololoLesEncheres from "@/assets/aperololo-lesencheres.jpg";
import aperololoPasDansLeRythme from "@/assets/aperololo-pasdanslerythme.jpg";
import aperololoMissionSecrete from "@/assets/aperololo-missionsecrete.jpg";
// import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import catMascot from "@/assets/New mascot.png";
import aperololoMurduson from "@/assets/aperololo-murduson.png";
import visuel10 from "@/assets/10-visuel.png";
import suiteDeStarsVisuel from "@/assets/aperololo-suitedestarsV2.jpg";
import suiteDeStarV3 from "@/assets/suite de star v3.png";
import jusqua10V3 from "@/assets/jusqua10 v3.png";
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
					   modeDeJeu: "seul(e) contre tous",
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
			story: `N'hésite pas à faire chanter ton pote pour vérifier qu\’il n\’a pas inventé une chanson !
			Si la chanson n'existe pas mais que tu kiffes les paroles, tu peux donner un point, après tout c'est toi le maître du jeu !`,
			is_premium: false,
		},
		{
			id: 2,
			name: "Jusqu'à 10",
			shortDescription: "Remplace les chiffres par des contraintes amusantes à chaque tour.",
					   players: "3-5",
					   modeDeJeu: "seul(e) contre tous",
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
			story: `À vous de décidez ce qu\’il se passe pour celui qui se trompe. Il peut avoir un gage ou finir son verre d\’eau cul sec par exemple ! `,
			is_premium: false,
		},
	// 8 nouveaux jeux
   {
	  id: 3,
	  name: "Suite de stars",
	  shortDescription: "Enchaîne les noms de célébrités selon des règles originales.",
					   players: "3-12",
					   modeDeJeu: "seul(e) contre tous",
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
					   modeDeJeu: "en équipe",
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
					   modeDeJeu: "en équipe",
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
		       name: "Sans rire",
		       shortDescription: "Fais rire les autres sans craquer toi-même. Celui qui rit perd des points !",
		       showTours: true,
					   players: "4-8",
					   modeDeJeu: "seul(e) contre tous",
			duration: "30 minutes",
			rules: [
				"Le but est d’essayer de faire rire les autres sans rire.", 
				"Dès que quelqu’un rit, il prend +1 point.",
				"A la fin des 3 tours (voir plus bas), celui qui a le plus de points a perdu.",
				"Pour jouer tous les participants doivent être en cercle.",
				"Le joueur avec les plus petits pieds commence le tour 1, puis le joueur à sa gauche le tour 2, etc.",
			],
			examples: [
				"Quel est le plus grand océan du monde ?",
				"Qui a chanté 'Shape of You' ?",
			],
			images: [faireRireSansRireVisuel, catMascot],
			story: `Vous pouvez ajouter autant de tours que vous voulez. Le tour 4 peut être un concours de blagues de darons par exemple.`,
			is_premium: true,
		},
	       {
		       id: 7,
		       name: "Pas dans le rythme",
		       shortDescription: "C'est comme un blindtest mais version lecture. Révélez votre talent de lecteur sans casser les oreilles de vos amis !",
		       hideExamples: true,
					   players: "4-15",
					   modeDeJeu: "en équipe",
			duration: "25 minutes",
			rules: [
				   "Le maître du jeu choisit une musique et montre les paroles à un joueur.",
					   `Ce joueur doit <span style=\"font-weight:bold;color:#a259ff\">lire</span> les paroles à haute voix <span style=\"font-weight:bold;color:#a259ff\">sans chanter</span>.`,
				"Les autres joueurs doivent deviner de quelle chanson il s'agit en moins de 30 secondes.",
				"S'ils trouvent, l'équipe gagne un point.",
			],
			examples: [
				"Devine une chanson Disney.",
				"Devine un tube des années 90.",
			],
			images: [catMascot, catMascot],
			   story: `Apérololo t'a préparé une petite playlist si tu es en manques d'idées.`,
			is_premium: true,
		},
		{
			id: 8,
			name: "Les enchères",
			shortDescription: "Le but est de donner un maximum de réponses sur un thème donné.",
					   players: "3-10",
					   modeDeJeu: "En équipe",
			duration: "20 minutes",
			rules: [
				"Le maître du jeu propose un thème et le but est de trouver le plus de réponse possible au thème en 1 minute.",
				"Les équipes désignent un champion (qui change à chaque manche.)",
				"Les champions font un Shifumi ou un défi pour savoir qui commence (c'est le perdant qui débute l'enchère).",
				"Ils ont 2 minutes pour faire monter les enchères.",
				"Quand les 2 minutes sont écoulées ou qu'un champion déclare ne pas sur-enchérir alors le champion qui a gagné l'enchère débute son énumération.",
				"Attention, le champion ne peut pas être aidé par son équipe.",
				"Si le champion réussi son enchère l'équipe gagne 10 points, sinon les points vont à l'autre équipe.",
			],
			examples: [
				"Mot interdit : 'oui' ou 'non'.",
				"Mot interdit : un prénom commun.",
			],
			images: [catMascot, catMascot],
			story: `Choisissez bien votre champion !`,
			is_premium: true,
		},
		{
			id: 9,
			name: "Dessine à la chaîne",
			shortDescription: "C'est comme un téléphone arabe mais en dessin !",
					   players: "4-10",
					   modeDeJeu: "en équipe",
			duration: "30 minutes",
			rules: [
				"Chaque équipe se met en file indienne, tous les joueurs regardent dans la même direction.",
				"Le maître du jeu montre secrètement l'objet à dessiner au dernier joueur de chaque file",
				"Ce joueur dessine l'objet sur une feuille collée sur le dos de la personne devant lui.",
				"Le joueur suivant, en se basant sur les sensations de ce qu'il a senti, doit dessiner à son tour sur le dos de la personne devant lui, et ainsi de suite.",
				"Le dernier joueur de la file doit dire à haute voix ce qu'il pense qu'on lui a dessiné dans le dos."
			],
			examples: [
				"Thème : Tes vacances de rêve.",
				"Question : Si tu pouvais dîner avec une célébrité, qui choisirais-tu ?",
			],
			images: [catMascot, catMascot],
			story: `Après ça je crois que vous ne pourrez plus vous moquez des dessins de votre petit cousin !`,
			is_premium: true,
		},
		{
			id: 10,
			name: "Challenge TikTok",
			shortDescription: "Réalise des challenges TikTok et vote pour le plus drôle ou le plus réussi.",
					   players: "3-12",
					   modeDeJeu: "en équipe",
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


import { useEffect, useState } from "react";
const GameExplanation = () => {
	const [selected, setSelected] = useState(0);
	const game = games[selected];

	useEffect(() => {
		const handler = () => {
			setSelected(0);
		};
		window.addEventListener("navigateToFirstFreeGame", handler);
		return () => window.removeEventListener("navigateToFirstFreeGame", handler);
	}, []);

	const handleGameClick = (i) => {
		setSelected(i);
	};

	// Optionally, declare gameIcons if needed
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
				   <div>
					<div className="flex flex-col items-center mb-4 max-w-md mx-auto w-full">
						   {/* Ajout de l'image d'illustration du jeu au-dessus du titre */}
						   <img
							   src={game.name === "Pas dans le rythme"
								   ? aperololoPasDansLeRythme
								   : game.name === "Les enchères"
								   ? aperololoLesEncheres
								   : game.name === "Suite de stars"
								   ? suiteDeStarV3
								   : game.name === "Jusqu'à 10"
								   ? jusqua10V3
								   : game.name === "Dessine à la chaîne"
								   ? dessineALaChaine
								   : game.images[0]}
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
							<ul className="mb-2 flex flex-col gap-1 text-base font-sans">
								<li>
									<strong>Joueurs :</strong> {game.players}
								</li>
								<li>
									<strong>Mode de jeu :</strong> {game.modeDeJeu}
								</li>
								{/* Description courte supprimée de l'affichage */}
							</ul>
							<div className="mb-2 text-base font-sans">
								<strong>Règles :</strong>
								<ol className="list-decimal ml-6 mt-2">
									{game.rules.map((rule, idx) => {
										if (game.name === "Pas dans le rythme" && idx === 1) {
											return <li key={idx} dangerouslySetInnerHTML={{ __html: rule }} />;
										}
										return <li key={idx}>{rule}</li>;
									})}
								</ol>
								{/* Section Idées de chansons pour 'Pas dans le rythme' */}
								{game.name === "Pas dans le rythme" && (
									<div className="mt-6">
										<strong>Idées de chansons :</strong>
										<div className="mt-2">
											<iframe
												data-testid="embed-iframe"
												style={{ borderRadius: '12px' }}
												src="https://open.spotify.com/embed/playlist/2yHhJNvzDaVi9rhjbHfZLx?utm_source=generator"
												width="100%"
												height="80"
												frameBorder="0"
												allowFullScreen
												allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
												loading="lazy"
											></iframe>
										</div>
									</div>
								)}
								{/* Section Options de jeu pour 'Dessine à la chaîne' */}
								{game.name === "Dessine à la chaîne" && (
									<>
										<div className="mt-6 text-base font-sans">
											<strong>Matériel :</strong>
											<ul className="list-disc ml-6 mt-2">
												<li>Feuilles A4</li>
												<li>Gros feutres ou marqueurs</li>
												<li>Ruban adhésif</li>
											</ul>
										</div>
										<div className="mt-6 text-base font-sans">
											<strong>Options de jeu :</strong>
											<ul className="list-disc ml-6 mt-2">
												<li>Chacun son tour : les équipes passent une à une.</li>
												<li>Course contre la montre : les équipes dessinent en même temps. Le gagnant reste celui qui devine correctement et non le plus rapide !</li>
											</ul>
										</div>
									</>
								)}
								{/* Section Idées d'enchères pour 'Les enchères' */}
								{game.name === "Les enchères" && (
									<div className="mt-6 text-base font-sans">
										<strong>Idées d'enchères :</strong>
										<ul className="list-disc ml-6 mt-2">
											<li>Ecrivains Français</li>
											<li>Dire <em>Tchin-Tchin</em> dans d'autres langues</li>
											<li>Marques de bières</li>
											<li>Instruments de musique</li>
											<li>Objets dans un sac à main</li>
										</ul>
									</div>
								)}
							</div>
							{game.name === "Le mur du son" ? (
								<>
									<div className="text-base font-sans">
										<strong>Conseil :</strong>
										<ul className="list-disc ml-6 mt-2">
											{game.conseil.map((c, idx) => (
												<li key={idx}>{c}</li>
											))}
										</ul>
									</div>
									<div className="mt-4 text-base font-sans">
										<strong>Accès aux nuages de mots :</strong>
										<ul className="list-disc ml-6 mt-2">
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
							) : game.name === "Dos à dos" ? (
								<div className="text-base font-sans">
									<strong>Idées de questions :</strong>
									<ul className="list-disc ml-6 mt-2">
										{game.examples && game.examples.map((ex, idx) => (
											<li key={idx}>{ex}</li>
										))}
									</ul>
								</div>
							) : game.name === "Suite de stars" ? (
								!game.hideExamples && (
									<div className="text-base font-sans">
										<strong>Exemples :</strong>
										<ul className="list-disc ml-6 mt-2">
											{game.examples && game.examples.map((ex, idx) => (
												<li key={idx}>{ex}</li>
											))}
										</ul>
									</div>
								)
							) : game.name === "Jusqu'à 10" ? (
								<div className="text-base font-sans">
									<strong>Idées de contraintes :</strong>
									<ul className="list-disc ml-6 mt-2">
										{game.contraintes && game.contraintes.map((contrainte, idx) => (
											<li key={idx}>{contrainte}</li>
										))}
									</ul>
								</div>
							) : game.showTours ? (
								<div className="text-base font-sans mt-6">
									<strong>Tours :</strong>
									<ul className="list-disc ml-6 mt-2">
										<li>
											<div>
												<span className="font-semibold" style={{color:'#a259ff'}}>Tour 1 :</span>
												<div>1. Chaque joueur va chercher 1 ou 2 objets et les mets sur la table.</div>
												<div>2. À tour de rôle un joueur choisit un objet et donne :</div>
												<ul className="ml-4 list-disc">
													<li>Le nom de l’objet</li>
													<li>Son origine/époque</li>
													<li>À quoi il sert</li>
												</ul>
												<em>Exemple : Ceci n’est pas une tasse, c’est un téléphone de la Rome antique, qui servait à appeler Cléopâtre uniquement.</em>
											</div>
										</li>
										<li>
											<div>
												<span className="font-semibold" style={{color:'#2ec4b6'}}>Tour 2 :</span>
												<div>1. En faisant un tour de table, chaque joueur dit un mot qui n’existe pas.</div>
												<div>2. À tout moment, l’un des participants peut demander la définition du mot et le joueur doit la donner.</div>
												<div>3. Dire un mot qui existe donne +1.</div>
												<em>Exemple : "Loubrirute" est une insulte utilisée par les adolescents Lituaniens.</em>
											</div>
										</li>
										<li>
											<div>
												<span className="font-semibold" style={{color:'#ffbe0b'}}>Tour 3 :</span>
												<div>1. Chaque joueur doit imiter un animal dans une situation et les autres doivent deviner l’animal et si possible la situation.</div>
												<em>Exemple : Un chat qui discute avec un autre chat. Miaou-Miaouuu-Miaou-Miaou.</em>
											</div>
										</li>
									</ul>
								</div>
							) : (
								<div className="text-base font-sans"></div>
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
					{/* Bouton 'Découvrir d'autres jeux' retiré */}
				</div>
				{/* Histoire retirée en dehors de la Card */}
						   {/* PaywallDialog retiré (brouillon) */}
				   {/* Boutons de test pour simuler la connexion et le paiement */}
	{/* Boutons de test retirés */}
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
