// Webhook handler pour Stripe
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

// Récupérer les variables d'environnement
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY || 'sk_test_51Ru9x2RzIwS8zqeXQR6uZfaJL4OhgJp8Od2nQhQM7Pznfp6DARyjcbr8OZoQm4TgXxrVBtMNxpPxK3Vde53FOAuN00ruI4lwHb';
const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET || '';

// Configuration Supabase
const SUPABASE_URL = process.env.SUPABASE_URL || '';
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY || '';

// Initialiser Stripe
const stripe = new Stripe(STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
});

// Initialiser Supabase avec la clé de service pour pouvoir mettre à jour les profils
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).end('Method Not Allowed');
  }

  const sig = req.headers['stripe-signature'];
  let event;

  try {
    // Vérifier la signature du webhook si un secret est défini
    if (STRIPE_WEBHOOK_SECRET) {
      const body = await buffer(req);
      event = stripe.webhooks.constructEvent(body, sig, STRIPE_WEBHOOK_SECRET);
    } else {
      // Si pas de secret défini, utiliser directement le body (moins sécurisé, uniquement pour les tests)
      event = req.body;
    }
  } catch (err) {
    console.error(`Erreur de signature du webhook: ${err.message}`);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Gérer les différents types d'événements
  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object;
        
        // Vérifier que le paiement est confirmé
        if (session.payment_status === 'paid') {
          const customerEmail = session.customer_details.email;
          
          // Mettre à jour le statut premium de l'utilisateur dans Supabase
          if (customerEmail) {
            // Trouver l'utilisateur par email
            const { data: userData, error: userError } = await supabase
              .from('profiles')
              .select('id')
              .eq('email', customerEmail)
              .single();

            if (userError || !userData) {
              console.error('Utilisateur non trouvé:', customerEmail);
            } else {
              // Mettre à jour le profil de l'utilisateur
              const { error: updateError } = await supabase
                .from('profiles')
                .update({
                  is_premium: true,
                  payment_date: new Date().toISOString()
                })
                .eq('id', userData.id);

              if (updateError) {
                console.error('Erreur lors de la mise à jour du profil:', updateError);
              } else {
                console.log(`Utilisateur ${customerEmail} mis à jour avec succès avec le statut premium`);
              }
            }
          }
        }
        break;
      }
      // Vous pouvez ajouter d'autres types d'événements ici selon vos besoins
      default:
        console.log(`Type d'événement non géré: ${event.type}`);
    }
    
    // Répondre avec succès
    res.status(200).json({ received: true });
  } catch (err) {
    console.error(`Erreur lors du traitement de l'événement: ${err.message}`);
    res.status(500).json({ error: 'Erreur lors du traitement de l\'événement' });
  }
};

// Fonction pour convertir le corps de la requête en buffer
async function buffer(req) {
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}

// Configuration pour Vercel
export const config = {
  api: {
    bodyParser: false,
  },
};
