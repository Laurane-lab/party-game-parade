# Architecture Document: Party Game Parade

Ce document présente l'architecture de l'application web Party Game Parade.

## Structure des fichiers et dossiers

Le projet suit une structure standard pour une application React moderne construite avec Vite.

```
/
├── api/                # Fonctions serverless pour Vercel
├── public/             # Ressources statiques directement servies au navigateur
├── src/                # Code source de l'application
│   ├── assets/         # Images, icônes et autres ressources traitées par Vite
│   │   └── icon/       # Icônes utilisées dans l'application
│   ├── components/     # Composants React réutilisables
│   │   ├── ui/         # Composants UI de shadcn/ui
│   │   └── ...         # Composants personnalisés
│   ├── content/        # Contenu Markdown
│   ├── css/            # Fichiers CSS
│   ├── data/           # Données statiques pour l'application
│   ├── hooks/          # Hooks React personnalisés
│   ├── lib/            # Fonctions utilitaires et connexions aux services
│   ├── pages/          # Composants des pages principales
│   └── main.tsx        # Point d'entrée de l'application
├── package.json        # Dépendances et scripts du projet
├── vite.config.ts      # Configuration de Vite
├── tailwind.config.ts  # Configuration de Tailwind CSS
├── vercel.json         # Configuration de déploiement Vercel
└── tsconfig.json       # Configuration TypeScript
```

## Rôle de chaque partie

*   **`api/`**: Contient les fonctions serverless utilisées pour le déploiement sur Vercel, comme le webhook pour Stripe.
*   **`public/`**: Contient des ressources statiques comme `favicon.ico`, `robots.txt` et des documents juridiques. Ces fichiers ne sont pas traités par l'outil de construction et sont copiés directement dans le répertoire de sortie.
*   **`src/`**: Le cœur de l'application.
    *   **`assets/`**: Contient les images et icônes importées dans les composants. Ces ressources sont traitées par Vite pendant la construction.
    *   **`components/`**: Ce répertoire contient tous les composants React réutilisables.
        *   **`ui/`**: Ce sous-répertoire est dédié aux composants fournis par la bibliothèque `shadcn/ui`, qui forme la base de l'interface utilisateur.
        *   Les composants personnalisés comme `Footer.tsx`, `Header.tsx`, `BrevoForm.tsx` et `PaywallDialog.tsx` sont placés directement dans `components/`.
    *   **`content/`**: Contient des fichiers Markdown pour les pages de contenu statique.
    *   **`css/`**: Contient des fichiers CSS personnalisés comme `brevo.css` et `cgu-cgv.css`.
    *   **`data/`**: Contient les données statiques utilisées par l'application, comme la liste des jeux dans `games.ts`.
    *   **`hooks/`**: Les hooks React personnalisés sont définis ici, par exemple :
        *   `use-mobile.tsx` pour détecter les appareils mobiles
        *   `useAuth.ts` pour gérer l'authentification et vérifier le statut premium
        *   `use-toast.ts` pour les notifications
    *   **`lib/`**: Un emplacement pour les fonctions utilitaires et les connexions aux services :
        *   `supabase.ts` pour la connexion à Supabase
        *   `stripe.ts` pour l'intégration avec Stripe
        *   `utils.ts` pour les fonctions utilitaires diverses
    *   **`pages/`**: Chaque fichier dans ce répertoire représente généralement une page de l'application, correspondant à une route.
    *   **`main.tsx`**: Le point d'entrée principal de l'application React. Il rend le composant `App` dans le DOM.
    *   **`App.tsx`**: Le composant racine de l'application. Il configure le routage et les fournisseurs globaux.

## Gestion d'état et connexions aux services

*   **État côté client**: Pour l'état local des composants, l'application utilise les hooks intégrés de React comme `useState` et `useContext`.
*   **État côté serveur**: L'application utilise **TanStack Query (`@tanstack/react-query`)** pour gérer l'état du serveur. Cela comprend la récupération, la mise en cache et la mise à jour des données depuis le backend. Le `QueryClientProvider` est configuré dans `App.tsx`, le rendant disponible dans toute l'application.
*   **Service backend**: L'application se connecte à **Supabase** comme backend. La bibliothèque `@supabase/supabase-js` est utilisée pour interagir avec Supabase pour des services tels que l'authentification et la base de données.
*   **Routage**: **React Router (`react-router-dom`)** est utilisé pour le routage côté client. Les routes sont définies dans `App.tsx`, mappant les chemins d'URL aux composants de page spécifiques dans le répertoire `src/pages`.
*   **Paiement**: L'intégration avec **Stripe** est utilisée pour gérer les paiements des fonctionnalités premium.

## Stack technologique et frameworks

*   **Outil de build**: **Vite** est utilisé pour son serveur de développement rapide et ses builds optimisés.
*   **Framework**: **React** est la bibliothèque principale pour construire l'interface utilisateur.
*   **Langage**: **TypeScript** est utilisé pour le typage statique, améliorant la qualité et la maintenabilité du code.
*   **Styling**:
    *   **Tailwind CSS** est le framework CSS principal pour le styling utilitaire.
    *   **shadcn/ui** est utilisé comme bibliothèque de composants, fournissant un ensemble de composants UI accessibles et personnalisables construits sur Radix UI et Tailwind CSS.
*   **Routage**: **React Router** gère la navigation côté client.
*   **Gestion d'état**: **TanStack Query** est utilisé pour gérer l'état du serveur.
*   **Backend**: **Supabase** fournit des fonctionnalités de backend-as-a-service, y compris l'authentification et la base de données.
*   **Authentification**: **Supabase Auth** avec OAuth pour Google est utilisé pour l'authentification des utilisateurs.
*   **Paiement**: **Stripe** est utilisé pour gérer les paiements des fonctionnalités premium.
*   **Formulaires**: **React Hook Form** et **Zod** sont utilisés pour construire et valider les formulaires.
*   **Linting**: **ESLint** est utilisé pour garantir la qualité et la cohérence du code.
*   **Déploiement**: **Vercel** est utilisé pour le déploiement continu de l'application.

## Modèle de données

L'application utilise Supabase comme base de données. Voici les principales tables :

*   **`auth.users`**: Table gérée par Supabase Auth contenant les informations d'authentification des utilisateurs.
*   **`profiles`**: Table personnalisée liée à `auth.users` via une clé étrangère. Elle stocke :
    *   `id` : L'identifiant unique de l'utilisateur (correspondant à l'ID dans auth.users)
    *   `email` : L'adresse e-mail de l'utilisateur
    *   `is_premium` : Un booléen indiquant si l'utilisateur a souscrit aux fonctionnalités premium
    *   `payment_date` : La date du paiement pour les fonctionnalités premium
    *   `created_at` et `updated_at` : Horodatages pour la création et la mise à jour des enregistrements

## Fonctionnalités principales

*   **Authentification**: Connexion via Google OAuth gérée par Supabase Auth.
*   **Jeux de société**: Présentation et explication des différents jeux de société proposés.
*   **Fonctionnalités premium**: Accès à des fonctionnalités additionnelles via un abonnement payant géré par Stripe.
*   **Profil utilisateur**: Gestion du profil utilisateur et de son statut premium.

## Flux d'authentification et de paiement

1. L'utilisateur accède à la page `/connexion`
2. Il se connecte via Google OAuth
3. S'il souhaite accéder aux fonctionnalités premium, il est redirigé vers `/to-go-premium`
4. Après le paiement via Stripe, il est redirigé vers `/payment-success` et son statut premium est mis à jour dans la base de données

## Code utilisé

*   **Code actif**: D'après le routage dans `App.tsx` et la structure du projet, la plupart du code dans le répertoire `src` semble être utilisé. L'architecture basée sur les composants encourage la modularité et la réutilisation.
*   **Branche actuelle**: La branche actuelle `fix-connexion` suggère que des correctifs sont en cours sur le système d'authentification.

## Travaux en cours et améliorations futures

*   **Fonctionnalités premium**: La présence de `PaywallDialog.tsx` et de la page `ToGoPremium.tsx` indique que l'implémentation des fonctionnalités premium est en cours. Le flux utilisateur est en train d'être implémenté, notamment en connectant la page premium à la page de connexion.
*   **Webhook Stripe**: Le fichier `api/webhook.js` existe mais est vide, suggérant qu'une intégration plus complète avec Stripe est prévue pour gérer les événements de paiement.
*   **Améliorations de l'authentification**: La branche actuelle `fix-connexion` indique que des améliorations sont en cours sur le système d'authentification.
