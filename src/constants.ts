// Configuration Stripe avec fallback intelligent
const STRIPE_TEST_LINK = "https://buy.stripe.com/test_4gM14p1P98Gja3a6R4bEA00";
const STRIPE_PROD_LINK = "https://buy.stripe.com/4gM14p1P98Gja3a6R4bEA00";

// Détermine l'environnement actuel
const APP_ENV = import.meta.env.VITE_APP_ENV || import.meta.env.MODE;
const isProduction = APP_ENV === 'production';
const isStaging = APP_ENV === 'staging';

// Sélection intelligente du lien Stripe
export const STRIPE_PAYMENT_LINK = (() => {
  // Si une variable d'environnement spécifique est définie, l'utiliser
  if (import.meta.env.VITE_STRIPE_PAYMENT_LINK) {
    return import.meta.env.VITE_STRIPE_PAYMENT_LINK;
  }
  
  // Sinon, utiliser la logique automatique basée sur l'environnement
  if (isProduction && !isStaging) {
    return STRIPE_PROD_LINK;
  } else {
    return STRIPE_TEST_LINK;
  }
})();

// Export de l'environnement pour debug/logging si nécessaire
export const APP_ENVIRONMENT = APP_ENV;
export const IS_PRODUCTION = isProduction;
export const IS_STAGING = isStaging;
