import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL || 'https://primumhnientfsqxypmb.supabase.co';
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_Tks3mDMDfMFp3TcSHaq37Q_rQKic-NJ';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type AuthUser = {
  id: string;
  email?: string;
};

export async function getSession() {
  const { data: { session } } = await supabase.auth.getSession();
  return session;
}

export async function getUser(): Promise<AuthUser | null> {
  const session = await getSession();
  return session?.user ? { id: session.user.id, email: session.user.email } : null;
}

export async function signOut() {
  await supabase.auth.signOut();
}
