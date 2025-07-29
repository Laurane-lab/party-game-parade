import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import catMascot from "@/assets/cat-mascot.png";

const Index = () => {
  const featuredGames = [
    {
      title: "Codenames",
      description: "The ultimate party word game that gets everyone involved",
      players: "4-8 players",
      time: "15 min",
      category: "Word Game"
    },
    {
      title: "One Night Ultimate Werewolf",
      description: "Fast-paced social deduction that creates hilarious moments",
      players: "3-10 players", 
      time: "10 min",
      category: "Social Deduction"
    },
    {
      title: "Telestrations",
      description: "The drawing and guessing game that guarantees laughs",
      players: "4-8 players",
      time: "30 min", 
      category: "Drawing"
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
            The best board games for unforgettable parties.<br />
            Turn any gathering into an epic adventure!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-3 bg-gradient-to-r from-party-orange to-party-pink hover:from-party-pink hover:to-party-orange">
              Shop Party Games
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-party-blue text-party-blue hover:bg-party-blue hover:text-white">
              Browse Collection
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Games */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            Party Favorites
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredGames.map((game, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{game.title}</CardTitle>
                    <Badge variant="secondary" className="bg-party-green text-white">{game.category}</Badge>
                  </div>
                  <CardDescription className="text-sm text-muted-foreground">
                    {game.players} • {game.time}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground mb-4">{game.description}</p>
                  <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary">Add to Cart</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-gradient-to-r from-party-blue/10 via-party-green/10 to-party-orange/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-primary">
            Why Party Hosts Love Aperololo
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Curated Selection</h3>
              <p className="text-muted-foreground">
                Hand-picked games that guarantee fun for every group size and vibe
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Fast Delivery</h3>
              <p className="text-muted-foreground">
                Get your games delivered quickly so your party plans stay on track
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Party Support</h3>
              <p className="text-muted-foreground">
                Expert recommendations and party planning tips included with every order
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-primary">
            Ready to Host the Ultimate Game Night?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of party hosts who trust Aperololo for their board game needs
          </p>
          <Button size="lg" className="text-lg px-12 py-4 bg-gradient-to-r from-party-pink to-party-orange hover:from-party-orange hover:to-party-pink">
            Start Shopping Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
