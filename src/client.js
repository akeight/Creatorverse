import { createClient } from '@supabase/supabase-js';

const URL = "https://iowxsenjjvvhquubzugk.supabase.co";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlvd3hzZW5qanZ2aHF1dWJ6dWdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI3Nzk4MjYsImV4cCI6MjA2ODM1NTgyNn0.V21jXQWihRoRi8ze1C4i6bZ_YNONsuF9NSZjfRKDC9Q";

export const supabase = createClient(URL, API_KEY);