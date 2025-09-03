
import mascot from "@/assets/New mascot.png";

const Footer: React.FC = () => (
  <footer className="w-full bg-party-blue/30 text-black mt-8 border-t border-party-pink/30 px-8 md:px-16">
    <div className="max-w-7xl mx-auto px-3 py-5 flex flex-col md:flex-row justify-between items-start gap-5">
      {/* Left: Logo, name, description, social, back to top */}
      <div className="flex-1 min-w-[220px] flex flex-col gap-4">
        <div className="flex items-center gap-2 mb-1">
          <img src={mascot} alt="Logo Party Game Parade" className="w-6 h-6 rounded-full bg-white p-0.5" />
          <span className="text-lg font-bold tracking-wide text-party-yellow">Apérololo</span>
        </div>
        <div className="flex flex-col items-start">
          <p className="text-xs text-black max-w-xs mb-1" id="footer-desc">
            Des jeux originaux pour animer vos soirées, apéros et week-ends entre amis ou en famille.
          </p>
          <div className="flex gap-2 mb-2">
            <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram" className="hover:text-party-pink text-black"><i className="fa-brands fa-instagram text-base" /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook" className="hover:text-party-pink text-black"><i className="fa-brands fa-facebook text-base" /></a>
          </div>
          <button
            className="mt-1 px-2 py-1 border border-black rounded bg-party-yellow/10 text-black text-xs font-semibold hover:bg-party-yellow/20 transition"
            style={{ width: '25%' }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            ↑ Haut de page
          </button>
        </div>
      </div>
      {/* Right: Links */}
      <div className="flex-1 min-w-[120px] flex flex-col md:flex-row gap-5 justify-end">
        <div className="mb-3 md:mb-0">
          <h4 className="font-bold mb-1 text-base text-party-yellow">Contact</h4>
            <a href="mailto:lauraneboullay@gmail.com" className="block text-black hover:text-party-pink mb-0.5 text-xs underline">Email</a>
        </div>
        <div>
          <h4 className="font-bold mb-1 text-base text-party-yellow">Légal</h4>
          <a href="/cgv-cgu" className="block text-black hover:text-party-pink mb-0.5 text-xs">CGV & CGU</a>
          <a href="/mentions-legales" className="block text-black hover:text-party-pink text-xs">Mentions légales</a>
        </div>
      </div>
    </div>
    <div className="w-full bg-party-yellow/90 text-black text-[10px] py-1 text-center">
      © 2025 Apérololo. Tous droits réservés.
    </div>
  </footer>
);

export default Footer;
