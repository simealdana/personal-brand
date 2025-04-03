-- Table to store interested users' emails
CREATE TABLE IF NOT EXISTS interested_users (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  email TEXT NOT NULL,
  resource_id TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for email searches
CREATE INDEX IF NOT EXISTS interested_users_email_idx ON interested_users(email);

-- Public access policy for insertions from the landing page
ALTER TABLE interested_users ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow anonymous inserts to interested_users" 
  ON interested_users FOR INSERT 
  TO anon
  WITH CHECK (true); 