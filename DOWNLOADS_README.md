# Sistema de Descargas con Captura de Email

Este sistema permite crear páginas de descarga individuales con captura de email. Cada recurso tiene su propia página con un diseño atractivo, y los usuarios deben proporcionar su email antes de poder descargar el archivo.

## Características

- **Páginas individuales**: Cada recurso tiene su propia página en `/download/[id]`
- **Diseño responsivo**: Imagen a la izquierda, descripción y botón a la derecha
- **Modal de captura de email**: Aparece al hacer clic en el botón de descarga
- **Validación de email**: Asegura que los emails ingresados sean válidos
- **Almacenamiento en Supabase**: Los emails se guardan en una tabla de usuarios interesados
- **Seguimiento de descargas**: Cada descarga se registra en una tabla separada
- **URLs firmadas**: Los archivos se sirven mediante URLs firmadas temporales para mayor seguridad

## Estructura del Código

### Componentes

- `EmailModal`: Modal para capturar el email del usuario
- `src/app/download/[id]/page.tsx`: Página individual de descarga con diseño personalizado
- `src/app/downloads/page.tsx`: Página que muestra todos los recursos disponibles

### API

- `src/app/api/download-resource/route.ts`: Endpoint para procesar solicitudes de descarga

### Servicios y Utilidades

- `src/lib/resources.ts`: Gestión de recursos descargables
- `src/lib/supabase.ts`: Cliente de Supabase para acceso a la base de datos y almacenamiento
- `src/types/download.ts`: Tipado para recursos descargables

## Configuración de Supabase

### Tablas

1. **interested_users**: Almacena los emails de usuarios interesados
   ```sql
   CREATE TABLE interested_users (
     id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
     email TEXT NOT NULL,
     resource_id TEXT NOT NULL,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );
   ```

2. **downloads**: Registra información sobre cada descarga
   ```sql
   CREATE TABLE downloads (
     id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
     email TEXT NOT NULL,
     file_path TEXT NOT NULL,
     downloaded_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );
   ```

### Almacenamiento

- Bucket `files`: Almacena los archivos descargables
- Políticas de seguridad configuradas para permitir descargas solo mediante URLs firmadas

## Cómo Añadir Nuevos Recursos

1. Sube el archivo al bucket `files` en Supabase Storage
2. Añade la información del recurso en `src/lib/resources.ts`:

```typescript
const resources: ResourcesMap = {
  "mi-nuevo-recurso": {
    id: "mi-nuevo-recurso",
    title: "Título del Recurso",
    description: "Descripción detallada del recurso...",
    image: "/images/mi-recurso-preview.jpg",
    file_path: "carpeta/nombre-archivo.pdf"
  },
  // ... otros recursos
};
```

## Flujo de Usuario

1. El usuario visita la página `/downloads` para ver todos los recursos disponibles
2. Hace clic en un recurso para ver más detalles (navega a `/download/[id]`)
3. En la página de detalle, hace clic en "Download Now"
4. Se abre un modal solicitando su email
5. Después de ingresar un email válido y enviar el formulario:
   - El email se guarda en la tabla `interested_users`
   - La descarga se registra en la tabla `downloads`
   - Se genera una URL firmada y se inicia la descarga automáticamente

## Configuración del Entorno

Asegúrate de configurar las siguientes variables de entorno:

```
NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_clave_anonima
```

## Consideraciones de Seguridad

- Las URLs de descarga son temporales (válidas por 60 segundos)
- Se aplica validación de email tanto en el frontend como en el backend
- Los archivos no son accesibles directamente, solo a través de URLs firmadas
- Se utilizan políticas de seguridad en Supabase para proteger los datos 