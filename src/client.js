import { createClient } from '@supabase/supabase-js';

const URL = "https://knppfylnauhsfbzszukb.supabase.co";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtucHBmeWxuYXVoc2ZienN6dWtiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM0OTIwNTUsImV4cCI6MjA2OTA2ODA1NX0.gnXxtnWhG25bDQc1ZyTpYRDMg5thuw7QivjbdOOZUvg";

export const supabase = createClient(URL, API_KEY);