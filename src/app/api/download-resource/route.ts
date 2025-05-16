import { NextRequest, NextResponse } from "next/server";
import supabase from "@/lib/supabase";
import { Resend } from "resend";

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

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
    await supabase.from("interested_users").insert([
      {
        email,
        resource_id: resourceId,
      },
    ]);

    // Generate the download URL
    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL ||
      request.headers.get("origin") ||
      "http://localhost:3000";
    const downloadUrl = `${baseUrl}/download/file/${resourceId}`;

    // Get filename for display in email
    const fileName = resourceId.split("/").pop() || "resource";

    // Send email with download link
    await resend.emails.send({
      from: "Simeon <simeon@cover-io.com>",
      to: email,
      subject: `Your download link for ${fileName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #3b82f6;">Your download is ready</h1>
          <p>Thank you for your interest in our resource. Click the button below to download ${fileName}:</p>
          <div style="text-align: center; margin: 30px 0;">
            <a href="${downloadUrl}" style="background-color: #3b82f6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold;">
              Download Now
            </a>
          </div>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Download link sent to your email",
    });
  } catch (error) {
    console.error("Error processing download request:", error);
    return NextResponse.json(
      { error: "Failed to process download request" },
      { status: 500 }
    );
  }
}
