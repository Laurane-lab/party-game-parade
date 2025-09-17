import { STRIPE_PAYMENT_LINK } from "@/constants";

/**
 * Builds the success URL for Stripe payment completion
 * @returns The complete success URL with success parameter and optional game ID
 */
export function buildPaymentSuccessUrl(): string {
  const baseUrl = `${window.location.origin}/payment?success=true`;

  // Récupérer l'ID du jeu sauvegardé pour redirection après paiement
  const gameId = sessionStorage.getItem('game_id_after_payment');

  if (gameId) {
    return `${baseUrl}&game_id=${encodeURIComponent(gameId)}`;
  }

  return baseUrl;
}

/**
 * Sauvegarde l'ID du jeu actuel pour redirection après paiement
 * @param gameId ID du jeu à sauvegarder
 */
export function saveGameIdForPayment(gameId: string): void {
  sessionStorage.setItem('game_id_after_payment', gameId);
}

/**
 * Builds the cancel URL for Stripe payment cancellation
 * @returns The complete cancel URL with canceled parameter
 */
export function buildPaymentCancelUrl(): string {
  return `${window.location.origin}/premium?canceled=true`;
}

/**
 * Builds the complete Stripe checkout URL with success and cancel URLs
 * Note: With direct payment links, Stripe doesn't support dynamic URL parameters
 * The success and cancel URLs must be configured directly in the Stripe Dashboard
 * @param email Optional email to prefill the payment form
 * @returns The Stripe payment URL
 */
export function buildStripeCheckoutUrl(email?: string): string {
  // Avec un lien de paiement direct, les URLs de succès et d'annulation
  // doivent être configurées directement dans le tableau de bord Stripe
  if (email) {
    return `${STRIPE_PAYMENT_LINK}?prefilled_email=${encodeURIComponent(email)}`;
  }
  return STRIPE_PAYMENT_LINK;
}

/**
 * Redirects to the Stripe payment page after saving current game context
 * @param gameId Optional game ID to save for post-payment redirection
 * @param email Optional email to prefill the payment form
 */
export function redirectToPayment({email, gameId}: {email?: string, gameId?: string}): void {
  // Sauvegarder l'ID du jeu pour redirection après paiement
  if (gameId) {
    saveGameIdForPayment(gameId);
  }

  window.location.href = buildStripeCheckoutUrl(email);
}
