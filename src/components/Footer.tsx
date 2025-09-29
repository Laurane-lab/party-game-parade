import { Button } from "@/components/ui/button";
import mascot from "@/assets/New mascot.png";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full bg-party-blue/30 text-black border-t border-party-pink/30 px-8 md:px-16">
      <div className="max-w-7xl mx-auto px-3 py-5 flex flex-col md:flex-row justify-between items-start gap-5">
        {/* Left: Logo, name, description, social, back to top */}
        <div className="flex-1 min-w-[220px] flex flex-col gap-4">
          <div className="flex items-center gap-2 mb-1">
            <img src={mascot} alt="Logo Party Game Parade" className="w-6 h-6 rounded-full bg-white p-0.5" />
            <a href="/" className="text-lg font-bold tracking-wide text-primary hover:underline">Apérololo</a>
          </div>
          <div className="flex flex-col items-start">
            <p className="text-xs text-black max-w-xs mb-1" id="footer-desc">
              Des jeux originaux pour animer tes soirées, apéros et week-ends entre amis ou en famille.
            </p>
            <div className="flex gap-2 mb-2">
              <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram" className="hover:text-party-pink text-black"><i className="fa-brands fa-instagram text-base" /></a>
              <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook" className="hover:text-party-pink text-black"><i className="fa-brands fa-facebook text-base" /></a>
            </div>
            <Button
              onClick={scrollToTop}
              className="mb-4 underline hover:no-underline pl-0"
              variant="ghost"
            >
              Haut de page
            </Button>
          </div>
        </div>
        {/* Right: Links - 2 colonnes sur mobile */}
        <div className="flex-1 min-w-[120px] flex flex-row gap-4 justify-end">
          <div className="mb-0 flex-1">
            <h4 className="font-bold mb-1 text-base text-primary">Contact</h4>
            <a href="mailto:lauraneboullay@gmail.com" className="block text-black hover:text-party-pink mb-0.5 text-xs underline">Email</a>
          </div>
          <div className="flex-1">
            <h4 className="font-bold mb-1 text-base text-primary">Légal</h4>
            <a href="/cgv-cgu" className="block text-black hover:text-party-pink mb-0.5 text-xs">CGV & CGU</a>
            <a href="/politique-de-confidentialite" className="block text-black hover:text-party-pink mb-0.5 text-xs">Politique de confidentialité</a>
            <a href="/mentions-legales" className="block text-black hover:text-party-pink text-xs">Mentions légales</a>
          </div>
        </div>
      </div>
      <div className="w-full text-black text-[10px] py-1 text-center">
        © 2025 Apérololo. Tous droits réservés.<br />
        <a href="https://www.flaticon.com/free-icons/magic" title="magic icons" target="_blank" rel="noopener noreferrer" className="underline hover:text-party-purple">
          Magic icons created by Icongeek26 - Flaticon
        </a>
      </div>
    </footer>
  );
};

export default Footer;
