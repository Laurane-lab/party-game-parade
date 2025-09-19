import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import PaywallDialog from "@/components/PaywallDialog";
import BrevoForm from "@/components/BrevoForm";
import catMascot from "@/assets/New mascot.png";
import cauldronIcon from "@/assets/icon/cauldron-thks-icongeek26.png";
import cloakIcon from "@/assets/icon/cloak-thks-icongeek26.png";
import hatIcon from "@/assets/icon/hat-thks-icongeek26.png";
import { useAuth } from "@/hooks/use-auth";
import { usePremium } from "@/hooks/use-premium";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const { user } = useAuth();
  const { isPremium } = usePremium();
  const navigate = useNavigate();
  const [showPaywall, setShowPaywall] = useState(false);
  
  // S'assurer que le scroll fonctionne sur cette page (correction du problème avec le drawer)
  useEffect(() => {
    // Nettoyer les styles potentiellement laissés par des composants modaux/drawer
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.body.style.bottom = '';
  }, []);

  const gameExamples = [
    {
      name: "Le mur du son",
      modeDeJeu: "Solo ou en équipe",
      players: "3 à 10",
      shortDescription: "Ce n'est pas celui de Willy Denzey mais il va tous vous faire chanter !",
      icon: cauldronIcon
    },
    {
      name: "Jusqu'à 10",
      modeDeJeu: "Solo",
      players: "3 à 5",
      shortDescription: "Et si compter jusqu'à 10 n'était pas si simple finalement ?",
      icon: hatIcon
    },
    {
      name: "Dos à dos",
      modeDeJeu: "En binôme",
      players: "4 à 10",
      shortDescription: "Connaissais-tu vraiment ton binôme ou les invités seront-ils plus forts que vous ?",
      icon: cloakIcon
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Section Héros */}
      <section className="relative py-20 px-4 text-center bg-gradient-to-br from-party-pink/20 via-party-orange/10 to-party-blue/20">
        <div className="absolute top-4 right-4">
          {user ? (
            <Button variant="outline" size="lg" onClick={() => navigate('/game-explanation')}>
              Voir les jeux
            </Button>
          ) : (
            <Button asChild variant="outline" size="lg">
              <a href="/connexion">Connexion</a>
            </Button>
          )}
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <img
              src={catMascot}
              alt="Mascotte Aperololo - chat noir mignon avec chapeau de fête"
              className="w-24 h-24 object-contain"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">
            Apérololo
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Des jeux pour animer tes soirées et week-end entre amis ou en famille<br />
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-3 bg-gradient-to-r from-party-orange to-party-pink hover:from-party-pink hover:to-party-orange">
              <a href="/game-explanation">Jouer gratuitement</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Exemples de jeux */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-primary">
            Parfait pour toutes les occasions
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Fini les silences ou les moments ennuyeux. Accède instantanément à des jeux clés en main pour apéro, anniversaires, dîners, EVJF/EVG etc.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
            {gameExamples.map((game) => {
              const isMurDuSon = game.name === "Le mur du son";
              const isJusqua10 = game.name === "Jusqu'à 10";
              const isDosADos = game.name === "Dos à dos";
              let cardProps;
              if (isMurDuSon) {
                cardProps = {
                  role: "button",
                  tabIndex: 0,
                  onClick: () => window.location.href = "/game-explanation?id=le-mur-du-son",
                  onKeyPress: (e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      window.location.href = "/game-explanation?id=le-mur-du-son";
                    }
                  },
                  className: "rounded-xl border border-gray-200 bg-gray-50 shadow-sm p-6 flex flex-col items-start text-left hover:shadow-lg transition-shadow cursor-pointer outline-none focus:ring-2 focus:ring-party-pink",
                };
              } else if (isJusqua10) {
                cardProps = {
                  role: "button",
                  tabIndex: 0,
                  onClick: () => window.location.href = "/game-explanation?id=jusqua-10",
                  onKeyPress: (e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      window.location.href = "/game-explanation?id=jusqua-10";
                    }
                  },
                  className: "rounded-xl border border-gray-200 bg-gray-50 shadow-sm p-6 flex flex-col items-start text-left hover:shadow-lg transition-shadow cursor-pointer outline-none focus:ring-2 focus:ring-party-pink",
                };
              } else if (isDosADos) {
                cardProps = {
                  role: "button",
                  tabIndex: 0,
                  onClick: () => setShowPaywall(true),
                  onKeyPress: (e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setShowPaywall(true);
                    }
                  },
                  className: "rounded-xl border border-gray-200 bg-gray-50 shadow-sm p-6 flex flex-col items-start text-left hover:shadow-lg transition-shadow cursor-pointer outline-none focus:ring-2 focus:ring-party-pink",
                };
              } else {
                cardProps = {
                  className: "rounded-xl border border-gray-200 bg-gray-50 shadow-sm p-6 flex flex-col items-start text-left hover:shadow-lg transition-shadow",
                };
              }
              return (
                <div key={game.name} {...cardProps} style={{ minHeight: '180px' }}>
                  <div className="flex items-center w-full mb-2 gap-2">
                    <img src={game.icon} alt={game.name + ' icon'} className="w-7 h-7 object-contain" style={{ marginRight: '6px' }} />
                    <h2 className="text-lg font-semibold text-party-purple m-0 whitespace-nowrap overflow-hidden text-ellipsis" style={{ maxWidth: '140px' }}>{game.name}</h2>
                  </div>
                  <div className="flex flex-row gap-2 text-xs mb-2 w-full">
                    <span className="px-2 py-1 rounded bg-party-pink/20 text-party-pink font-semibold">{game.modeDeJeu}</span>
                    <span className="px-2 py-1 rounded bg-party-blue/20 text-party-blue font-semibold">{game.players} joueurs</span>
                  </div>
                  <div className="text-sm text-muted-foreground mb-0 w-full">{game.shortDescription}</div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center mt-10">
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3 border-party-blue text-party-blue hover:bg-party-blue hover:text-white">
              <a href={user && isPremium ? "/game-explanation" : "/premium"}>Voir tous les jeux</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-16 px-4 bg-gradient-to-r from-party-blue/10 via-party-green/10 to-party-orange/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-primary">
            Comment fonctionne Apérololo
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl mb-4">🎪</div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Découvre les jeux</h3>
              <p className="text-muted-foreground">
                Entre amis, en famille, en soirée ou en week-end, il y en a pour tous les goûts
              </p>
            </div>
            <div>
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Joue gratuitement</h3>
              <p className="text-muted-foreground">
                3 jeux offerts sont disponibles immédiatement
              </p>
              {/* Bouton retiré */}
            </div>
            <div>
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Passe au niveau supérieur</h3>
              <p className="text-muted-foreground">
                7 jeux supplémentaires disponibles en passant premium
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-primary">
            Pourquoi choisir nos jeux ?
          </h2>
          <div className="text-left text-muted-foreground mb-12 max-w-2xl mx-auto flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <span className="mt-1"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#2ecc40" /><path d="M7.5 10.5l2 2 3-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
              <span><span className="font-bold text-party-green">Clé en main :</span> chaque jeu est expliqué de manière simple et claire, avec tout ce dont tu as besoin pour commencer immédiatement. Pas de matériel compliqué, juste du fun !</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#2ecc40" /><path d="M7.5 10.5l2 2 3-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
              <span><span className="font-bold text-party-green">Pour toutes les occasions :</span> nos jeux sont conçus pour briser la glace, créer des souvenirs ou simplement passer un bon moment, peu importe le contexte.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#2ecc40" /><path d="M7.5 10.5l2 2 3-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
              <span><span className="font-bold text-party-green">Testés et approuvés :</span> nous avons testé chaque jeu pour nous assurer qu'il fonctionne et qu'il apporte de l'ambiance.</span>
            </div>
          </div>
          <Button asChild size="lg" className="text-lg px-12 py-4 bg-gradient-to-r from-party-pink to-party-orange hover:from-party-orange hover:to-party-pink">
            <a href="/game-explanation">Jouer gratuitement</a>
          </Button>
        </div>
      </section>

      {/* Section formulaire Brevo */}
      <section className="py-16 px-4 bg-gradient-to-br from-party-pink/10 via-party-blue/10 to-party-orange/10">
        <div className="max-w-3xl mx-auto">
          <div className="mx-auto max-w-md">
            <BrevoForm />
          </div>
        </div>
      </section>

      {showPaywall && <PaywallDialog onClose={() => setShowPaywall(false)} />}
      <Footer />
    </div>
  );
};

export default Index;
