import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import catMascot from "@/assets/New mascot.png";

const Index = () => {
  const gameExamples = [
    {
      title: "Le mur du son",
      players: "3 à 10",
      description: "Ce n'est pas celui de Willy Denzey mais il va vous faire chanter !",
      category: "Solo ou en équipe"
    },
    {
      title: "Dos à dos",
      players: "4 à 10",
      description: "Connaissez-vous vraiment votre duo ou les invités seront-ils plus forts que vous ?",
      category: "En équipe"
    },
    {
      title: "Jusqu'à 10",
      players: "3 à 5",
      description: "Et si compter jusqu'à 10 n'était pas si simple finalement ?",
      category: "Solo"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Section Héros */}
      <section className="relative py-20 px-4 text-center bg-gradient-to-br from-party-pink/20 via-party-orange/10 to-party-blue/20">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <img 
              src={catMascot} 
              alt="Mascotte Aperololo - chat noir mignon avec chapeau de fête"
              className="w-24 h-24 object-contain"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">
            Aperololo
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Des jeux pour adultes qui ont dépassé \"Action ou Vérité\"<br />
            <span className="text-lg">3 jeux gratuits, débloquez des dizaines d'autres !</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-3 bg-gradient-to-r from-party-orange to-party-pink hover:from-party-pink hover:to-party-orange">
              <a href="/game-explanation">Commencer gratuitement</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Exemples de jeux */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-primary">
            Parfait pour toutes les soirées
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Fini les silences gênants ou les moments ennuyeux. Accédez instantanément à des jeux adaptés aux enterrements de vie de jeune fille, anniversaires, dîners, et toutes les réunions d'adultes.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {gameExamples.map((game, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{game.title}</CardTitle>
                    <Badge variant="secondary" className="bg-party-green text-white">{game.category}</Badge>
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">Players: {game.players}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground">{game.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3 border-party-blue text-party-blue hover:bg-party-blue hover:text-white">
              <a href="/game-explanation">Voir tous les jeux</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-16 px-4 bg-gradient-to-r from-party-blue/10 via-party-green/10 to-party-orange/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-primary">
            Comment fonctionne Aperololo
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Connectez-vous & Jouez</h3>
              <p className="text-muted-foreground">
                Connectez-vous et accédez instantanément à 3 jeux de soirée incroyables - totalement gratuits
              </p>
            </div>
            <div>
              <div className="text-4xl mb-4">🎪</div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Débloquez plus de jeux</h3>
                <p className="text-muted-foreground">
                  Vous aimez les jeux ? Débloquez notre collection complète de dizaines de jeux de soirée
                </p>
                <div className="mt-4">
                  <Button asChild size="sm" className="text-md px-4 py-2 bg-party-blue text-white">
                    <a href="/game-explanation">Commencer gratuitement</a>
                  </Button>
                </div>
              </div>
            <div>
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Faites la fête</h3>
              <p className="text-muted-foreground">
                Ne soyez jamais à court d'activités amusantes pour n'importe quelle réunion ou célébration
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-primary">
            Prêt à devenir le roi de la soirée ?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Commencez avec 3 jeux gratuits et découvrez pourquoi des milliers de personnes choisissent Aperololo pour leurs fêtes
          </p>
          <Button asChild size="lg" className="text-lg px-12 py-4 bg-gradient-to-r from-party-pink to-party-orange hover:from-party-orange hover:to-party-pink">
            <a href="/game-explanation">Commencer gratuitement</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
