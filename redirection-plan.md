# Plan de Redirection - Party Game Parade

## Vue d'ensemble
Ce document explique le système de redirection complexe de l'application pour maintenir une expérience utilisateur cohérente. **ATTENTION : Toute modification doit préserver ces logiques existantes.**

## Architecture des Redirections

### 1. Fichiers Impliqués

#### 🔐 **Authentication & Routing**
- `src/components/ProtectedRoute.tsx` - Protection des routes privées
- `src/pages/Connexion.tsx` - Logique centrale de redirection post-connexion
- `src/hooks/use-auth.ts` - Gestion de l'état d'authentification
- `src/App.tsx` - Configuration des routes

#### 🧭 **Navigation Components**
- `src/components/ProfileButton.tsx` - Bouton connexion/profil
- `src/components/Header.tsx` - Navigation principale

#### 💳 **Payment Flow**
- `src/lib/payment.ts` - Gestion des redirections de paiement
- `src/lib/profile.ts` - Vérification du statut premium

---

## 2. Logique de Redirection Post-Connexion

### 📍 **Point Central : `Connexion.tsx`**

La fonction `handleRedirect()` dans `Connexion.tsx` gère **TOUTES** les redirections après une connexion réussie selon cette **hiérarchie stricte** :

```javascript
// PRIORITÉ 1 : Utilisateurs Premium
if (profile?.is_premium) {
  navigate("/game-explanation"); // TOUJOURS vers les jeux
  return;
}

// PRIORITÉ 2 : Redirection vers paiement
if (redirectTo === 'payment') {
  redirectToPayment({ email, gameId });
  return;
}

// PRIORITÉ 3 : Page protégée tentée avant connexion
if (redirectAfterLogin) {
  navigate(redirectAfterLogin);
  return;
}

// PRIORITÉ 4 : Connexion standard
navigate('/'); // Page d'accueil par défaut
```

### 🔄 **Sources de Redirection**

#### A. **redirectTo** (URLSearchParams)
- **Source** : URL `?redirect_to=payment`
- **Usage** : Depuis la page `/premium` vers paiement
- **Stockage** : sessionStorage `redirect_to`

#### B. **redirectAfterLogin** (SessionStorage)
- **Source** : `ProtectedRoute.tsx` 
- **Usage** : Accès à une route protégée sans être connecté
- **Stockage** : sessionStorage `redirect_after_login`

#### C. **game_id_for_payment** (SessionStorage)
- **Source** : Sélection d'un jeu avant paiement
- **Usage** : Préfill du gameId lors du paiement

---

## 3. Protection des Routes

### 🛡️ **ProtectedRoute Behavior**

```javascript
// src/components/ProtectedRoute.tsx
useEffect(() => {
  if (!isLoading && !user) {
    // STOCKAGE du chemin pour retour après connexion
    sessionStorage.setItem('redirect_after_login', window.location.pathname + window.location.search);
    navigate('/connexion');
  }
}, [user, isLoading, navigate]);
```

### 📋 **Routes Protégées Actuelles**
- `/payment` - Page de paiement
- `/profil` - Page de profil utilisateur

---

## 4. Navigation Components

### 👤 **ProfileButton Logic**

```javascript
// État du bouton selon l'authentification
if (!user) {
  return <Button onClick={() => navigate('/connexion')}>Connexion</Button>;
}

// Utilisateur connecté
return <Button onClick={() => navigate('/profil')}>Profil</Button>;
```

**⚠️ IMPORTANT** : Ce bouton ne déclenche JAMAIS de déconnexion automatique. La déconnexion se fait depuis la page `/profil`.

---

## 5. Parcours Utilisateur Types

### 🌟 **Parcours Premium**
1. Clic "Connexion" → `/connexion`
2. Authentification Google
3. **TOUJOURS** redirigé vers `/game-explanation`
4. Bouton devient "Profil" 
5. Clic "Profil" → `/profil` (accès libre)

### 💰 **Parcours Paiement**
1. Page `/premium` → Clic "S'abonner"
2. URL `?redirect_to=payment` → `/connexion`
3. Connexion → Redirection vers Stripe
4. Après paiement → Devenir premium → Parcours premium

### 🔒 **Parcours Route Protégée**
1. Accès direct `/profil` (non connecté)
2. `ProtectedRoute` stocke `/profil` dans sessionStorage
3. Redirection `/connexion`
4. Connexion réussie → Retour vers `/profil`

### 🏠 **Parcours Standard**
1. Clic "Connexion" depuis page quelconque
2. Connexion → Retour page d'accueil `/`
3. Navigation libre ensuite

---

## 6. SessionStorage Management

### 🗃️ **Clés Utilisées**
- `redirect_to` : Destination après connexion (URL params)
- `redirect_after_login` : Route protégée tentée 
- `game_id_for_payment` : ID du jeu pour paiement

### 🧹 **Nettoyage**
Le nettoyage des clés sessionStorage se fait dans `Connexion.tsx` après usage :
```javascript
sessionStorage.removeItem('redirect_to');
sessionStorage.removeItem('redirect_after_login');
sessionStorage.removeItem('game_id_for_payment');
```

---

## 7. Règles pour Nouvelles Features

### ✅ **À FAIRE**
- Utiliser `ProtectedRoute` pour protéger de nouvelles pages
- Ajouter des routes dans `App.tsx` sans modifier la logique de redirection
- Créer des composants de navigation qui utilisent `navigate()`
- Tester tous les parcours après modifications

### ❌ **À NE PAS FAIRE**
- **JAMAIS** modifier la hiérarchie de `handleRedirect()` dans `Connexion.tsx`
- **JAMAIS** court-circuiter les redirections premium → game-explanation
- **JAMAIS** modifier le comportement de `ProtectedRoute` sans comprendre l'impact
- **JAMAIS** ajouter de redirections automatiques dans les pages elles-mêmes

### 🧪 **Tests Obligatoires**
Avant toute mise en production, tester ces parcours :
1. ✅ Premium : Connexion → game-explanation 
2. ✅ Non-premium : Connexion → page d'accueil
3. ✅ Paiement : Premium page → Connexion → Stripe
4. ✅ Route protégée : /profil direct → Connexion → /profil
5. ✅ ProfileButton : Connexion ↔ Profil selon état auth

---

## 8. Debug & Troubleshooting

### 🔍 **Variables à Inspecter**
```javascript
// Dans la console navigateur
sessionStorage.getItem('redirect_to')
sessionStorage.getItem('redirect_after_login') 
sessionStorage.getItem('game_id_for_payment')

// Dans Connexion.tsx
console.log({ redirectTo, redirectAfterLogin, profile })
```

### 🚨 **Problèmes Fréquents**
- **Loop de redirection** : Vérifier que `ProtectedRoute` ne redirige pas vers lui-même
- **Premium bloqué** : S'assurer que la priorité premium est respectée
- **SessionStorage non nettoyé** : Peut causer des redirections inattendues

---

## 9. Architecture Decision Records

### 🎯 **Pourquoi cette complexité ?**
- **UX cohérente** : L'utilisateur retourne où il était
- **Monetization** : Parcours paiement optimisé
- **Security** : Routes protégées avec auth
- **Premium first** : Experience premium prioritaire

### 🔮 **Évolutions Futures**
Pour ajouter de nouvelles redirections :
1. Identifier le type de parcours (standard/premium/payment/protected)
2. Ajouter la logique dans `handleRedirect()` selon la hiérarchie
3. Documenter le nouveau parcours dans ce fichier
4. Tester l'impact sur tous les parcours existants

---

**⚠️ RAPPEL IMPORTANT : Ce système est critique pour l'expérience utilisateur et la monétisation. Toute modification doit être testée exhaustivement.**