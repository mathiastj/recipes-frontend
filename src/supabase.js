import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://choglwwkknauoazmwevf.supabase.co'
// This can be shared, it's basically a read only key since I have RLS enabled
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNob2dsd3dra25hdW9hem13ZXZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjA4NDg5MjksImV4cCI6MTk3NjQyNDkyOX0.xtw2s7bO_00-5cWzXJy8gsOF2XNZBxveS0FnNgAYX_A'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
