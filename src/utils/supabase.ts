import { SUPABASE_URL, SUPABASE_KEY } from './env';
import { createClient } from '@supabase/supabase-js';
import SupabaseClient from '@supabase/supabase-js/dist/module/SupabaseClient';

let supabaseClient: SupabaseClient;

const createSupabaseClient = () => {
  if (!supabaseClient) {
    supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY, {
      autoRefreshToken: true,
    });
  }

  return supabaseClient;
};

export const supabase = createSupabaseClient();
