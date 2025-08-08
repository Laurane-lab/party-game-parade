import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import catMascot from "@/assets/New mascot.png";
import aperololoMurduson from "@/assets/aperololo-murduson.png";
import visuel10 from "@/assets/10-visuel.png";
import suiteDeStarsVisuel from "@/assets/aperololo-suitedestarsV2.jpg";
import aperololoDosados from "@/assets/aperololo-dosados.jpg";

const games = [
	{
		name: "Le mur du son",
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
		images: [catMascot, catMascot],
		story: `"N'hésite pas à faire chanter ton pote pour vérifier qu\’il n\’a pas inventé une chanson !
		Si la chanson n'existe pas mais que tu kiffes les paroles, tu peux donner un point, après tout c'est toi le maître du jeu !"`,
	},
	{
		name: "Jusqu'à 10",
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
		images: [catMascot, catMascot],
		story: `"À vous de décidez ce qu\’il se passe pour celui qui se trompe. Il peut avoir un gage ou finir son verre d\’eau cul sec par exemple !" `,
	},
	// 8 nouveaux jeux
   {
	   name: "Suite de stars",
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
	   story: `Deux variantes pour tester ta culture people et ta rapidité !`,
   },
	{
		name: "Dos à dos",
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
		images: [catMascot, catMascot],
		story: `Nous déclinons toutes responsabilités en cas d\’embrouilles entre vous...`,
	},
	{
		name: "Devine le Mensonge",
		players: "3-8",
		duration: "15 minutes",
		rules: [
			"Chaque joueur raconte trois anecdotes, dont une est un mensonge.",
			"Les autres doivent deviner laquelle est fausse.",
		],
		examples: [
			"J'ai déjà rencontré une célébrité.",
			"J'ai mangé des insectes.",
			"Je parle couramment japonais.",
		],
		images: [catMascot, catMascot],
		story: `Parfait pour découvrir des secrets et des talents cachés !`,
	},
	{
		name: "Quiz Party",
		players: "3-20",
		duration: "30 minutes",
		rules: [
			"Le maître du jeu pose des questions de culture générale ou sur les invités.",
			"Chaque bonne réponse rapporte un point à l'équipe ou au joueur.",
		],
		examples: [
			"Quel est le plus grand océan du monde ?",
			"Qui a chanté 'Shape of You' ?",
		],
		images: [catMascot, catMascot],
		story: `Un jeu pour les cerveaux et les curieux !`,
	},
	{
		name: "Blind Test Remix",
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
	},
	{
		name: "Le Mot Interdit",
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
	},
	{
		name: "Speed Dating Amical",
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
	},
	{
		name: "Challenge TikTok",
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
	},
	// ...add 8 more games...
];

const GameExplanation = () => {
	const [selected, setSelected] = useState(0);
	const game = games[selected];

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
						onClick={() => setSelected(i)}
					>
						{/* Musical note icon */}
						<span className="flex-shrink-0 w-8 h-6 flex items-center justify-center mr-1">
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="text-party-purple"
							>
								<path
									d="M9 17V5l10-2v12"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<circle
									cx="7"
									cy="17"
									r="3"
									stroke="currentColor"
									strokeWidth="2"
								/>
								<circle
									cx="17"
									cy="17"
									r="3"
									stroke="currentColor"
									strokeWidth="2"
								/>
							</svg>
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
			<main className="flex-1 px-12 py-10 flex flex-col relative">
				<div className="max-w-2xl">
			   {/* Image et titre centrés en haut pour tous les jeux */}
			   <>
   <div className="flex justify-center mb-6">
		   <img
			   src={
				   game.name === "Le mur du son"
					   ? aperololoMurduson
					   : game.name === "Jusqu'à 10"
						   ? visuel10
						   : game.name === "Suite de stars"
							   ? suiteDeStarsVisuel
							   : game.name === "Dos à dos"
								   ? aperololoDosados
								   : game.images[0]
			   }
			   alt={game.name === "Le mur du son"
				   ? "Visuel du jeu Le mur du son"
				   : game.name === "Jusqu'à 10"
					   ? "Visuel du jeu Jusqu'à 10"
					   : game.name === "Suite de stars"
						   ? "Visuel du jeu Suite de stars"
						   : game.name === "Dos à dos"
							   ? "Visuel du jeu Dos à dos"
							   : `Visuel du jeu ${game.name}`}
			   className="w-[420px] h-auto object-contain rounded-xl shadow-md border border-party-purple/30"
		   />
   </div>
					   <div className="flex justify-center mb-4">
							   <h1 className="text-3xl font-bold text-primary text-center">
									   {game.name}
							   </h1>
					   </div>
			   </>
					<Card className="mb-8">
						<CardHeader>
							<CardTitle className="text-2xl">Détails du jeu</CardTitle>
						</CardHeader>
						<CardContent>
			  <ul className="text-lg mb-2">
				<li>
				  <strong>Joueurs :</strong> {game.players}
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
							) : (
							  <div>
								<strong>Exemples :</strong>
								<ul className="list-disc ml-6 mt-2 text-base">
								  {game.examples && game.examples.map((ex, idx) => (
									<li key={idx}>{ex}</li>
								  ))}
								</ul>
							  </div>
							)}
			  {/* Histoire d'Aperololo comme citation avec le chat à gauche, centré */}
			  <div className="mt-8 bg-party-pink/10 rounded-lg p-4 flex items-center gap-4 shadow-md border border-party-pink/40">
				<img
				  src={catMascot}
				  alt="Mascotte Aperololo"
				  className="w-16 h-16 object-contain self-center"
				/>
				<blockquote className="text-base text-party-purple italic flex-1 px-2">
				  <span className="block">{game.story}</span>
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
			</main>
		</div>
	);
};

export default GameExplanation;
