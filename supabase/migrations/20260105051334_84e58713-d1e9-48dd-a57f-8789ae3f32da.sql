-- Explicitly deny all SELECT access to contact_submissions
-- Data is accessed only via Edge Function with service_role key (bypasses RLS)
CREATE POLICY "No public read access" 
ON public.contact_submissions 
FOR SELECT 
USING (false);