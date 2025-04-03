-- Tabla para almacenar información de descargas
CREATE TABLE downloads (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  email TEXT NOT NULL,
  file_path TEXT NOT NULL,
  downloaded_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Política de acceso público para inserción desde la landing page
ALTER TABLE downloads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow anonymous inserts" 
  ON downloads FOR INSERT 
  TO anon
  WITH CHECK (true);

-- Crear bucket si no existe
INSERT INTO storage.buckets (id, name, public)
VALUES ('files', 'files', false)
ON CONFLICT (id) DO NOTHING;

-- Configurar política para permitir descargas anónimas vía URLs firmadas
CREATE POLICY "Allow anonymous downloads with signed URLs"
  ON storage.objects FOR SELECT
  TO anon
  USING (bucket_id = 'files'); 