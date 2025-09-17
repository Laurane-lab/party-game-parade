-- Vérifications à faire dans Supabase SQL Editor

-- 1. Vérifier la structure de la table profiles
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'profiles' AND table_schema = 'public'
ORDER BY ordinal_position;

-- 2. Vérifier les politiques RLS
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual
FROM pg_policies 
WHERE tablename = 'profiles';

-- 3. Si nécessaire, créer une politique pour permettre les mises à jour via service key
-- (Cette politique permet au webhook d'utiliser la service key pour mettre à jour)
CREATE POLICY "Allow service key updates" ON profiles
FOR UPDATE USING (true);

-- 4. Vérifier que la colonne email existe et est unique
SELECT COUNT(*), email FROM profiles GROUP BY email HAVING COUNT(*) > 1;