import { NextRequest, NextResponse } from "next/server";
import supabase from "@/lib/supabase";
import { getFIleUrl } from "@/lib/utils";

export async function POST(request: NextRequest) {
  try {
    const { email, file_path } = await request.json();

    if (!email || !file_path) {
      return NextResponse.json(
        { error: "Email and file path are required" },
        { status: 400 }
      );
    }

    // Store the download request in Supabase
    const { data: downloadData, error } = await supabase
      .from("downloads")
      .insert([
        {
          email,
          file_path,
          downloaded_at: new Date().toISOString(),
        },
      ])
      .select("*");

    if (error) {
      console.error("Failed to record download:", error);
      return NextResponse.json(
        { error: "Failed to process download request" },
        { status: 500 }
      );
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
