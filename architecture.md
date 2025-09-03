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
│   │   ├── Footer.tsx       # Footer component
│   │   ├── PaywallDialog.tsx # Popup paywall, affiche la description courte du jeu premium sélectionné, redirige vers les jeux gratuits si clic extérieur
│   │   └── ui/              # UI primitives (buttons, dialogs, forms, etc.)
│   │       ├── accordion.tsx
│   │       ├── alert-dialog.tsx
│   │       ├── alert.tsx
│   │       ├── aspect-ratio.tsx
│   │       ├── avatar.tsx
│   │       ├── badge.tsx
│   │       ├── breadcrumb.tsx
│   │       ├── button.tsx
│   │       ├── calendar.tsx
│   │       ├── card.tsx
│   │       ├── carousel.tsx
│   │       ├── chart.tsx
│   │       ├── checkbox.tsx
│   │       ├── collapsible.tsx
│   │       ├── command.tsx
│   │       ├── context-menu.tsx
│   │       ├── dialog.tsx
│   │       ├── drawer.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── form.tsx
│   │       ├── hover-card.tsx
│   │       ├── input-otp.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── menubar.tsx
│   │       ├── navigation-menu.tsx
│   │       ├── pagination.tsx
│   │       ├── popover.tsx
│   │       ├── progress.tsx
│   │       ├── radio-group.tsx
│   │       ├── resizable.tsx
│   │       ├── scroll-area.tsx
│   │       ├── select.tsx
│   │       ├── separator.tsx
│   │       ├── sheet.tsx
│   │       ├── sidebar.tsx
│   │       ├── skeleton.tsx
│   │       ├── slider.tsx
│   │       ├── sonner.tsx
│   │       ├── switch.tsx
│   │       └── ...
│   ├── content/             # Legal and informational content
│   │   └── cgu-cgv.md
│   ├── css/                 # Custom CSS files
│   │   └── cgu-cgv.css
│   ├── data/                # Data sources (game data, config)
│   │   └── games.ts         # Liste des jeux (free & premium)
│   ├── hooks/               # Custom React hooks
│   │   ├── use-mobile.tsx   # Mobile detection hook
│   │   └── use-toast.ts     # Toast notification hook
│   ├── lib/                 # Utility functions
│   │   └── utils.ts
│   └── pages/               # Page-level components (routing targets)
│       ├── CGVCGU.tsx       # CGU/CGV page
│       ├── Connexion.tsx    # Login/connection page
│       ├── GameExplanation.tsx # Explication des jeux, gestion paywall
│       ├── GamePreview.tsx  # Preview d'un jeu
│       ├── Index.tsx        # Page d'accueil
│       ├── MentionsLegales.tsx # Mentions légales
│       ├── NotFound.tsx     # 404 error page
│       └── ToGoPremium.tsx  # Page d'accès aux jeux premium
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
- **App.tsx**: Main React component, sets up app layout and routing (React Router).
- **main.tsx**: Entry point, renders `App` into the DOM.
- **App.css/index.css**: Global styles, Tailwind imports.
- **vite-env.d.ts**: Type definitions for Vite environment variables.

#### `src/assets/`
- Game images, mascots, icons, and SVGs used throughout the app.

#### `src/components/`
- **Footer.tsx**: Footer component.
- **PaywallDialog.tsx**: Modal dialog for paywall/upsell, centralise la logique d'affichage du paywall et la description courte du jeu premium sélectionné.
- **ui/**: Reusable UI primitives (buttons, dialogs, forms, etc.), utilisés dans toutes les pages et composants pour une UI cohérente et moderne.

#### `src/content/`
- **cgu-cgv.md**: Contenu des CGU/CGV affiché dans la page dédiée.

#### `src/css/`
- **cgu-cgv.css**: Styles spécifiques pour la page CGU/CGV.

#### `src/data/`
- **games.ts**: Source de vérité pour la liste des jeux (gratuits et premium), utilisée dans les pages d'explication et d'accès premium.

#### `src/hooks/`
- **use-mobile.tsx**: Détection de l'usage mobile pour adapter l'UI.
- **use-toast.ts**: Gestion des notifications toast pour le feedback utilisateur.

#### `src/lib/`
- **utils.ts**: Fonctions utilitaires partagées dans l'app.

#### `src/pages/`
- **CGVCGU.tsx**: Page CGU/CGV.
- **Connexion.tsx**: Page de connexion, affiche la mascotte au-dessus du titre.
- **GameExplanation.tsx**: Page d'explication des jeux, gère l'affichage des jeux premium, la popup paywall, et la description courte du jeu sélectionné.
- **GamePreview.tsx**: Preview d'un jeu.
- **Index.tsx**: Page d'accueil, boutons "Commencer gratuitement" redirigent vers la connexion.
- **MentionsLegales.tsx**: Mentions légales.
- **NotFound.tsx**: 404 error page.
- **ToGoPremium.tsx**: Page d'accès aux jeux premium, affiche la liste des jeux premium et gratuits, utilise les icônes et descriptions courtes depuis `games.ts`.

## State Management & Services

### State Location
- **Local State**: La plupart des états sont gérés localement dans les composants React avec `useState`, `useReducer`, ou des hooks personnalisés (`use-toast`, `use-mobile`).
- **Paywall State**: L'état d'affichage de la popup paywall est géré localement dans les pages concernées (`GameExplanation.tsx`, `ToGoPremium.tsx`, `Index.tsx`).
- **Page State**: Chaque composant de page (`src/pages/`) gère son propre état, y compris la sélection de jeu, la gestion des popups, et l'accès premium.

### Services & Data Flow
- **Data**: Les données des jeux (nom, description courte, premium, etc.) sont centralisées dans `src/data/games.ts` et utilisées dans les pages concernées (`GameExplanation.tsx`, `ToGoPremium.tsx`).
- **Paywall Logic**: La logique d'affichage de la popup paywall et de la description courte du jeu premium sélectionné est centralisée dans le composant `PaywallDialog.tsx` et pilotée par les pages.
- **UI Services**: Toasts, dialogs, et feedback UI sont gérés via hooks et composants dans `src/components/ui/`.
- **Routing**: Géré dans `App.tsx` (React Router), navigation entre toutes les pages du dossier `src/pages/`.
- **Assets**: Images, mascottes et icônes importés depuis `src/assets/` et affichés dans les pages et composants.

## Summary
- **Modular Structure**: Séparation claire des assets, composants, hooks, pages, utilitaires, et données.
- **Paywall & Premium**: Gestion centralisée de la popup paywall, affichage dynamique de la description courte du jeu premium sélectionné, redirection automatique vers les jeux gratuits si clic extérieur.
- **UI**: UI moderne avec primitives réutilisables dans `components/ui/`, stylée avec Tailwind CSS.
- **Routing**: Navigation entre pages via React Router, toutes les pages sont dans `src/pages/`.
- **Jeux Premium**: Les jeux premium et gratuits sont listés dans `games.ts` et affichés dans les pages dédiées, avec icônes et descriptions courtes.
- **Pages légales**: CGU/CGV et Mentions légales sont accessibles via des pages dédiées.

---
Ce document donne une vue d'ensemble à jour de l'architecture du projet Party Game Parade. Pour plus de détails, consultez le README ou explorez les fichiers et dossiers individuels.
