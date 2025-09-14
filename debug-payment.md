# Debug Payment Success

## Étapes de debug

1. **Vérifier la console du navigateur** quand vous arrivez sur `/payment-success`
2. **Chercher les messages** `console.error("Erreur lors de la mise à jour du profil:", updateError)`
3. **Noter l'erreur exacte** et me la communiquer

## Vérifications dans Supabase

### 1. Structure de la table
```sql
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'profiles' AND table_schema = 'public'
ORDER BY ordinal_position;
```

### 2. Politiques RLS
```sql
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual
FROM pg_policies 
WHERE tablename = 'profiles';
```

### 3. Vérifier les données existantes
```sql
SELECT id, email, is_premium, payment_date, created_at
FROM profiles 
ORDER BY created_at DESC 
LIMIT 5;
```

## Test manuel

Vous pouvez tester manuellement la mise à jour :

```sql
-- Remplacez USER_ID par l'ID de votre utilisateur de test
UPDATE profiles 
SET is_premium = true, 
    payment_date = NOW(),
    updated_at = NOW()
WHERE id = 'USER_ID';
```