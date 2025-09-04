# Party Game Parade Architecture

## File & Folder Structure

```
party-game-parade/
├── bun.lockb                # Bun package manager lock file
├── components.json          # Component registry/configuration
├── eslint.config.js         # ESLint configuration
├── index.html               # Main HTML entry point
├── package.json             # Project metadata and dependencies
├── postcss.config.js        # PostCSS configuration for CSS processing
├── README.md                # Project documentation
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.app.json        # TypeScript config for app
├── tsconfig.json            # Global TypeScript config
├── tsconfig.node.json       # TypeScript config for Node
├── vercel.json              # Vercel deployment config
├── vite.config.ts           # Vite build tool config
├── public/                  # Static assets served directly
│   ├── favicon.ico
│   ├── placeholder.svg
│   ├── robots.txt
│   └── ...
├── src/                     # Source code
│   ├── App.css              # Global app styles
│   ├── App.tsx              # Main React app component
│   ├── index.css            # Global CSS imports
│   ├── main.tsx             # App entry point, renders App
│   ├── vite-env.d.ts        # Vite environment types
│   ├── assets/              # Images and icons
│   │   ├── ...              # Game images, mascots, icons
│   │   └── icon/            # Icon assets
│   ├── components/          # React components
│   │   ├── PaywallDialog.tsx # Popup paywall, affiche la description courte du jeu premium sélectionné, redirige vers les jeux gratuits si clic extérieur
│   │   └── ui/              # UI primitives (buttons, dialogs, etc.)
│   │       ├── accordion.tsx
│   │       ├── ...
│   │       └── use-toast.ts
│   ├── data/                # Data sources (game data, config)
│   ├── hooks/               # Custom React hooks
│   │   ├── use-mobile.tsx   # Mobile detection hook
│   │   └── use-toast.ts     # Toast notification hook
│   ├── lib/                 # Utility functions
│   │   └── utils.ts
│   └── pages/               # Page-level components (routing targets)
│       ├── Connexion.tsx
│       ├── GameExplanation.tsx
│       ├── Index.tsx
│       └── NotFound.tsx
```

## What Each Part Does

### Root Files
- **index.html**: Loads the React app, includes root div.
- **package.json**: Declares dependencies, scripts, and metadata.
- **vite.config.ts**: Configures Vite for fast development/build.
- **tailwind.config.ts**: Tailwind CSS setup for utility-first styling.
- **tsconfig*.json**: TypeScript configuration for type safety.
- **vercel.json**: Deployment settings for Vercel platform.

### `public/`
- Contains static files (images, icons, robots.txt) served as-is.

### `src/`
- **App.tsx**: Main React component, sets up app layout and routing.
- **main.tsx**: Entry point, renders `App` into the DOM.
- **App.css/index.css**: Global styles, Tailwind imports.
- **vite-env.d.ts**: Type definitions for Vite environment variables.

#### `src/assets/`
- Game images, mascots, icons, and SVGs used throughout the app.

#### `src/components/`
- **PaywallDialog.tsx**: Modal dialog for paywall/upsell.
- **ui/**: Reusable UI primitives (buttons, dialogs, forms, etc.), often used across pages and features.

#### `src/data/`
- Game data, configuration, or static datasets (structure inferred, not shown in detail).

#### `src/hooks/`
- **use-mobile.tsx**: Detects mobile device usage for responsive UI.
- **use-toast.ts**: Provides toast notification logic for feedback.

#### `src/lib/`
- **utils.ts**: Utility functions shared across the app.

#### `src/pages/`
- **Connexion.tsx**: Login/connection page, affiche la mascotte au-dessus du titre.
- **GameExplanation.tsx**: Page d'explication des jeux, gère l'affichage des jeux premium, la popup paywall, et la description courte du jeu sélectionné.
- **Index.tsx**: Page d'accueil, boutons "Commencer gratuitement" redirigent vers la connexion.
- **NotFound.tsx**: 404 error page.

## State Management & Services

### State Location
- **Local State**: La plupart des états sont gérés localement dans les composants React avec `useState`, `useReducer`, ou des hooks personnalisés (ex : `use-toast`, `use-mobile`).
- **Paywall State**: L'état d'affichage de la popup paywall est géré localement dans les pages concernées (`GameExplanation.tsx`, `Index.tsx`).
- **Page State**: Chaque composant de page (`src/pages/`) gère son propre état, y compris la sélection de jeu et la gestion des popups.

### Services & Data Flow
- **Data**: Les données des jeux (nom, description courte, premium, etc.) sont stockées dans les pages (ex : tableau dans `GameExplanation.tsx`).
- **Paywall Logic**: La logique d'affichage de la popup paywall et de la description courte du jeu premium sélectionné est centralisée dans le composant `PaywallDialog.tsx` et pilotée par les pages.
- **UI Services**: Toasts, dialogs, et feedback UI sont gérés via hooks et composants dans `src/components/ui/`.
- **Routing**: Géré dans `App.tsx` (React Router).
- **Assets**: Images, mascottes et icônes importés depuis `src/assets/` et affichés dans les pages et composants.

## Summary
- **Modular Structure**: Séparation claire des assets, composants, hooks, pages et utilitaires.
- **Paywall & Premium**: Gestion centralisée de la popup paywall, affichage dynamique de la description courte du jeu premium sélectionné, redirection automatique vers les jeux gratuits si clic extérieur.
- **UI**: UI moderne avec primitives réutilisables dans `components/ui/`, stylée avec Tailwind CSS.
- **Routing**: Navigation entre pages via React Router.

---
This document provides a high-level overview of the architecture for the Party Game Parade project. For more details, refer to the README or explore individual files and folders.
