import React from "react";
import { Button } from "@/components/ui/button";

const PaywallDialog = ({ onClose }: { onClose?: () => void }) => {
	// Fonction pour revenir au jeu gratuit "Le mur du son"
	const goToFreeGame = () => {
		window.location.href = '/game-explanation?jeu=le-mur-du-son';
	};
	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
			<div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full text-center border border-party-pink">
				<h2 className="text-xl font-bold text-party-pink mb-2">Accès réservé aux membres premium</h2>
			<p className="mb-4 text-party-purple">Ce jeu est exclusif. Débloque tous les jeux pour profiter de l'expérience complète !</p>
		<Button className="w-full mb-2" variant="secondary" onClick={() => window.location.href = '/to-go-premium'}>Découvrir tous les jeux premium</Button>
			<Button className="w-full" variant="default" onClick={goToFreeGame}>Retour aux jeux gratuits</Button>
			</div>
		</div>
	);
};

export default PaywallDialog;
