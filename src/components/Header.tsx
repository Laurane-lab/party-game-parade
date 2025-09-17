import { useNavigate, useLocation } from "react-router-dom";
import catMascot from "@/assets/New mascot.png";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import { useIsMobile } from "@/hooks/use-mobile";
import { useScrollDirection } from "@/hooks/use-scroll-direction";

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { user, logout } = useAuth();
    const isMobile = useIsMobile();
    const { scrollDirection, isAtTop } = useScrollDirection();

    const handleLogout = async () => {
        await logout();
        navigate('/');
    };

    // Sur mobile, afficher le header uniquement sur la page premium
    const shouldShowHeader = isMobile ? location.pathname === '/premium' : true;
    
    // Sur mobile page premium : gérer l'auto-hide selon la direction du scroll
    const isHeaderVisible = isMobile && location.pathname === '/premium' 
        ? isAtTop || scrollDirection === 'up'
        : true;

    if (!shouldShowHeader) {
        return null;
    }

    return (
        <header className={`${isMobile ? 'flex fixed' : 'hidden md:flex sticky'} top-0 left-0 right-0 z-50 bg-gradient-to-br from-party-pink/20 via-party-orange/10 to-party-blue/20 shadow-md backdrop-blur-sm border-b border-white/10 transition-transform duration-300 ease-in-out ${
            isMobile && !isHeaderVisible ? '-translate-y-full' : 'translate-y-0'
        }`}>
            <div className={`flex items-center justify-between w-full ${isMobile ? 'py-3 px-6' : 'py-2 px-8'}`}>
                <div className="flex items-center gap-4 cursor-pointer" onClick={() => navigate('/')}>
                    <img src={catMascot} alt="Mascotte Aperololo" className={`object-contain ${isMobile ? 'w-8 h-8' : 'w-10 h-10'}`} />
                    <span className={`font-bold text-party-purple ${isMobile ? 'text-xl' : 'text-2xl'}`}>Apérololo</span>
                </div>
                {user ? (
                    location.pathname === '/game-explanation' ? (
                        <Button variant="outline" size={isMobile ? "sm" : "lg"} onClick={handleLogout}>
                            Déconnexion
                        </Button>
                    ) : (
                        <Button variant="outline" size={isMobile ? "sm" : "lg"} onClick={() => navigate('/game-explanation')}>
                            Voir les jeux
                        </Button>
                    )
                ) : (
                    <Button variant="outline" size={isMobile ? "sm" : "lg"} onClick={() => navigate('/connexion')}>
                        Connexion
                    </Button>
                )}
            </div>
        </header>
    );
};

export default Header;
