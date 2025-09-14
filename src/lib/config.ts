/**
 * Configuration utility for environment-aware URL detection
 * Handles localhost, GitHub Codespaces, Vercel previews, and production
 */

export const getBaseUrl = (): string => {
  // For SSR or when window is not available
  if (typeof window === 'undefined') {
    // Use environment variable as fallback for server-side
    return import.meta.env.VITE_APP_URL || 'http://localhost:8080';
  }

  // Use window.location.origin for client-side (most reliable)
  return window.location.origin;
};

/**
 * Get the OAuth redirect URL for Supabase
 * This handles all environments automatically
 */
export const getOAuthRedirectUrl = (): string => {
  const baseUrl = getBaseUrl();
  return `${baseUrl}/connexion`;
};

/**
 * Check if we're running in development mode
 */
export const isDevelopment = (): boolean => {
  return import.meta.env.DEV;
};

/**
 * Check if we're running in GitHub Codespaces
 */
export const isCodespaces = (): boolean => {
  if (typeof window === 'undefined') {
    return false;
  }
  return window.location.hostname.includes('app.github.dev');
};

/**
 * Check if we're running on localhost
 */
export const isLocalhost = (): boolean => {
  if (typeof window === 'undefined') {
    return false;
  }
  return window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
};

/**
 * Check if we're running in production
 */
export const isProduction = (): boolean => {
  return import.meta.env.PROD && !isCodespaces();
};

/**
 * Get environment type as string for debugging
 */
export const getEnvironmentType = (): string => {
  if (isProduction()) return 'production';
  if (isCodespaces()) return 'codespaces';
  if (isLocalhost()) return 'localhost';
  return 'unknown';
};