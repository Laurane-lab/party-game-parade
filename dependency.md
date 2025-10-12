
# Architecture de l'Application "Party Game Parade"

Ce document détaille l'architecture de l'application web "Party Game Parade", une plateforme de jeux de soirée. Il décrit les principaux composants, les flux de données et les interactions entre les différentes parties du site.

## 1. Vue d'ensemble

L'application est construite avec **React** et **Vite**, en utilisant **TypeScript**. Le routage est géré par `react-router-dom`. L'interface utilisateur est basée sur la bibliothèque de composants **ShadCN/UI**, et le style est géré avec **Tailwind CSS**.

Le backend et la base de données sont fournis par **Supabase**, qui gère l'authentification des utilisateurs, le stockage des données (profils, etc.) et les fonctions serverless. Les paiements pour l'offre premium sont gérés par **Stripe**.

## 2. Structure du Projet

Le code source principal se trouve dans le dossier `src/`.

```
src/
├── App.tsx           # Point d'entrée principal et routage
├── pages/            # Vues principales de l'application (une par route)
├── components/       # Composants React réutilisables
│   ├── ui/           # Composants génériques (ShadCN/UI)
│   └── game/         # Composants spécifiques à l'affichage des jeux
├── lib/              # Logique métier et clients externes
├── hooks/            # Hooks React personnalisés
├── data/             # Données statiques (jeux)
├── assets/           # Images et autres ressources
└── css/              # Styles globaux
```

## 3. Point d'Entrée et Routage (`App.tsx`)

Le fichier `src/App.tsx` est le composant racine de l'application. Il initialise le routeur (`react-router-dom`) et définit les différentes routes de l'application. Chaque route est associée à un composant de page situé dans `src/pages/`.

Certaines routes sont protégées et ne sont accessibles qu'aux utilisateurs connectés, grâce au composant `ProtectedRoute`.

## 4. Pages (`src/pages/`)

Les pages sont les vues principales de l'application, correspondant chacune à une URL.

- **`Index.tsx`**: La page d'accueil. Elle affiche la liste des jeux disponibles, probablement en utilisant le composant `GameCard` pour chaque jeu. Les données des jeux proviennent de `src/data/games.ts`.
- **`GamePreview.tsx`**: Affiche un aperçu d'un jeu spécifique. Cette page est probablement liée depuis `Index.tsx`. Elle utilise des composants de `src/components/game/` pour afficher les détails.
- **`GameExplanation.tsx`**: Fournit une explication détaillée d'un jeu, accessible depuis `GamePreview.tsx`. C'est ici que les utilisateurs peuvent décider de jouer.
- **`Connexion.tsx`**: Page de connexion et d'inscription. Elle interagit avec Supabase via le hook `use-auth.ts` et la librairie `src/lib/supabase.ts`.
- **`Profil.tsx`**: Page de profil utilisateur. Affiche les informations de l'utilisateur et permet la déconnexion. Elle utilise `src/lib/profile.ts` pour récupérer et mettre à jour les données du profil.
- **`Premium.tsx`**: Page de présentation de l'offre premium.
- **`Payment.tsx`**: Gère le processus de paiement pour l'abonnement premium, en utilisant la logique de `src/lib/payment.ts` qui communique avec Stripe.
- **`CGVCGU.tsx`**, **`MentionsLegales.tsx`**, **`PrivacyPolicy.tsx`**: Pages affichant du contenu légal statique. Le contenu est importé depuis les fichiers Markdown dans `src/content/`.

## 5. Composants (`src/components/`)

Les composants sont des éléments d'interface réutilisables.

- **`Header.tsx` / `Footer.tsx`**: Présents sur la plupart des pages, ils assurent une navigation cohérente. Le `Header` contient probablement le `ProfileButton` pour l'accès au profil et à la connexion.
- **`game/`**:
    - `GameCard.tsx`: Carte de présentation d'un jeu sur la page d'accueil.
    - `GameHero.tsx`: Section principale de la page d'un jeu.
    - `GamePaywallView.tsx`: Affiche un message incitant à passer premium si le jeu n'est pas gratuit.
- **`ui/`**: Composants de base de l'interface (boutons, boîtes de dialogue, etc.), provenant de la bibliothèque ShadCN/UI.

## 6. Logique Métier et Services (`src/lib/`)

Cette section contient la logique principale qui n'est pas directement liée à l'interface utilisateur.

- **`supabase.ts`**: Initialise et exporte le client Supabase. C'est le point de contact central pour toutes les interactions avec la base de données et l'authentification.
- **`auth.ts` (dans `hooks`)**: Le hook `use-auth.ts` encapsule la logique d'authentification de Supabase, permettant de récupérer l'état de connexion de l'utilisateur dans toute l'application.
- **`profile.ts`**: Fonctions pour gérer le profil utilisateur (récupération, mise à jour).
- **`payment.ts`**: Logique de paiement avec Stripe. Contient probablement des fonctions pour créer une session de paiement et rediriger l'utilisateur vers Stripe.
- **`config.ts`**: Fichier de configuration pour les variables d'environnement et autres constantes.

## 7. Hooks Personnalisés (`src/hooks/`)

Les hooks permettent de partager de la logique stateful entre les composants.

- **`use-auth.ts`**: Fournit l'état de l'utilisateur (`session`, `user`) et des fonctions pour se connecter/déconnecter.
- **`use-premium.ts`**: Détermine si l'utilisateur actuel a un abonnement premium actif, probablement en vérifiant une information dans le profil utilisateur récupéré via Supabase.
- **`use-mobile.tsx`**: Détecte si l'application est affichée sur un appareil mobile.

## 8. Données (`src/data/`)

- **`games.ts`**: Fichier central contenant un tableau d'objets, où chaque objet représente un jeu avec ses propriétés (nom, description, règles, statut premium, etc.). C'est la source de données principale pour le contenu des jeux.

## 9. Flux de Données et Interactions

1.  **Affichage des jeux**:
    - `Index.tsx` lit les données de `src/data/games.ts`.
    - Il mappe sur ces données pour afficher une liste de `GameCard`.
    - Un clic sur une `GameCard` navigue vers `GamePreview.tsx` avec l'ID du jeu.

2.  **Authentification**:
    - L'utilisateur remplit le formulaire dans `Connexion.tsx`.
    - Le hook `use-auth.ts` appelle les fonctions d'authentification de `src/lib/supabase.ts`.
    - Une fois connecté, l'état de l'utilisateur est disponible globalement, et les `ProtectedRoute` débloquent l'accès à des pages comme `Profil.tsx`.

3.  **Accès Premium**:
    - Un utilisateur clique sur un contenu premium (par exemple, un jeu).
    - Le composant `GamePaywallView.tsx` utilise le hook `use-premium.ts` pour vérifier le statut de l'utilisateur.
    - Si l'utilisateur n'est pas premium, il est redirigé vers `Premium.tsx` ou une boîte de dialogue de paiement s'affiche.
    - Le processus de paiement dans `Payment.tsx` communique avec Stripe via `src/lib/payment.ts` et une fonction serverless (probablement dans `api/webhook.js`) pour confirmer le paiement et mettre à jour le profil utilisateur dans Supabase.

Ce document offre une vue d'ensemble de l'architecture. Pour des détails plus spécifiques, il est recommandé de consulter le code de chaque composant ou librairie.

## 10. Arbre des Dépendances et Interactions

Voici une représentation visuelle de la manière dont les principaux fichiers et dossiers interagissent entre eux.

```
src/
|
├── App.tsx  (Point d'entrée, gère le routage vers les pages)
|   |
|   └── pages/
|       |
|       ├── Index.tsx (Page d'accueil)
|       |   ├───> components/game/GameCard.tsx (Affiche chaque jeu)
|       |   |     └───> data/games.ts (Source des données des jeux)
|       |   |
|       |   └───> components/Header.tsx
|       |
|       ├── GamePreview.tsx (Aperçu d'un jeu, utilise les données de games.ts)
|       |   ├───> components/game/GameHero.tsx
|       |   ├───> components/game/GamePaywallView.tsx
|       |   |     └───> hooks/use-premium.ts (Vérifie le statut premium de l'utilisateur)
|       |   |           └───> lib/supabase.ts (Communique avec la base de données)
|       |   |
|       |   └───> data/games.ts
|       |
|       ├── Connexion.tsx (Page de connexion/inscription)
|       |   └───> hooks/use-auth.ts (Gère la logique d'authentification)
|       |         └───> lib/supabase.ts (Appelle les fonctions d'authentification de Supabase)
|       |
|       ├── Profil.tsx (Page de profil utilisateur)
|       |   ├───> lib/profile.ts (Fonctions pour lire/écrire le profil)
|       |   |     └───> lib/supabase.ts
|       |   |
|       |   └───> hooks/use-auth.ts (Pour obtenir les informations de l'utilisateur connecté)
|       |
|       └── Payment.tsx (Page de paiement)
|           └───> lib/payment.ts (Logique de paiement avec Stripe)
|                 └───> (api/webhook.js) (Endpoint pour que Stripe confirme le paiement)
|
├── lib/
|   ├── supabase.ts (Point central pour la BDD et l'authentification)
|   └── payment.ts (Logique de paiement)
|
└── hooks/
    ├── use-auth.ts (Fournit l'état de l'utilisateur dans toute l'app)
    └── use-premium.ts (Fournit le statut premium de l'utilisateur)
```

