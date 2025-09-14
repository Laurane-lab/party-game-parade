import { STRIPE_PAYMENT_LINK } from "@/constants";

/**
 * Builds the success URL for Stripe payment completion
 * @returns The complete success URL with success parameter
 */
export function buildPaymentSuccessUrl(): string {
  return `${window.location.origin}/payment-success?success=true`;
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
 * @returns The complete Stripe payment URL with encoded success and cancel URLs
 */
export function buildStripeCheckoutUrl(): string {
  const successUrl = buildPaymentSuccessUrl();
  const cancelUrl = buildPaymentCancelUrl();

  return `${STRIPE_PAYMENT_LINK}?success_url=${encodeURIComponent(successUrl)}&cancel_url=${encodeURIComponent(cancelUrl)}`;
}

/**
 * Redirects to the Stripe payment page
 */
export function redirectToPayment(): void {
  window.location.href = buildStripeCheckoutUrl();
}
