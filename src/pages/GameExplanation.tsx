import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import catMascot from "@/assets/New mascot.png";

const games = [
	{
		name: "Never Have I Ever - Adult Edition",
		players: "3-12",
		duration: "15-30 minutes",
		rules: [
			'Each player takes turns saying "Never have I ever..." followed by something they\'ve never done.',
			"Anyone who has done it must take a sip (or raise a hand, etc.).",
			"Play continues until everyone has had a turn or time runs out.",
		],
		examples: [
			"Never have I ever gone skinny dipping.",
			"Never have I ever lied to get out of a date.",
			"Never have I ever sent a risky text.",
		],
		images: [catMascot, catMascot], // Replace with actual game images
		story: `The first time I played this game, I learned things about my friends I never expected! It broke the ice at a birthday party and started hilarious conversations. Try it and see what surprises come out!`,
	},
	{
		name: "Most Likely To diiiie",
		players: "4-10",
		duration: "20 minutes",
		rules: [
			"One player reads a prompt: 'Who's most likely to...?'",
			"Everyone points to the person they think fits best.",
			"The person with the most votes shares a story.",
		],
		examples: [
			"Who's most likely to go skydiving?",
			"Who's most likely to get lost on vacation?",
		],
		images: [catMascot, catMascot],
		story: `This game always gets everyone laughing and reveals the wildest stories. I once got voted 'most likely to crash a wedding'... and I had to admit, it was true!`,
	},
	// ...add 8 more games...
];

const GameExplanation = () => {
	const [selected, setSelected] = useState(0);
	const game = games[selected];

	return (
		<div className="min-h-screen bg-background flex flex-row py-10 px-0">
			{/* Left: Game List */}
			<aside className="w-80 bg-muted/50 px-8 py-10 flex flex-col gap-4 border-r">
				<h2 className="text-xl font-bold mb-6">Games</h2>
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

			{/* Right: Game Details */}
			<main className="flex-1 px-12 py-10 flex flex-col relative">
				<div className="max-w-2xl">
					<div className="flex items-center mb-4">
						<h1 className="text-3xl font-bold text-primary">
							{game.name}
						</h1>
						{/* Game image to the right of the title, with spacing */}
						<img
							src={game.images[0]}
							alt="Game example"
							className="w-24 h-24 object-cover rounded-lg ml-8"
						/>
					</div>
					<Card className="mb-8">
						<CardHeader>
							<CardTitle className="text-2xl">Game Details</CardTitle>
						</CardHeader>
						<CardContent>
			  <ul className="text-lg mb-2">
				<li>
				  <strong>Players:</strong> {game.players}
				</li>
			  </ul>
							<div className="mb-2">
								<strong>Rules:</strong>
								<ol className="list-decimal ml-6 mt-2 text-base">
									{game.rules.map((rule, idx) => (
										<li key={idx}>{rule}</li>
									))}
								</ol>
							</div>
							<div>
								<strong>Examples:</strong>
								<ul className="list-disc ml-6 mt-2 text-base">
									{game.examples.map((ex, idx) => (
										<li key={idx}>{ex}</li>
									))}
								</ul>
							</div>
			  {/* Aperololo's story as a quote with cat on the left, centered */}
			  <div className="mt-8 bg-party-pink/10 rounded-lg p-4 flex items-center gap-4 shadow-md border border-party-pink/40">
				<img
				  src={catMascot}
				  alt="Aperololo mascot"
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
						<a href="/games">Discover Other Games</a>
					</Button>
				</div>
				{/* Removed founder story from outside the Card */}
			</main>
		</div>
	);
};

export default GameExplanation;
