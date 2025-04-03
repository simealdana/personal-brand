# File Download System with Email Capture

This system allows you to create download cards for files, with optional email capture functionality. When enabled, users must provide their email address before downloading the file, and this information is stored in Supabase.

## Features

- Clean, modern UI for file downloads
- Optional email requirement for downloads
- Email validation
- Download tracking in Supabase
- Secure file access using Supabase Storage signed URLs
- Automatic download initiation

## Setup

### 1. Supabase Configuration

1. Create a Supabase project at [https://supabase.com](https://supabase.com)
2. Create a table named `downloads` with the following schema:

```sql
create table downloads (
  id uuid default uuid_generate_v4() primary key,
  email text not null,
  file_path text not null,
  downloaded_at timestamp with time zone default now(),
  created_at timestamp with time zone default now()
);
```

3. Create a storage bucket named `files` to store your downloadable files
4. Set appropriate security policies for the bucket to prevent unauthorized access

### 2. Environment Variables

Add the following to your `.env.local` file:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

### 3. Upload Files

Upload your downloadable files to the `files` bucket in your Supabase storage.

## Usage

Import and use the `FileDownloadCard` component in your pages:

```tsx
import FileDownloadCard from "@/components/FileDownloadCard";

export default function MyPage() {
  return (
    <div>
      <FileDownloadCard 
        image="/path/to/preview-image.jpg"
        title="My Downloadable File"
        description="A detailed description of what this file contains."
        file_path="path/in/storage/myfile.pdf"
        isRequiredEmail={true} // Set to false to skip email requirement
      />
    </div>
  );
}
```

### Props

The `FileDownloadCard` component accepts the following props:

- `image`: Path to the preview image (required)
- `title`: Title of the downloadable content (required)
- `description`: Description of the downloadable content (required)
- `file_path`: Path to the file in Supabase storage (required)
- `isRequiredEmail`: Whether to require email before download (required)

## Demo

A demo page is available at `/downloads` which shows both variations - with and without email requirement.

## Security Considerations

- The signed URLs from Supabase have a short expiration time (60 seconds)
- Email validation is performed both client-side and server-side
- All download attempts are logged in the Supabase database

## Extending the Functionality

You can extend this system by:

1. Adding email notifications when files are downloaded
2. Creating an admin dashboard to view download statistics
3. Implementing rate limiting to prevent abuse
4. Adding user authentication for premium downloads 