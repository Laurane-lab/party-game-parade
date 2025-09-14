import { useNavigate, useLocation } from "react-router-dom";
import catMascot from "@/assets/New mascot.png";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { session, logout } = useAuth();

    const handleLogout = async () => {
        await logout();
        navigate('/');
    };

    return (
        <header className="hidden md:flex sticky top-0 z-50 bg-gradient-to-br from-party-pink/20 via-party-orange/10 to-party-blue/20 shadow-md backdrop-blur-sm">
            <div className="flex items-center justify-between py-2 w-full px-8">
                <div className="flex items-center gap-4 cursor-pointer" onClick={() => navigate('/')}>
                    <img src={catMascot} alt="Mascotte Aperololo" className="w-10 h-10 object-contain" />
                    <span className="text-2xl font-bold text-party-purple">Apérololo</span>
                </div>
                {session ? (
                    location.pathname === '/game-explanation' ? (
                        <Button variant="outline" size="lg" onClick={handleLogout}>
                            Déconnexion
                        </Button>
                    ) : (
                        <Button variant="outline" size="lg" onClick={() => navigate('/game-explanation')}>
                            Voir les jeux
                        </Button>
                    )
                ) : (
                    <Button variant="outline" size="lg" onClick={() => navigate('/connexion')}>
                        Connexion
                    </Button>
                )}
            </div>
        </header>
    );
};

export default Header;
