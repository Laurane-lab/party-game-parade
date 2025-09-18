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
    console.error('❌ Method not allowed:', req.method);
    return res.status(405).end('Method Not Allowed');
  }
  let event;

  try {
    console.warn('--- Construction de l\'événement ---');
    // Vérifier la signature du webhook si un secret est défini
    if (STRIPE_WEBHOOK_SECRET) {
      console.warn('✓ Utilisation du webhook secret pour valider la signature');
      const body = await buffer(req);
      const sig = req.headers['stripe-signature'];
      console.warn('✓ Body récupéré, taille:', body.length, 'bytes');
      event = stripe.webhooks.constructEvent(body, sig, STRIPE_WEBHOOK_SECRET);
      console.warn('✓ Signature validée avec succès');
    } else {
      console.warn('⚠️  Pas de webhook secret - utilisation directe du body (mode test)');
      event = req.body;
    }

    console.warn('✓ Événement construit:', {
      id: event.id,
      type: event.type,
      created: new Date(event.created * 1000).toISOString(),
      livemode: event.livemode
    });
  } catch (err) {
    console.error('❌ Erreur de signature du webhook:', {
      message: err.message,
      type: err.type,
      headers: req.headers
    });
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Gérer les différents types d'événements
  try {
    switch (event.type) {
      case 'payment_intent.succeeded': {
        console.warn('\n--- TRAITEMENT PAYMENT_INTENT.SUCCEEDED (Payment Link) ---');
        const paymentIntent = event.data.object;

        // Log détaillé du payment intent
        console.warn('Payment Intent complet:', {
          id: paymentIntent.id,
          status: paymentIntent.status,
          amount: paymentIntent.amount,
          currency: paymentIntent.currency,
          customer: paymentIntent.customer,
          receipt_email: paymentIntent.receipt_email,
          metadata: paymentIntent.metadata
        });

        // Vérifier que le paiement est confirmé
        console.warn('Vérification du statut de paiement:', paymentIntent.status);
        if (paymentIntent.status === 'succeeded') {
          console.warn('✓ Paiement confirmé via Payment Link');

          // Extraire l'email du payment intent
          const customerEmail = paymentIntent.receipt_email;
          console.warn('Email extrait du Payment Intent:', customerEmail);

          if (customerEmail) {
            // Utiliser le même code que pour checkout.session.completed
            console.warn(`✓ Email trouvé: ${customerEmail}`);
            console.warn('Recherche de l\'utilisateur dans Supabase...');

            // Trouver l'utilisateur par email
            const { data: userData, error: userError } = await supabase
              .from('profiles')
              .select('user_id, email, is_premium, created_at')
              .eq('email', customerEmail)
              .single();

            if (userError || !userData) {
              console.error('❌ Utilisateur non trouvé:', {
                searched_email: customerEmail,
                supabase_error: userError
              });
            } else {
              console.warn(`✓ Utilisateur trouvé:`, userData);

              // Mettre à jour le profil de l'utilisateur
              const updateData = {
                is_premium: true,
                payment_date: new Date().toISOString()
              };

              const { data: updateResult, error: updateError } = await supabase
                .from('profiles')
                .update(updateData)
                .eq('user_id', userData.user_id)
                .select();

              if (updateError) {
                console.error('❌ Erreur lors de la mise à jour du profil:', updateError);
              } else {
                console.warn('✅ Utilisateur mis à jour avec succès (Payment Link):', {
                  email: customerEmail,
                  user_id: userData.user_id,
                  updated_data: updateResult
                });
              }
            }
          } else {
            console.error('❌ Pas d\'email trouvé dans le Payment Intent:', {
              payment_intent_id: paymentIntent.id,
              receipt_email: paymentIntent.receipt_email
            });
          }
        } else {
          console.warn('⚠️  Paiement non confirmé, statut:', paymentIntent.status);
        }
        break;
      }

      case 'checkout.session.completed': {
        console.warn('\n--- TRAITEMENT CHECKOUT.SESSION.COMPLETED ---');
        const session = event.data.object;

        // Log détaillé de la session
        console.warn('Session complète:', {
          id: session.id,
          payment_status: session.payment_status,
          amount_total: session.amount_total,
          currency: session.currency,
          customer: session.customer,
          customer_email: session.customer_email,
          customer_details: session.customer_details,
          mode: session.mode,
          status: session.status
        });

        // Vérifier que le paiement est confirmé
        console.warn('Vérification du statut de paiement:', session.payment_status);
        if (session.payment_status === 'paid') {
          console.warn('✓ Paiement confirmé');

          // Extraire l'email de différentes sources possibles
          const customerEmail = session.customer_details?.email || session.customer_email;
          console.warn('Email extrait:', {
            customer_details_email: session.customer_details?.email,
            customer_email: session.customer_email,
            final_email: customerEmail
          });

          // Mettre à jour le statut premium de l'utilisateur dans Supabase
          if (customerEmail) {
            console.warn(`✓ Email trouvé: ${customerEmail}`);
            console.warn('Recherche de l\'utilisateur dans Supabase...');

            // Debugging détaillé de l'email
            console.warn('Analyse détaillée de l\'email:');
            console.warn(`- Email brut: "${customerEmail}"`);
            console.warn(`- Email length: ${customerEmail.length}`);
            console.warn(`- Email toLowerCase: "${customerEmail.toLowerCase()}"`);
            console.warn(`- Email trim: "${customerEmail.trim()}"`);
            console.warn('- Character codes:', Array.from(customerEmail).map(c => c.charCodeAt(0)));

            // Test de connexion Supabase d'abord
            console.warn('Test de connexion Supabase...');
            const { data: connectionTest, error: connectionError } = await supabase
              .from('profiles')
              .select('count', { count: 'exact', head: true });

            console.warn('Résultat du test de connexion:', {
              connected: !connectionError,
              total_profiles: connectionTest || 'N/A',
              error: connectionError
            });

            // Trouver l'utilisateur par email (requête exacte)
            console.warn('Exécution de la requête exacte:', {
              table: 'profiles',
              select: 'id, email, is_premium, created_at',
              filter: `email = '${customerEmail}'`
            });

            const { data: userData, error: userError } = await supabase
              .from('profiles')
              .select('user_id, email, is_premium, created_at')
              .eq('email', customerEmail)
              .single();

            // Essayer aussi avec des variations de l'email
            console.warn('Test avec email en minuscules...');
            const { data: userDataLower, error: userErrorLower } = await supabase
              .from('profiles')
              .select('user_id, email, is_premium, created_at')
              .eq('email', customerEmail.toLowerCase())
              .single();

            console.warn('Test avec email trimé...');
            const { data: userDataTrim, error: userErrorTrim } = await supabase
              .from('profiles')
              .select('user_id, email, is_premium, created_at')
              .eq('email', customerEmail.trim())
              .single();

            // Recherche fuzzy pour voir ce qui existe réellement
            console.warn('Recherche de tous les emails dans la base...');
            const { data: allEmails, error: allEmailsError } = await supabase
              .from('profiles')
              .select('email')
              .limit(50);

            console.warn('Emails dans la base:', {
              emails: allEmails?.map(u => `"${u.email}"`),
              error: allEmailsError
            });

            console.warn('Résultats des requêtes utilisateur:');
            console.warn('- Requête exacte - Data:', userData, 'Error:', userError);
            console.warn('- Requête minuscules - Data:', userDataLower, 'Error:', userErrorLower);
            console.warn('- Requête trimée - Data:', userDataTrim, 'Error:', userErrorTrim);

            // Vérifions aussi si il existe des utilisateurs avec des emails similaires
            console.warn('Vérification des emails similaires...');
            const { data: similarUsers, error: similarError } = await supabase
              .from('profiles')
              .select('email')
              .ilike('email', `%${customerEmail.split('@')[0]}%`);

            console.warn('Utilisateurs avec des emails similaires:', {
              data: similarUsers,
              error: similarError,
              count: similarUsers?.length || 0
            });

            // Utiliser les données trouvées par une des variations
            const finalUserData = userData || userDataLower || userDataTrim;
            const finalUserError = userData ? userError : (userDataLower ? userErrorLower : userErrorTrim);

            if (finalUserError || !finalUserData) {
              console.error('❌ Utilisateur non trouvé:', {
                searched_email: customerEmail,
                supabase_error_exact: userError,
                supabase_error_lower: userErrorLower,
                supabase_error_trim: userErrorTrim,
                user_data_exact: userData,
                user_data_lower: userDataLower,
                user_data_trim: userDataTrim,
                similar_users_found: similarUsers?.length || 0,
                event_livemode: event.livemode,
                all_emails_in_db: allEmails?.length || 0
              });

              // En mode test, proposer des solutions
              if (!event.livemode) {
                console.warn('🧪 MODE TEST DÉTECTÉ - Solutions possibles:');
                console.warn('1. Utilisez votre vraie adresse email dans le checkout Stripe test');
                console.warn('2. Créez un utilisateur test dans votre base avec l\'email:', customerEmail);
                console.warn('3. Implémentez une logique de fallback pour le mode test');
              }

              // Essayons aussi de vérifier le nombre total d'utilisateurs
              const { count, error: countError } = await supabase
                .from('profiles')
                .select('*', { count: 'exact', head: true });

              console.warn('Nombre total d\'utilisateurs dans la base:', {
                count: count,
                error: countError
              });

            } else {
              const matchType = userData ? 'exact' : (userDataLower ? 'lowercase' : 'trimmed');
              console.warn(`✓ Utilisateur trouvé (${matchType}):`, {
                user_id: finalUserData.user_id,
                email: finalUserData.email,
                current_premium_status: finalUserData.is_premium,
                created_at: finalUserData.created_at,
                match_type: matchType
              });

              // Mettre à jour le profil de l'utilisateur
              console.warn('Mise à jour du statut premium...');
              const updateData = {
                is_premium: true,
                payment_date: new Date().toISOString()
              };
              console.warn('Données de mise à jour:', updateData);

              const { data: updateResult, error: updateError } = await supabase
                .from('profiles')
                .update(updateData)
                .eq('user_id', finalUserData.user_id)
                .select(); // Pour récupérer les données mises à jour

              if (updateError) {
                console.error('❌ Erreur lors de la mise à jour du profil:', {
                  error: updateError,
                  user_id: finalUserData.user_id,
                  update_data: updateData
                });
              } else {
                console.warn('✅ Utilisateur mis à jour avec succès:', {
                  email: customerEmail,
                  user_id: finalUserData.user_id,
                  updated_data: updateResult,
                  match_type: matchType,
                  message: `Utilisateur ${customerEmail} mis à jour avec succès avec le statut premium`
                });
              }
            }
          } else {
            console.error('❌ Pas d\'email trouvé dans la session:', {
              session_id: session.id,
              customer_details: session.customer_details,
              customer_email: session.customer_email
            });
          }
        } else {
          console.warn('⚠️  Paiement non confirmé, statut:', session.payment_status);
        }
        break;
      }
      // Vous pouvez ajouter d'autres types d'événements ici selon vos besoins
      default:
        console.warn(`⚠️  Type d'événement non géré: ${event.type}`);
        console.warn('Événement complet:', JSON.stringify(event, null, 2));
    }

    // Répondre avec succès
    console.warn('\n✅ Webhook traité avec succès');
    console.warn('=== FIN DU TRAITEMENT WEBHOOK ===\n');
    res.status(200).json({ received: true });
  } catch (err) {
    console.error('\n❌ ERREUR LORS DU TRAITEMENT DE L\'ÉVÉNEMENT:');
    console.error('- Message:', err.message);
    console.error('- Stack:', err.stack);
    console.error('- Event type:', event?.type);
    console.error('- Event ID:', event?.id);
    console.warn('=== FIN DU TRAITEMENT WEBHOOK (ERREUR) ===\n');
    res.status(500).json({ error: 'Erreur lors du traitement de l\'événement', details: err.message });
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
