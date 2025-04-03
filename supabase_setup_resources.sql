-- Table to store downloadable resources
CREATE TABLE IF NOT EXISTS downloadable_resources (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  image TEXT NOT NULL,
  file_path TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Public access policy for anonymous reading
ALTER TABLE downloadable_resources ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow anonymous reads on downloadable_resources" 
  ON downloadable_resources FOR SELECT 
  TO anon
  USING (true);


