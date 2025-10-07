# Sauvegarde du code du Paywall - Jeu "Dos à dos"

## Date de sauvegarde
7 octobre 2025

## Description
Sauvegarde du code du paywall pour le jeu "dos à dos" avant suppression. Ce code peut être réutilisé plus tard pour d'autres jeux premium.

## Code sauvegardé

### 1. Logique dans Index.tsx

**Import du composant PaywallDialog :**
```tsx
import PaywallDialog from "@/components/PaywallDialog";
```

**State pour gérer l'affichage du paywall :**
```tsx
const [showPaywall, setShowPaywall] = useState(false);
```

**Logique pour le jeu "Dos à dos" (lignes ~157-167) :**
```tsx
} else if (isDosADos) {
  cardProps = {
    role: "button",
    tabIndex: 0,
    onClick: () => setShowPaywall(true),
    onKeyPress: (e) => {
      if (e.key === "Enter" || e.key === " ") {
        setShowPaywall(true);
      }
    },
    className: "rounded-xl border border-gray-200 bg-gray-50 shadow-sm p-6 flex flex-col items-start text-left hover:shadow-lg transition-shadow cursor-pointer outline-none focus:ring-2 focus:ring-party-pink",
  };
```

**Rendu conditionnel du paywall (ligne ~259) :**
```tsx
{showPaywall && <PaywallDialog onClose={() => setShowPaywall(false)} />}
```

### 2. Composant PaywallDialog.tsx complet

Le composant PaywallDialog.tsx est sauvegardé dans le fichier `/src/components/PaywallDialog.tsx` et peut être réutilisé tel quel pour d'autres jeux premium.

### 3. Détection du jeu "Dos à dos"

```tsx
const isDosADos = game.name === "Dos à dos";
```

## Instructions pour réutilisation

1. Importer le composant PaywallDialog
2. Ajouter un state `showPaywall` 
3. Configurer le onClick pour `setShowPaywall(true)`
4. Ajouter le rendu conditionnel du composant
5. Le composant PaywallDialog gère automatiquement la fermeture et la redirection

## Fonctionnalités du Paywall sauvegardé

- Modal overlay avec fond semi-transparent
- Fermeture par clic sur le fond
- Titre et description personnalisables
- Bouton vers la page premium
- Bouton de retour vers les jeux gratuits
- Design cohérent avec la charte graphique du site