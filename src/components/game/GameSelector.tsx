import { useState } from "react";
import { Game } from "@/data/games";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerTrigger, DrawerContent } from "@/components/ui/drawer";
import { Menu, User as UserIcon, LogOut, LogIn } from "lucide-react";
import { gameIconMapping } from "./assets";
import { User } from "@supabase/supabase-js";

const catMascot = "/assets/New mascot.png";

interface GameSelectorProps {
  games: Game[];
  selectedIndex: number;
  onSelect: (index: number) => void;
  isMobile: boolean;
  navigateHome: () => void;
  user?: User | null;
  isAuthenticated?: boolean;
  logout?: () => Promise<void>;
  onNavigateToConnexion?: () => void;
}

const GameSelector = ({ games, selectedIndex, onSelect, isMobile, navigateHome, user, isAuthenticated, logout, onNavigateToConnexion }: GameSelectorProps) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const gameIcons = games.map(g => gameIconMapping[g.icon]);

  const handleAuthAction = async () => {
    if (isAuthenticated && logout) {
      await logout();
    } else if (onNavigateToConnexion) {
      onNavigateToConnexion();
    }
  };

  const GameButton = ({ game, index, isSelected }: { game: Game; index: number; isSelected: boolean }) => (
    <Button
      variant="ghost"
      className={`flex items-center w-full text-lg py-3 px-3 rounded-none border-none bg-transparent transition-colors duration-200
				${isSelected
          ? "bg-party-pink/5 hover:bg-party-pink/5"
          : "hover:bg-gray-50"}
			`}
      onClick={() => {
        if (isMobile) setDrawerOpen(false);
        onSelect(index);
      }}
    >
      <span className="flex-shrink-0 w-7 h-7 flex items-center justify-center mr-3">
        <img src={gameIcons[index]} alt={`Icone jeu ${game.titre}`} className="w-7 h-7 object-contain" />
      </span>
      <div className="flex items-center justify-between flex-grow overflow-hidden">
        <span
          className={`text-left font-medium block overflow-hidden text-ellipsis whitespace-nowrap
						${isSelected ? "text-party-pink" : "text-gray-700 hover:text-gray-900"}
					`}
          title={game.titre}
        >
          {game.titre}
        </span>
      </div>
    </Button>
  );

  if (isMobile) {
    return (
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-party-purple/10">
        <div className="flex items-center gap-2 mx-4 my-4">
          <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
            <DrawerTrigger asChild>
              <Button
                className="flex-1 flex items-center border-party-purple/40 shadow-lg shadow-party-purple/20 transition-all hover:shadow-party-purple/40"
                variant="outline"
                onClick={() => setDrawerOpen(true)}
              >
                <Menu className="mr-2 h-4 w-4" />
                Autres jeux
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <div className="px-6 py-6 flex flex-col gap-2">
                <Button
                  variant="ghost"
                  className="flex items-center w-full text-lg py-3 px-3 rounded-lg mb-2 border-2 shadow-sm transition bg-white border-party-pink/40 hover:border-party-pink hover:shadow-md"
                  onClick={() => {
                    setDrawerOpen(false);
                    // Nettoyer les styles potentiellement laissés par le drawer
                    setTimeout(() => {
                      document.body.style.overflow = '';
                      document.body.style.position = '';
                      document.body.style.top = '';
                      document.body.style.left = '';
                      document.body.style.right = '';
                      document.body.style.bottom = '';
                      navigateHome();
                    }, 100);
                  }}
                >
                  <span className="flex-shrink-0 w-7 h-7 flex items-center justify-center mr-2">
                    <img src={catMascot} alt="Mascotte Aperololo" className="w-7 h-7 object-contain" />
                  </span>
                  <span className="text-left font-semibold block text-gray-900">
                    Accueil
                  </span>
                </Button>
                <h2 className="text-xl font-bold mb-1 mt-3">Jeux</h2>
                <div className="flex flex-col gap-2 mt-2">
                  {games.map((game, index) => (
                    <GameButton key={game.titre} game={game} index={index} isSelected={selectedIndex === index} />
                  ))}
                </div>
              </div>
            </DrawerContent>
          </Drawer>
          
          <Button
            variant="outline"
            className="border-party-purple/40 shadow-lg shadow-party-purple/20 transition-all hover:shadow-party-purple/40"
            onClick={handleAuthAction}
          >
            {isAuthenticated ? (
              <>
                <LogOut className="mr-2 h-4 w-4" />
                Déconnexion
              </>
            ) : (
              <>
                <LogIn className="mr-2 h-4 w-4" />
                Connexion
              </>
            )}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <aside className="w-80 bg-white px-8 py-8 flex flex-col">
      <h2 className="text-xl font-bold mb-4">Jeux</h2>
      <div className="flex flex-col mt-2">
        {games.map((game, index) => (
          <GameButton key={game.titre} game={game} index={index} isSelected={selectedIndex === index} />
        ))}
      </div>
    </aside>
  );
};

export default GameSelector;
