import React from "react";
import { Button } from "@/components/ui/button";


const PaywallDialog = ({ onClose, shortDescription }: { onClose?: () => void, shortDescription?: string }) => {
	// Fonction pour revenir au jeu gratuit "Le mur du son"
	const goToFreeGame = () => {
		window.location.href = '/game-explanation?jeu=le-mur-du-son';
	};

	// Ferme la popup si on clique sur le fond
	const handleBackdropClick = () => {
		if (onClose) onClose();
	};

	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
			onClick={handleBackdropClick}
			style={{ cursor: 'pointer' }}
		>
			<div
				className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full text-center border border-party-pink"
				onClick={e => e.stopPropagation()}
				style={{ cursor: 'default' }}
			>
				<h2 className="text-xl font-bold text-party-pink mb-2">Accès réservé aux membres premium</h2>
				{shortDescription && (
					<p className="mb-2 text-party-yellow font-semibold">{shortDescription}</p>
				)}
				<p className="mb-4 text-party-purple">Ce jeu est exclusif. Débloque tous les jeux pour profiter de l'expérience complète !</p>
				<Button className="w-full mb-2" variant="secondary" onClick={() => window.location.href = '/premium'}>Découvrir tous les jeux premium</Button>
				<Button className="w-full" variant="default" onClick={goToFreeGame}>Retour aux jeux gratuits</Button>
			</div>
		</div>
	);
};

export default PaywallDialog;
