import { Button } from "@/components/ui/button";
import { Crown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PremiumHighlight = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 px-4 text-center bg-gradient-to-r from-primary/10 via-party-pink/10 to-party-orange/10">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center mb-6">
          <Crown className="w-12 h-12 text-secondary" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
          Débloquez les jeux Premium
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Paiement unique pour un accès à vie à 7 jeux premium exclusifs ainsi qu'aux versions améliorées des jeux gratuits. De nouveaux packs de jeux arrivent bientôt !
        </p>
        <Button
          size="lg"
          className="text-lg px-8 py-3 bg-gradient-to-r from-party-pink to-party-orange hover:from-party-orange hover:to-party-pink text-white"
          onClick={() => navigate("/premium")}
        >
          Voir les jeux Premium →
        </Button>
      </div>
    </section>
  );
};

export default PremiumHighlight;
