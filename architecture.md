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
│   │   ├── PaywallDialog.tsx
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
- **Connexion.tsx**: Login or connection page.
- **GameExplanation.tsx**: Game rules/instructions page.
- **Index.tsx**: Home/landing page.
- **NotFound.tsx**: 404 error page.

## State Management & Services

### State Location
- **Local State**: Most state is managed locally within React components using `useState`, `useReducer`, or custom hooks (e.g., `use-toast`, `use-mobile`).
- **Global State**: If needed, global state may be managed via React Context or external libraries (not shown explicitly in the structure).
- **Page State**: Each page component (`src/pages/`) manages its own state relevant to its view.

### Services & Data Flow
- **Data**: Static data is likely stored in `src/data/`. Dynamic data (API calls, etc.) would be handled in components or hooks.
- **Utilities**: Shared logic lives in `src/lib/utils.ts`.
- **UI Services**: Toasts, dialogs, and other UI feedback are managed via hooks and UI components in `src/components/ui/`.
- **Routing**: Managed in `App.tsx` (using React Router or similar, inferred from structure).
- **Assets**: Images and icons are imported from `src/assets/` and used in components/pages.

## Summary
- **Modular Structure**: Clear separation of concerns—assets, components, hooks, pages, and utilities.
- **State**: Primarily local/component state, with hooks for shared logic.
- **Services**: UI services (toasts, dialogs) via hooks/components; data services inferred from `data/` and `lib/`.
- **UI**: Built with reusable primitives in `components/ui/`, styled via Tailwind CSS.
- **Routing**: Page-level components in `pages/` for navigation.

---
This document provides a high-level overview of the architecture for the Party Game Parade project. For more details, refer to the README or explore individual files and folders.
