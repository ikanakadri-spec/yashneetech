-- Fix security issue: Missing UPDATE/DELETE policies
-- Add explicit policies that deny UPDATE and DELETE for everyone

-- Deny all UPDATE operations on contact_submissions
CREATE POLICY "No update allowed"
ON public.contact_submissions
FOR UPDATE
USING (false);

-- Deny all DELETE operations on contact_submissions
CREATE POLICY "No delete allowed"
ON public.contact_submissions
FOR DELETE
USING (false);

-- Fix security issue: INSERT policy too permissive
-- Drop existing permissive INSERT policy and create one with basic validation
DROP POLICY "Anyone can submit contact form" ON public.contact_submissions;

-- Create new INSERT policy with basic validation (name and email must be provided)
CREATE POLICY "Anyone can submit contact form with valid data"
ON public.contact_submissions
FOR INSERT
WITH CHECK (
  name IS NOT NULL AND 
  name <> '' AND
  email IS NOT NULL AND 
  email <> '' AND
  email ~ '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
);