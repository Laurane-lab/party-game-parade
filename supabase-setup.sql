-- Script SQL pour configurer la table profiles dans Supabase
-- Ce script devrait être exécuté dans l'éditeur SQL de votre projet Supabase

-- Création de la table profiles si elle n'existe pas déjà
CREATE TABLE IF NOT EXISTS profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email TEXT,
  is_premium BOOLEAN DEFAULT false,
  payment_date TIMESTAMP WITH TIME ZONE,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index sur l'email pour les recherches rapides
CREATE INDEX IF NOT EXISTS idx_profiles_email ON profiles (email);

-- Création d'une politique de sécurité RLS pour la table profiles
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Politique pour permettre aux utilisateurs de lire leur propre profil
CREATE POLICY "Les utilisateurs peuvent lire leur propre profil"
  ON profiles FOR SELECT
  USING (auth.uid() = id);

-- Politique pour permettre aux utilisateurs de mettre à jour leur propre profil
CREATE POLICY "Les utilisateurs peuvent mettre à jour leur propre profil"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);

-- Politique pour permettre de créer des profils (généralement géré par un trigger)
CREATE POLICY "Autoriser l'insertion de profils"
  ON profiles FOR INSERT
  WITH CHECK (true);

-- Création d'un trigger pour créer automatiquement un profil lors de l'inscription
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email)
  VALUES (new.id, new.email);
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Vérifier si le trigger existe déjà et le supprimer s'il existe
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;

-- Trigger qui s'exécute après une nouvelle inscription
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Créer une fonction et un trigger pour maintenir le champ updated_at à jour
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Créer un trigger pour mettre à jour updated_at
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON profiles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Instructions supplémentaires pour configurer un utilisateur premium manuellement
-- Remplacez 'adresse@email.com' par l'adresse email de l'utilisateur à rendre premium
/*
UPDATE profiles
SET is_premium = true,
    payment_date = NOW()
WHERE email = 'adresse@email.com';
*/
