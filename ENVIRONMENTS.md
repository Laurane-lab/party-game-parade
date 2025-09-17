# Guide de Gestion des Environnements - Party Game Parade

## 🎯 Vue d'ensemble

Ce projet utilise maintenant une approche robuste pour gérer les différents environnements et leurs configurations Stripe respectives.

## 📁 Fichiers d'environnement disponibles

### `.env.example`
- **Usage** : Template et documentation
- **Contient** : Toutes les variables avec des valeurs d'exemple
- **Stripe** : Lien de test par défaut

### `.env` (local development)
- **Usage** : Développement local
- **À créer** : Copiez `.env.example` et adaptez
- **Stripe** : Utilisez le lien de test

### `.env.staging`
- **Usage** : Tests en conditions de production
- **Stripe** : Lien de test pour valider le workflow sans charges réelles
- **Variable spéciale** : `VITE_APP_ENV=staging`

### `.env.production`
- **Usage** : Environnement de production réel
- **Stripe** : Vrai lien de paiement pour les clients
- **Variable spéciale** : `VITE_APP_ENV=production`

## 🚀 Comment utiliser

### Pour le développement local
```bash
# 1. Créer votre fichier local
cp .env.example .env

# 2. Vérifier que le lien Stripe de test est configuré
# VITE_STRIPE_PAYMENT_LINK=https://buy.stripe.com/test_...
```

### Pour tester en production (avec lien test)
```bash
# 1. Utiliser le fichier .env.staging lors du build
cp .env.staging .env

# 2. Builder et déployer
npm run build

# 3. Le site utilisera automatiquement le lien de test Stripe
```

### Pour la vraie production
```bash
# 1. Mettre à jour .env.production avec votre vrai lien Stripe
# VITE_STRIPE_PAYMENT_LINK=https://buy.stripe.com/VOTRE_VRAI_LIEN

# 2. Utiliser le fichier .env.production lors du build
cp .env.production .env

# 3. Builder et déployer
npm run build
```

## 🔧 Logique automatique

Le fichier `src/constants.ts` contient maintenant une logique intelligente :

1. **Priorité 1** : Si `VITE_STRIPE_PAYMENT_LINK` est définie → l'utilise
2. **Priorité 2** : Si `VITE_APP_ENV=production` ET pas `staging` → utilise le lien prod
3. **Priorité 3** : Sinon → utilise le lien de test

## 🎛️ Variables d'environnement clés

| Variable | Description | Valeurs possibles |
|----------|-------------|-------------------|
| `VITE_STRIPE_PAYMENT_LINK` | Lien de paiement Stripe direct | URL de paiement |
| `VITE_APP_ENV` | Environnement explicite | `development`, `staging`, `production` |
| `MODE` | Environnement Vite (automatique) | `development`, `production` |

## 🔄 Workflow de test complet

### Étape 1 : Tests en production avec lien test
```bash
# Sur votre serveur/CI
cp .env.staging .env
npm run build
# Déployer et tester les paiements (sans charges)
```

### Étape 2 : Passage en production réelle
```bash
# Sur votre serveur/CI
cp .env.production .env
npm run build
# Déployer pour vos vrais clients
```

## 🛡️ Sécurité

- ❌ **Ne jamais committer** les fichiers `.env` avec de vraies clés
- ✅ **Toujours utiliser** des variables d'environnement sur votre plateforme de déploiement
- ✅ **Garder** `.env.example` à jour comme documentation

## 📊 Debug et monitoring

Vous pouvez maintenant vérifier quel environnement est utilisé :

```javascript
import { APP_ENVIRONMENT, IS_PRODUCTION, IS_STAGING } from '@/constants';

console.log('Environment:', APP_ENVIRONMENT);
console.log('Is Production:', IS_PRODUCTION);
console.log('Is Staging:', IS_STAGING);
```

## 🚨 Cas d'urgence

Si vous devez rapidement changer le lien en production :

1. **Méthode rapide** : Modifier directement `src/constants.ts`
2. **Méthode propre** : Changer la variable d'environnement sur votre serveur
3. **Rollback rapide** : Garder une sauvegarde de l'ancienne configuration