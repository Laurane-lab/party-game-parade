import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import catMascot from "@/assets/cat-mascot.png";

const Index = () => {
  const gameExamples = [
    {
      title: "Never Have I Ever - Adult Edition",
      description: "Hilarious prompts that get everyone sharing stories",
      category: "Icebreaker"
    },
    {
      title: "Most Likely To diiiie",
      description: "Who's most likely to do the craziest things?",
      category: "Group Fun"
    },
    {
      title: "Two Truths and a Lie",
      description: "Classic game with a grown-up twist",
      category: "Getting to Know You"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center bg-gradient-to-br from-party-pink/20 via-party-orange/10 to-party-blue/20">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <img 
              src={catMascot} 
              alt="Aperololo mascot - cute black cat with party hat"
              className="w-24 h-24 object-contain"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">
            Aperololo
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Party games for grown-ups who outgrew "Truth or Dare"<br />
            <span className="text-lg">Get 3 games free, unlock dozens more!</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="text-lg px-8 py-3 bg-gradient-to-r from-party-orange to-party-pink hover:from-party-pink hover:to-party-orange">
            <a href="/connexion">Start Playing Free</a>
          </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-party-blue text-party-blue hover:bg-party-blue hover:text-white">
              See All Games
            </Button>
          </div>
        </div>
      </section>

      {/* Game Examples */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-primary">
            Perfect for Any Party
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            No more awkward silences or boring moments. Get instant access to games that work for 
            bachelorette parties, birthdays, dinner parties, and any gathering of adults.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {gameExamples.map((game, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{game.title}</CardTitle>
                    <Badge variant="secondary" className="bg-party-green text-white">{game.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground">{game.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-gradient-to-r from-party-blue/10 via-party-green/10 to-party-orange/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-primary">
            How Aperololo Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Connect & Play</h3>
              <p className="text-muted-foreground">
                Sign in and get instant access to 3 amazing party games - completely free
              </p>
            </div>
            <div>
              <div className="text-4xl mb-4">🎪</div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Upgrade for More</h3>
              <p className="text-muted-foreground">
                Love the games? Unlock our full collection of dozens of party games
              </p>
            </div>
            <div>
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Party On</h3>
              <p className="text-muted-foreground">
                Never run out of fun activities for any gathering or celebration
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-primary">
            Ready to Become the Ultimate Party Host?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Start with 3 free games and see why thousands choose Aperololo for their parties
          </p>
          <Button asChild size="lg" className="text-lg px-12 py-4 bg-gradient-to-r from-party-pink to-party-orange hover:from-party-orange hover:to-party-pink">
            <a href="/connexion">Get Started Free</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
