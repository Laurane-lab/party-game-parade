import Stripe from 'stripe';

/*
 * REMARQUE IMPORTANTE:
 * Actuellement, l'application utilise un lien de paiement direct Stripe (https://buy.stripe.com/4gM14p1P98Gja3a6R4bEA00)
 * et non l'API Stripe pour créer des sessions de paiement.
 * 
 * Ce fichier contient néanmoins les clés API de test et les fonctions qui pourront être utilisées
 * pour une intégration plus poussée avec l'API Stripe dans le futur.
 */

// Configuration pour l'environnement de test Stripe
const STRIPE_TEST_PUBLISHABLE_KEY = 'pk_test_51Ru9x2RzIwS8zqeXRFKorhxLccdG5IBXkCBvt0vMRZaZihy2mEPMv929jkiGIMGL737ug2a5LWzgeOdKDMi57OHc00qDJFtLO0';
const STRIPE_TEST_SECRET_KEY = 'sk_test_51Ru9x2RzIwS8zqeXQR6uZfaJL4OhgJp8Od2nQhQM7Pznfp6DARyjcbr8OZoQm4TgXxrVBtMNxpPxK3Vde53FOAuN00ruI4lwHb';

// Configuration pour l'environnement de production Stripe (à remplacer avec vos clés de production)
const STRIPE_PROD_PUBLISHABLE_KEY = '';
const STRIPE_PROD_SECRET_KEY = '';

// Détermine si l'application est en mode production ou test
const isProduction = import.meta.env.MODE === 'production';

// Choix des clés en fonction de l'environnement
export const STRIPE_PUBLISHABLE_KEY = isProduction ? STRIPE_PROD_PUBLISHABLE_KEY : STRIPE_TEST_PUBLISHABLE_KEY;
export const STRIPE_SECRET_KEY = isProduction ? STRIPE_PROD_SECRET_KEY : STRIPE_TEST_SECRET_KEY;

// Prix du produit premium (en centimes)
export const PREMIUM_PRICE_ID = isProduction ? 'price_xxx_prod' : 'price_xxx_test'; // À remplacer par vos IDs de prix réels
export const PREMIUM_PRICE_AMOUNT = 499; // 4.99€

// URL de paiement direct Stripe
export const STRIPE_PAYMENT_LINK = 'https://buy.stripe.com/4gM14p1P98Gja3a6R4bEA00';

// Initialisation de l'instance Stripe
const stripe = new Stripe(STRIPE_SECRET_KEY, {
  apiVersion: '2025-08-27.basil', // Utilisez la version la plus récente de l'API Stripe compatible
});

/**
 * Crée une session de paiement Stripe
 * @param customerEmail Email du client
 * @returns URL de redirection vers la page de paiement Stripe
 * 
 * Note: Cette fonction n'est actuellement pas utilisée car l'application
 * utilise un lien de paiement direct, mais elle est laissée ici pour référence future.
 */
export const createCheckoutSession = async (customerEmail: string) => {
  try {
    const successUrl = `${window.location.origin}/payment-success?success=true`;
    const cancelUrl = `${window.location.origin}/to-go-premium?canceled=true`;
    
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: 'Abonnement Party Game Parade Premium',
              description: 'Accès à tous les jeux premium',
            },
            unit_amount: PREMIUM_PRICE_AMOUNT,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: successUrl,
      cancel_url: cancelUrl,
      customer_email: customerEmail,
    });

    return session.url;
  } catch (error) {
    console.error('Erreur lors de la création de la session de checkout:', error);
    throw error;
  }
};

/**
 * Vérifie la validité d'une session de paiement
 * @param sessionId ID de la session Stripe
 * @returns Données de la session si valide
 */
export const verifyPaymentSession = async (sessionId: string) => {
  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    return session;
  } catch (error) {
    console.error('Erreur lors de la vérification de la session:', error);
    throw error;
  }
};

// Exporte l'instance Stripe pour utilisation directe si nécessaire
export default stripe;
