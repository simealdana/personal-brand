import { DownloadableResource } from "@/types/download";
import supabase from "@/lib/supabase";

/**
 * Fetch all downloadable resources from Supabase
 */
export async function getAllResources(): Promise<DownloadableResource[]> {
  const { data, error } = await supabase
    .from("downloadable_resources")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching resources:", error);
    return [];
  }

  return data as DownloadableResource[];
}

/**
 * Get a specific resource by ID from Supabase
 */
export async function getResourceById(
  id: string
): Promise<DownloadableResource | null> {
  const { data, error } = await supabase
    .from("downloadable_resources")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("Error fetching resource:", error);
    return null;
  }

  return data as DownloadableResource;
}

/**
 * Check if a resource exists in Supabase
 */
export async function resourceExists(id: string): Promise<boolean> {
  const { count, error } = await supabase
    .from("downloadable_resources")
    .select("*", { count: "exact", head: true })
    .eq("id", id);

  if (error) {
    console.error("Error checking resource:", error);
    return false;
  }

  return !!count && count > 0;
}
