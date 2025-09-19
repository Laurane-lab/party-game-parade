import { supabase } from './supabase';

export const getProfile = async (userId: string) => {
  const { data, error } = await supabase
    .from('profiles')
    .select('is_premium')
    .eq('user_id', userId)
    .single();

  if (error && error.code !== 'PGRST116') { // PGRST116 = 'No rows found'
    console.error('Error fetching profile:', error);
    return null;
  }

  return data;
};
