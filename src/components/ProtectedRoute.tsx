import { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

interface ProtectedRouteProps {
  children: ReactNode;
  redirectTo?: string;
}

const ProtectedRoute = ({ children, redirectTo = '/connexion' }: ProtectedRouteProps) => {
  const { session, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !session) {
      // Store the current path to redirect back after login
      sessionStorage.setItem('redirect_after_login', window.location.pathname + window.location.search);
      navigate(redirectTo);
    }
  }, [session, loading, navigate, redirectTo]);

  // Show loading state while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-party-purple mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement...</p>
        </div>
      </div>
    );
  }

  // If not authenticated, return null (navigation will happen in useEffect)
  if (!session) {
    return null;
  }

  // If authenticated, render the protected content
  return <>{children}</>;
};

export default ProtectedRoute;
