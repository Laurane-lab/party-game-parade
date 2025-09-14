import { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/use-auth';

interface ProtectedRouteProps {
  children: ReactNode;
  redirectTo?: string;
}

const ProtectedRoute = ({ children, redirectTo = '/connexion' }: ProtectedRouteProps) => {
  const { user, isAuthLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Only redirect if we're done loading auth and user is not authenticated
    if (!isAuthLoading && !user) {
      // Store the current path to redirect back after login
      sessionStorage.setItem('redirect_after_login', window.location.pathname + window.location.search);
      navigate(redirectTo);
    }
  }, [user, isAuthLoading, navigate, redirectTo]);

  // Show minimal loading state only while checking authentication
  if (isAuthLoading) {
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
  if (!user) {
    return null;
  }

  // If authenticated, render the protected content immediately
  // Premium status and other data can be loaded in the background
  return <>{children}</>;
};

export default ProtectedRoute;
