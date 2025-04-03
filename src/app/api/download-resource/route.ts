import { NextRequest, NextResponse } from "next/server";
import supabase from "@/lib/supabase";
import { getFIleUrl } from "@/lib/utils";

export async function POST(request: NextRequest) {
  try {
    const { email, resourceId } = await request.json();

    if (!email || !resourceId) {
      return NextResponse.json(
        { error: "Email and resource ID are required" },
        { status: 400 }
      );
    }

    // Store the email in the interested_users table
    const { error: insertError } = await supabase
      .from("interested_users")
      .insert([
        {
          email,
          resource_id: resourceId,
        },
      ]);

    if (insertError) {
      console.error("Failed to record email:", insertError);
      // Continue anyway - we want the user to get their download even if the email storage fails
    }

    // Find the file_path for the given resource ID from our resources (implement your lookup logic)
    // For now, let's assume the resourceId is directly the file_path
    const file_path = resourceId;

    // Also log the download in downloads table
    const { data: downloadData, error: downloadError } = await supabase
      .from("downloads")
      .insert([
        {
          email,
          file_path,
          downloaded_at: new Date().toISOString(),
        },
      ])
      .select("*");

    if (downloadError) {
      console.error("Failed to record download:", downloadError);
      // Continue anyway
    }

    // Get filename from bucket file if available
    let fileName = file_path;
    if (
      downloadData &&
      downloadData.length > 0 &&
      downloadData[0].bucket_file
    ) {
      fileName = downloadData[0].bucket_file;
    }

    // Get direct URL using the getFIleUrl function instead of signed URL
    try {
      const download_url = getFIleUrl(fileName);

      return NextResponse.json({
        success: true,
        download_url,
        fileName: fileName.split("/").pop() || "download",
      });
    } catch (urlError) {
      console.error("Failed to generate download URL:", urlError);
      return NextResponse.json(
        { error: "Failed to generate download URL" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error processing download request:", error);
    return NextResponse.json(
      { error: "Failed to process download request" },
      { status: 500 }
    );
  }
}
