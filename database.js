import { createClient } from "@supabase/supabase-js";
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpvY2VveGJjdmZkdmhucnpnaHZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk2Mjg0NjMsImV4cCI6MTk4NTIwNDQ2M30.JA0NxHoX35LlL2aUsWkhXyxmmJepPiB27NZEt3o_wtQ';
const superbaseUrl = 'https://zoceoxbcvfdvhnrzghvo.supabase.co';
const supabase = createClient(superbaseUrl, supabaseKey)

export default supabase