import { Button } from "@/components/ui/button";
import { Crown } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import { usePremium } from "@/hooks/use-premium";

const PremiumHighlight = () => {
  const { user } = useAuth();
  const { isPremium } = usePremium();

  return (
    <section className="py-16 px-4 text-center bg-gradient-to-r from-primary/10 via-party-pink/10 to-party-orange/10">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center mb-6">
          <Crown className="w-12 h-12 text-secondary" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
          Débloques les jeux Premium
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          <span className="font-semibold text-party-green">Paiement unique de 4,99€</span> pour un accès à vie au starter pack de <span className="font-semibold text-party-green">7 jeux premium</span> exclusifs ainsi qu'au <span className="font-semibold text-party-green">contenu bonus des jeux gratuits</span>. De nouveaux packs de jeux viendront enrichir le catalogue au fil du temps !
        </p>
        <Button asChild size="lg" className="text-lg px-8 py-3 bg-gradient-to-r from-party-pink to-party-orange hover:from-party-orange hover:to-party-pink text-white">
          <a href={user && isPremium ? "/game-explanation" : "/premium"}>Voir les jeux premium</a>
        </Button>
      </div>
    </section>
  );
};

export default PremiumHighlight;
