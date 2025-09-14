import { games } from "@/data/games";
import { useIsMobile } from "@/hooks/use-mobile";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "@/components/Header";
import { useAuth } from "@/hooks/use-auth";
import { usePremium } from "@/hooks/use-premium";
import { redirectToPayment } from "@/lib/payment";
import GameSelector from "@/components/game/GameSelector";
import GameHero from "@/components/game/GameHero";
import GameContent from "@/components/game/GameContent";
import { gameImageMapping } from "@/components/game/assets";


const GameExplanation = () => {
	const isMobile = useIsMobile();
	const navigate = useNavigate();
	const location = useLocation();
	// Get id param from URL
	const params = new URLSearchParams(location.search);
	const idParam = params.get("id");
	// Find index from idParam
	const initialIndex = idParam ? games.findIndex(g => g.id === idParam) : 0;
	const [selected, setSelected] = useState(initialIndex >= 0 ? initialIndex : 0);
	const game = games[selected];
	// Utilisation des hooks useAuth et usePremium pour récupérer l'utilisateur et le statut premium
	const { user, isAuthenticated } = useAuth();
	const { isPremium: isUserPremium } = usePremium();

	// Synchronise l'index sélectionné avec l'URL
	useEffect(() => {
		if (idParam) {
			const idx = games.findIndex(g => g.id === idParam);
			if (idx >= 0 && idx !== selected) {
				setSelected(idx);
			}
		}
	}, [idParam, selected]);

	const handleGameClick = (i: number) => {
		setSelected(i);
		navigate("/game-explanation?id=" + games[i].id);
	};

	const handleRedirectToPayment = () => {
		redirectToPayment();
	};

	const handleNavigateToConnexion = () => {
		navigate('/connexion?redirect_to=payment');
	};

	const navigateHome = () => {
		navigate('/');
	};

	return (
		<div className="min-h-screen bg-background flex flex-col">
			<Header />
			<div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} flex-1`}>
				<GameSelector
					games={games}
					selectedIndex={selected}
					onSelect={handleGameClick}
					isMobile={isMobile}
					navigateHome={navigateHome}
				/>

				<div className="flex flex-col flex-1">
					<main className={`flex-1 ${isMobile ? 'px-2 py-2' : 'px-12 py-10'}`}>
						<div>
							<GameHero
								game={game}
								imageSrc={gameImageMapping[game.coverImage]}
							/>

							<div className="mb-8 max-w-2xl mx-auto">
								<GameContent
									game={game}
									user={user}
									isAuthenticated={isAuthenticated}
									isUserPremium={isUserPremium}
									onRedirectToPayment={handleRedirectToPayment}
									onNavigateToConnexion={handleNavigateToConnexion}
								/>
							</div>
						</div>
					</main>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default GameExplanation;
