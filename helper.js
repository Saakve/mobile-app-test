import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ubqadswhksywpdyirsay.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVicWFkc3doa3N5d3BkeWlyc2F5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgyMzgzNjMsImV4cCI6MTk5MzgxNDM2M30.SnB0xY1Qnt2eoJqQVSnA9pcUrUwdXpR4Jm655BPOvwE'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})