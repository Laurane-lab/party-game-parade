# Architecture Document: Party Game Parade

This document outlines the architecture of the Party Game Parade web application.

## File and Folder Structure

The project follows a standard structure for a modern React application built with Vite.

```
/
├── public/             # Static assets directly served to the browser
├── src/                # Application source code
│   ├── assets/         # Images, icons, and other assets processed by Vite
│   ├── components/     # Reusable React components
│   │   ├── ui/         # UI components from shadcn/ui
│   │   └── ...         # Custom components
│   ├── content/        # Markdown content
│   ├── css/            # CSS files
│   ├── data/           # Static data for the application
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   ├── pages/          # Top-level page components
│   └── main.tsx        # Application entry point
├── package.json        # Project dependencies and scripts
├── vite.config.ts      # Vite configuration
├── tailwind.config.ts  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## What Each Part Does

*   **`public/`**: Contains static assets like `favicon.ico` and `robots.txt`. These files are not processed by the build tool and are copied directly to the output directory.
*   **`src/`**: The heart of the application.
    *   **`assets/`**: Contains images and icons that are imported into components. These are processed by Vite during the build.
    *   **`components/`**: This directory holds all the reusable React components.
        *   **`ui/`**: This sub-directory is dedicated to components provided by the `shadcn/ui` library, which forms the base of the UI.
        *   Custom components like `Footer.tsx` and `PaywallDialog.tsx` are placed directly inside `components/`.
    *   **`content/`**: Holds markdown files.
    *   **`css/`**: Holds CSS files.
    *   **`data/`**: Contains static data used by the application, such as the list of games in `games.ts`.
    *   **`hooks/`**: Custom React hooks are defined here, for example, `use-mobile.tsx` to detect mobile devices.
    *   **`lib/`**: A place for utility functions that can be reused across the application, like the `cn` function in `utils.ts` for merging CSS classes.
    *   **`pages/`**: Each file in this directory typically represents a page of the application, corresponding to a route.
    *   **`main.tsx`**: The main entry point of the React application. It renders the `App` component into the DOM.
    *   **`App.tsx`**: The root component of the application. It sets up routing and global providers.

## State Management and Service Connections

*   **Client-Side State**: For local component state, the application uses React's built-in hooks like `useState` and `useContext`.
*   **Server-Side State**: The application uses **TanStack Query (`@tanstack/react-query`)** for managing server state. This includes fetching, caching, and updating data from the backend. The `QueryClientProvider` is set up in `App.tsx`, making it available throughout the application.
*   **Backend Service**: The application connects to **Supabase** as its backend. The `@supabase/supabase-js` library is used to interact with Supabase for services like authentication and database.
*   **Routing**: **React Router (`react-router-dom`)** is used for client-side routing. Routes are defined in `App.tsx`, mapping URL paths to specific page components in the `src/pages` directory.

## Tech Stack & Frameworks

*   **Build Tool**: **Vite** is used for its fast development server and optimized builds.
*   **Framework**: **React** is the core library for building the user interface.
*   **Language**: **TypeScript** is used for static typing, improving code quality and maintainability.
*   **Styling**:
    *   **Tailwind CSS** is the primary CSS framework for utility-first styling.
    *   **shadcn/ui** is used as a component library, providing a set of accessible and customizable UI components built on top of Radix UI and Tailwind CSS.
*   **Routing**: **React Router** handles client-side navigation.
*   **State Management**: **TanStack Query** is used for managing server state.
*   **Backend**: **Supabase** provides backend-as-a-service functionalities.
*   **Forms**: **React Hook Form** and **Zod** are used for building and validating forms.
*   **Linting**: **ESLint** is used to enforce code quality and consistency.

## Code Usage

*   **What code is used**: Based on the routing in `App.tsx` and the project structure, most of the code in the `src` directory appears to be in use. The component-based architecture encourages modularity and reuse.
*   **What code is not used**: The file `architecture.md` is outdated and has been replaced by this document. Without a more detailed analysis, it is difficult to identify other unused code, but the project appears to be lean.

## Drafts and Work in Progress

*   **Premium Features**: The existence of `PaywallDialog.tsx` and the `ToGoPremium.tsx` page suggests that the implementation of premium features is a work in progress. The user flow is being implemented, for instance by connecting the premium page to the connexion page.
*   **CGU/CGV**: The current branch name `Fix-cgv-cgu` indicates that the "Terms and Conditions" and "General Terms of Sale" pages are actively being worked on or revised.
