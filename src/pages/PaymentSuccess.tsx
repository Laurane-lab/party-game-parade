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
        
        // Pour l'URL de paiement direct Stripe, nous nous fions au paramètre success=true
        if (success === "true") {
          // Mettre à jour le profil utilisateur avec le statut premium
          const { error: updateError } = await supabase
            .from('profiles')
            .upsert({
              id: userId,
              is_premium: true,
              email: userEmail, // Stocker l'email pour pouvoir vérifier ultérieurement
              payment_date: new Date().toISOString()
            });

          if (updateError) {
            console.error("Erreur lors de la mise à jour du profil:", updateError);
            setStatus("error");
            setMessage("Nous avons bien reçu votre paiement, mais une erreur s'est produite lors de la mise à jour de votre compte. Veuillez contacter le support.");
            return;
          }

          // Tout s'est bien passé
          setStatus("success");
          setMessage("Votre paiement a été confirmé avec succès ! Vous avez maintenant accès à tous les jeux premium.");
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
              onClick={() => navigate("/game-explanation")}
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
