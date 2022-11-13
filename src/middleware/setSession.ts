import '../store/types';
import { Context } from '@nuxt/types';
import { supabase } from '@/utils/supabase';

export default function ({ app }: Context) {
  // execute only on client side
  if (process.server) return;

  const session = supabase.auth.session();
  if (session) {
    const { auth } = app.$accessor;
    auth.setSession(session);
  }
}
