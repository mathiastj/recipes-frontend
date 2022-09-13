import { supabaseAuthProvider } from 'ra-supabase'
import { supabase } from './supabase'

export const authProvider = supabaseAuthProvider(supabase, {
  // No identity to expose
  getIdentity: async () => {
    return {
      fullName: '',
    }
  },
})
