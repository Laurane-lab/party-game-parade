import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
const catMascot = "/assets/New mascot.png";
import { useAuth } from "@/hooks/use-auth";
import { usePremium } from "@/hooks/use-premium";
import { supabase } from "@/lib/supabase";

export default function PaymentSuccess() {
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [message, setMessage] = useState("Confirmation du paiement en cours...");
  const navigate = useNavigate();
  const location = useLocation();
  const { user, isAuthenticated, isLoading: isAuthLoading } = useAuth();
  const { isPremium, refetch: refetchPremiumStatus } = usePremium();

  useEffect(() => {
    if (isAuthLoading) {
      return; // Attendre que l'authentification soit chargée
    }

    if (!isAuthenticated || !user) {
      setStatus("error");
      setMessage("Erreur: Vous devez être connecté pour vérifier votre paiement.");
      return;
    }

    const params = new URLSearchParams(location.search);
    const success = params.get('success');

    if (success !== "true") {
      setStatus("error");
      setMessage("Nous n'avons pas pu confirmer votre paiement. Veuillez réessayer ou contacter le support si le problème persiste.");
      return;
    }

    // Si l'utilisateur est déjà premium (par exemple, s'il rafraîchit la page)
    if (isPremium) {
      setStatus("success");
      setMessage("Votre paiement a été confirmé avec succès ! Vous avez maintenant accès à tous les jeux premium.");
      sessionStorage.removeItem('game_id_after_payment');
      return;
    }

    // Utiliser Realtime pour écouter les changements de statut premium
    setMessage("Traitement du paiement en cours...");

    const channel = supabase
      .channel(`profile-changes:${user.id}`)
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'profiles',
          filter: `id=eq.${user.id}`
        },
        (payload) => {
          console.log('Change received!', payload);
          const newProfile = payload.new as { is_premium: boolean };
          if (newProfile.is_premium) {
            console.log("✅ Utilisateur premium confirmé via Realtime !");
            setStatus("success");
            setMessage("Votre paiement a été confirmé avec succès ! Vous avez maintenant accès à tous les jeux premium.");
            sessionStorage.removeItem('game_id_after_payment');
            refetchPremiumStatus(); // Pour mettre à jour l'état global
            channel.unsubscribe();
          }
        }
      )
      .subscribe((subStatus, err) => {
        if (subStatus === 'SUBSCRIBED') {
          console.log(`🔔 Subscribed to profile changes for user: ${user.id}`);
        }
        if (err) {
          console.error("❌ Erreur d'abonnement Realtime:", err);
          setStatus("error");
          setMessage("Une erreur est survenue lors de la vérification en temps réel. Veuillez contacter le support.");
        }
      });

    // Timeout de sécurité au cas où le webhook prendrait trop de temps
    const timeoutId = setTimeout(() => {
      channel.unsubscribe();
      if (status === 'loading') { // Ne pas changer le statut si déjà success/error
        console.log("⌛ Timeout: Le webhook n'a pas encore traité le paiement");
        setStatus("error");
        setMessage("Le traitement de votre paiement prend plus de temps que prévu. Veuillez attendre quelques minutes et rafraîchir la page, ou contacter le support si le problème persiste.");
      }
    }, 45000); // 45 secondes

    return () => {
      clearTimeout(timeoutId);
      channel.unsubscribe();
    };
  }, [isAuthLoading, isAuthenticated, isPremium, location.search, navigate, refetchPremiumStatus, user, status]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <div className="flex flex-col items-center justify-center flex-1 p-4">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md flex flex-col items-center">
          <img src={catMascot} alt="Mascotte" className="w-20 h-20 mb-4" />
          <h2 className="text-2xl font-bold mb-6 text-center">
            {status === "loading" ? "Vérification du paiement" :
             status === "success" ? "Paiement réussi" : "Erreur de paiement"}
          </h2>

          <div className={`mb-6 text-center ${
            status === "loading" ? "text-blue-600" :
            status === "success" ? "text-green-600" :
            "text-red-600"
          }`}>
            {message}
          </div>

          {status !== "loading" && (
            <Button
              className="w-full bg-party-pink hover:bg-party-pink/80 text-white"
              onClick={() => {
                // Récupérer l'ID du jeu depuis les paramètres URL
                const params = new URLSearchParams(location.search);
                const gameId = params.get('game_id');

                if (gameId) {
                  // Rediriger vers le jeu spécifique
                  navigate(`/game-explanation?id=${gameId}`);
                } else {
                  // Redirection par défaut vers la page générale des jeux
                  navigate("/game-explanation");
                }
              }}
            >
              {status === "success" ? "Voir tous les jeux" : "Retour aux jeux"}
            </Button>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
