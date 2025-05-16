// Interface for downloadable resources
export interface DownloadableResource {
  id: string; // Unique identifier
  title: string; // Title of the resource
  description: string; // Description of the resource
  image: string; // Path to the image
  file_path: string; // Path to the file in Supabase storage
  emailSent?: boolean; // Optional flag to track if email was sent
}

// Type for storing resources
export type ResourcesMap = {
  [id: string]: DownloadableResource;
};
