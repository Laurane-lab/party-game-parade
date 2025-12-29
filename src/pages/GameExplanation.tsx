import { games } from "@/data/games";
import { useIsMobile } from "@/hooks/use-mobile";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "@/components/Header";
import { useAuth } from "@/hooks/use-auth";
import { usePremium } from "@/hooks/use-premium";
import { redirectToPayment, saveGameIdForPayment } from "@/lib/payment";
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
	const { user, isAuthenticated, logout } = useAuth();
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

	const handleRedirectToPayment = (email?: string) => {
		// Rediriger vers le paiement en sauvegardant l'ID du jeu actuel
		redirectToPayment({ gameId: game.id, email: email || user?.email });
	};

	const handleNavigateToConnexion = () => {
		// Sauvegarder l'URL actuelle pour redirection après connexion
		sessionStorage.setItem('redirect_after_login', location.pathname + location.search);
		// Navigation vers la connexion sans intention d'achat - utilisé pour les boutons de connexion généraux
		navigate('/connexion');
	};

	const handleNavigateToConnexionForPayment = () => {
		// Sauvegarder l'ID du jeu actuel pour redirection après connexion et paiement
		// Utilisé uniquement pour les boutons avec intention d'achat explicite
		saveGameIdForPayment(game.id);
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
					user={user}
					isAuthenticated={isAuthenticated}
					logout={logout}
					onNavigateToConnexion={handleNavigateToConnexion}
				/>

				<div className="flex flex-col flex-1">
					<main className={`flex-1 ${isMobile ? 'px-2 py-2' : 'px-12 py-10'}`}>
						<div>
							<GameHero
								game={game}
								imageSrc={gameImageMapping[game.coverImage]}
							/>

							<div className="max-w-none">
								<GameContent
									game={game}
									user={user}
									isAuthenticated={isAuthenticated}
									isUserPremium={isUserPremium}
									onRedirectToPayment={handleRedirectToPayment}
									onNavigateToConnexion={handleNavigateToConnexion}
									onNavigateToConnexionForPayment={handleNavigateToConnexionForPayment}
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
