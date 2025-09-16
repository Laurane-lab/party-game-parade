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
        const userEmail = session.user.email;

        if (!userEmail) {
          setStatus("error");
          setMessage("Erreur: Adresse e-mail manquante.");
          return;
        }

        // Récupérer les paramètres d'URL de Stripe (si disponibles)
        const params = new URLSearchParams(location.search);
        const success = params.get('success');
        const gameId = params.get('game_id');
        const checkoutSessionId = params.get('checkout_session_id');

        // Log the checkout session ID to console
        console.log('Stripe Checkout Session ID:', checkoutSessionId);

        // Pour l'URL de paiement direct Stripe, nous nous fions au paramètre success=true
        if (success === "true") {
          // Mettre à jour le profil utilisateur avec le statut premium
          const { data: existingProfile, error: selectError } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', userId)
            .single();

          if (selectError && selectError.code !== 'PGRST116') {
            // Erreur autre que "profil non trouvé"
            console.error("Erreur lors de la récupération du profil:", selectError);
            setStatus("error");
            setMessage("Une erreur s'est produite lors de la vérification de votre compte. Veuillez réessayer ou contacter le support.");
            return;
          }

          let updateError = null;

          if (!existingProfile) {
            // Créer un nouveau profil
            const { error } = await supabase
              .from('profiles')
              .insert({
                id: userId,
                email: userEmail,
                is_premium: true,
                payment_date: new Date().toISOString()
              });
            updateError = error;
          } else {
            // Mettre à jour le profil existant
            const { error } = await supabase
              .from('profiles')
              .update({
                is_premium: true,
                email: userEmail, // Mettre à jour l'email au cas où il aurait changé
                payment_date: new Date().toISOString(),
                updated_at: new Date().toISOString()
              })
              .eq('id', userId);
            updateError = error;
          }

          if (updateError) {
            console.error("Erreur lors de la mise à jour du profil:", updateError);
            setStatus("error");
            setMessage("Nous avons bien reçu votre paiement, mais une erreur s'est produite lors de la mise à jour de votre compte. Veuillez contacter le support.");
            return;
          }

          // Tout s'est bien passé
          setStatus("success");
          setMessage("Votre paiement a été confirmé avec succès ! Vous avez maintenant accès à tous les jeux premium.");

          // Nettoyer le sessionStorage après récupération de l'ID du jeu
          sessionStorage.removeItem('game_id_after_payment');
        } else {
          // Si nous n'avons pas de confirmation de succès
          setStatus("error");
          setMessage("Nous n'avons pas pu confirmer votre paiement. Veuillez réessayer ou contacter le support si le problème persiste.");
        }
      } catch (error) {
        console.error("Erreur lors de la vérification du paiement:", error);
        setStatus("error");
        setMessage("Une erreur s'est produite lors de la vérification de votre paiement. Veuillez réessayer ou contacter le support.");
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
