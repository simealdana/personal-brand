import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getFIleUrl = (fileName: string) => {
  const bucketName = process.env.NEXT_PUBLIC_SUPABASE_BUCKET_NAME;
  const s3Endpoint = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

  if (!bucketName || !s3Endpoint || !supabaseUrl) {
    throw new Error("Missing environment variables");
  }

  // Revert to the original public endpoint that was working
  const fileUrl = `${s3Endpoint}/storage/v1/object/public/${bucketName}/${fileName}`;
  return fileUrl;
};
