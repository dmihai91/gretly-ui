if (!process.env.BASE_URL) {
  throw 'Please set the BASE_URL env variable';
}

if (!process.env.SUPABASE_URL || !process.env.SUPABASE_KEY) {
  throw 'Please set SUPABASE_URL and SUPABASE_KEY env variables';
}

export const BASE_URL = process.env.BASE_URL;
export const SUPABASE_URL = process.env.SUPABASE_URL;
export const SUPABASE_KEY = process.env.SUPABASE_KEY;
