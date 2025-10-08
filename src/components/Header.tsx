import { useNavigate, useLocation } from "react-router-dom";
import catMascot from "@/assets/New mascot.png";
import { useAuth } from "@/hooks/use-auth";
import { useIsMobile } from "@/hooks/use-mobile";
import { useScrollDirection } from "@/hooks/use-scroll-direction";
import ProfileButton from "@/components/ProfileButton";

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

    // Sur mobile, afficher le header sur la page premium et la page d'accueil
    const shouldShowHeader = isMobile ? (location.pathname === '/premium' || location.pathname === '/') : true;
    
    // Sur mobile page premium : gérer l'auto-hide selon la direction du scroll
    const isHeaderVisible = isMobile && location.pathname === '/premium' 
        ? isAtTop || scrollDirection === 'up'
        : true;

    if (!shouldShowHeader) {
        return null;
    }

    return (
        <header className={`${isMobile ? 'flex fixed' : (location.pathname === '/' || location.pathname === '/indexbis' ? 'hidden md:flex relative' : 'hidden md:flex sticky')} top-0 left-0 right-0 z-50 ${location.pathname === '/' || location.pathname === '/indexbis' ? 'bg-white' : 'bg-gradient-to-br from-party-pink/20 via-party-orange/10 to-party-blue/20'} ${location.pathname === '/' || location.pathname === '/indexbis' ? '' : 'shadow-md'} backdrop-blur-sm border-b border-white/10 transition-transform duration-300 ease-in-out ${
            isMobile && !isHeaderVisible ? '-translate-y-full' : 'translate-y-0'
        }`}>
            <div className={`flex items-center justify-between w-full ${isMobile ? 'py-3 px-6' : 'py-4 px-8'}`}>
                <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
                    <img src={catMascot} alt="Mascotte Aperololo" className="w-10 h-10 object-contain" />
                    <span className={`font-bold bg-gradient-to-r from-party-pink to-party-orange bg-clip-text text-transparent ${isMobile ? 'text-xl' : 'text-2xl'}`}>
                        Apérololo
                    </span>
                </div>
                <ProfileButton 
                    size={isMobile ? "sm" : "lg"} 
                    onLogout={handleLogout}
                />
            </div>
        </header>
    );
};

export default Header;
