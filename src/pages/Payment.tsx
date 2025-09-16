import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import catMascot from "@/assets/New mascot.png";

export default function PaymentSuccess() {
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [message, setMessage] = useState("Confirmation du paiement en cours...");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        // Vérifier si l'utilisateur est connecté
        const { data: sessionData } = await supabase.auth.getSession();
        const session = sessionData.session;

        if (!session) {
          setStatus("error");
          setMessage("Erreur: Vous devez être connecté pour vérifier votre paiement.");
          return;
        }

        const userId = session.user.id;

        // Récupérer les paramètres d'URL
        const params = new URLSearchParams(location.search);
        const success = params.get('success');

        // Pour l'URL de paiement direct Stripe, nous nous fions au paramètre success=true
        if (success === "true") {
          // Vérifier le statut premium dans la base de données
          // (mis à jour par le webhook Stripe)
          await checkPremiumStatus(userId);
        } else {
          setStatus("error");
          setMessage("Nous n'avons pas pu confirmer votre paiement. Veuillez réessayer ou contacter le support si le problème persiste.");
        }
      } catch (error) {
        console.error("Erreur lors de la vérification du paiement:", error);
        setStatus("error");
        setMessage("Une erreur s'est produite lors de la vérification de votre paiement. Veuillez réessayer ou contacter le support.");
      }
    };

    const checkPremiumStatus = async (userId: string, attempt = 1) => {
      const maxAttempts = 10; // Vérifier jusqu'à 10 fois (30 secondes max)

      try {
        const { data: profile, error } = await supabase
          .from('profiles')
          .select('is_premium, payment_date')
          .eq('id', userId)
          .single();

        if (error) {
          console.error("Erreur lors de la vérification du profil:", error);
          if (attempt < maxAttempts) {
            setTimeout(() => {
              checkPremiumStatus(userId, attempt + 1);
            }, 3000);
            setMessage(`Vérification du statut de paiement... (${attempt}/${maxAttempts})`);
          } else {
            setStatus("error");
            setMessage("Impossible de vérifier votre statut de paiement. Veuillez contacter le support.");
          }
          return;
        }

        // Si le profil existe et que l'utilisateur est premium
        if (profile && profile.is_premium) {
          setStatus("success");
          setMessage("Votre paiement a été confirmé avec succès ! Vous avez maintenant accès à tous les jeux premium.");
          sessionStorage.removeItem('game_id_after_payment');
          return;
        }

        // Si le profil n'est pas encore premium, attendre et réessayer
        if (attempt < maxAttempts) {
          setTimeout(() => {
            checkPremiumStatus(userId, attempt + 1);
          }, 3000); // Attendre 3 secondes avant de réessayer

          setMessage(`Traitement du paiement en cours... (${attempt}/${maxAttempts})`);
        } else {
          // Après tous les essais, le webhook n'a pas encore traité le paiement
          setStatus("error");
          setMessage("Le traitement de votre paiement prend plus de temps que prévu. Veuillez attendre quelques minutes ou contacter le support si le problème persiste.");
        }
      } catch (error) {
        console.error("Erreur lors de la vérification du statut premium:", error);
        if (attempt < maxAttempts) {
          setTimeout(() => {
            checkPremiumStatus(userId, attempt + 1);
          }, 3000);
        } else {
          setStatus("error");
          setMessage("Une erreur s'est produite lors de la vérification de votre paiement. Veuillez contacter le support.");
        }
      }
    };

    verifyPayment();
  }, [location.search]);

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
