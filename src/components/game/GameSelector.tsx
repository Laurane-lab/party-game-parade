import { useState } from "react";
import { Game } from "@/data/games";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerTrigger, DrawerContent } from "@/components/ui/drawer";
import { Menu } from "lucide-react";
import catMascot from "@/assets/New mascot.png";
import { gameIconMapping } from "./assets";

interface GameSelectorProps {
  games: Game[];
  selectedIndex: number;
  onSelect: (index: number) => void;
  isMobile: boolean;
  navigateHome: () => void;
}

const GameSelector = ({ games, selectedIndex, onSelect, isMobile, navigateHome }: GameSelectorProps) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const gameIcons = games.map(g => gameIconMapping[g.icon]);

  const GameButton = ({ game, index, isSelected }: { game: Game; index: number; isSelected: boolean }) => (
    <Button
      variant="ghost"
      className={`flex items-center w-full text-lg py-3 px-3 rounded-lg mb-0 border-2 shadow-sm transition
				${isSelected
          ? "bg-party-purple border-party-purple"
          : "bg-white border-party-purple/40 hover:border-party-purple hover:shadow-md"}
			`}
      onClick={() => {
        if (isMobile) setDrawerOpen(false);
        onSelect(index);
      }}
    >
      <span className="flex-shrink-0 w-7 h-7 flex items-center justify-center mr-2">
        <img src={gameIcons[index]} alt={`Icone jeu ${game.titre}`} className="w-7 h-7 object-contain" />
      </span>
      <div className="flex items-center justify-between flex-grow overflow-hidden">
        <span
          className={`text-left font-semibold block overflow-hidden text-ellipsis whitespace-nowrap
						${isSelected ? "text-grey" : "text-party-purple"}
					`}
          title={game.titre}
        >
          {game.titre}
        </span>
        {!game.is_premium && (
          <span className="ml-4 px-1 bg-green-200 text-green-800 rounded-sm text-[10px] font-bold">
            GRATUIT
          </span>
        )}
      </div>
    </Button>
  );

  if (isMobile) {
    return (
      <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
        <DrawerTrigger asChild>
          <Button
            className="mx-4 my-4 flex items-center border-party-purple/40 shadow-lg shadow-party-purple/20 transition-all hover:shadow-party-purple/40"
            variant="outline"
            onClick={() => setDrawerOpen(true)}
          >
            <Menu className="mr-2 h-4 w-4" />
            Menu
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="px-6 py-6 flex flex-col gap-2">
            <Button
              variant="ghost"
              className="flex items-center w-full text-lg py-3 px-3 rounded-lg mb-2 border-2 shadow-sm transition bg-white border-party-pink/40 hover:border-party-pink hover:shadow-md"
              onClick={() => {
                setDrawerOpen(false);
                navigateHome();
              }}
            >
              <span className="flex-shrink-0 w-7 h-7 flex items-center justify-center mr-2">
                <img src={catMascot} alt="Mascotte Aperololo" className="w-7 h-7 object-contain" />
              </span>
              <span className="text-left font-semibold block text-party-purple">
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
    );
  }

  return (
    <aside className="w-80 bg-white px-8 py-8 flex flex-col gap-2">
      <h2 className="text-xl font-bold mb-1">Jeux</h2>
      <div className="flex flex-col gap-2 mt-2">
        {games.map((game, index) => (
          <GameButton key={game.titre} game={game} index={index} isSelected={selectedIndex === index} />
        ))}
      </div>
    </aside>
  );
};

export default GameSelector;
