import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rjqldnoikwvdhexduraq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJqcWxkbm9pa3d2ZGhleGR1cmFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM1NjEzNTEsImV4cCI6MjAzOTEzNzM1MX0.DRp12Z7L7AYsqj0JDNYSfWr9PuXNN2g_VzxvnYWd3nc'

export const supabase = createClient(supabaseUrl, supabaseKey)