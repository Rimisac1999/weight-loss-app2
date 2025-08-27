import { createBrowserClient } from '@supabase/ssr';
console.log('=== ENVIRONMENT VARIABLES DEBUG ===');
console.log('NEXT_PUBLIC_SUPABASE_URL:', process.env.NEXT_PUBLIC_SUPABASE_URL);
console.log('NEXT_PUBLIC_SUPABASE_ANON_KEY:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'EXISTS' : 'MISSING');
console.log('All env vars:', Object.keys(process.env).filter(key => key.includes('SUPABASE')));
console.log('===================================');
export const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);