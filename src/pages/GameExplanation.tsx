import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import catMascot from "@/assets/cat-mascot.png";
import gameImage1 from "@/assets/cat-mascot.png"; // Replace with actual image path
import gameImage2 from "@/assets/cat-mascot.png"; // Replace with actual image path

const GameExplanation = () => {
  return (
    <div className="min-h-screen bg-background py-10 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Game Title & Images */}
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-primary">Never Have I Ever - Adult Edition</h1>
          <div className="flex gap-4 mb-4">
            <img src={gameImage1} alt="Game example 1" className="w-32 h-32 object-cover rounded-lg" />
            <img src={gameImage2} alt="Game example 2" className="w-32 h-32 object-cover rounded-lg" />
          </div>
        </div>

        {/* Game Details */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Game Details</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="text-lg mb-2">
              <li><strong>Players:</strong> 3-12</li>
              <li><strong>Duration:</strong> 15-30 minutes</li>
            </ul>
            <div className="mb-2">
              <strong>Rules:</strong>
              <ol className="list-decimal ml-6 mt-2 text-base">
                <li>Each player takes turns saying "Never have I ever..." followed by something they've never done.</li>
                <li>Anyone who <em>has</em> done it must take a sip (or raise a hand, etc.).</li>
                <li>Play continues until everyone has had a turn or time runs out.</li>
              </ol>
            </div>
            <div>
              <strong>Examples:</strong>
              <ul className="list-disc ml-6 mt-2 text-base">
                <li>Never have I ever gone skinny dipping.</li>
                <li>Never have I ever lied to get out of a date.</li>
                <li>Never have I ever sent a risky text.</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Mascot Story */}
        <div className="flex items-center gap-4 mb-8 bg-party-pink/10 rounded-lg p-4">
          <img src={catMascot} alt="Aperololo mascot" className="w-20 h-20 object-contain" />
          <div>
            <h3 className="text-lg font-semibold mb-1 text-party-pink">Aperololo's Story</h3>
            <p className="text-muted-foreground">
              "The first time I played this game, I learned things about my friends I never expected! 
              It broke the ice at a birthday party and started hilarious conversations. 
              Try it and see what surprises come out!"
            </p>
          </div>
        </div>

        {/* Button to Other Games */}
        <div className="text-center">
          <Button asChild size="lg" className="text-lg px-8 py-3 bg-gradient-to-r from-party-blue to-party-green hover:from-party-green hover:to-party-blue">
            <a href="/games">Discover Other Games</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GameExplanation;
