import { NextRequest, NextResponse } from "next/server";
import supabase from "@/lib/supabase";
import { Resend } from "resend";

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

    const { data: existingUser, error: fetchError } = await supabase
      .from("interested_users")
      .select("*")
      .eq("email", email)
      .single();

    if (fetchError && fetchError.code !== "PGRST116") {
      console.error("Error fetching user:", fetchError);
      return NextResponse.json(
        { error: "Failed to check existing user" },
        { status: 500 }
      );
    }

    if (existingUser) {
      const resourceIds = existingUser.resource_ids || [];

      if (resourceIds.includes(resourceId)) {
        return NextResponse.json({
          success: true,
          message: "You already have access to this resource",
        });
      }

      const { error: updateError } = await supabase
        .from("interested_users")
        .update({
          resource_ids: [...resourceIds, resourceId],
        })
        .eq("email", email);

      if (updateError) {
        console.error("Error updating user:", updateError);
        return NextResponse.json(
          { error: "Failed to update user record" },
          { status: 500 }
        );
      }
    } else {
      const { error: insertError } = await supabase
        .from("interested_users")
        .insert([
          {
            email,
            resource_ids: [resourceId],
            lead_stage: 0,
          },
        ]);

      if (insertError) {
        console.error("Error creating user:", insertError);
        return NextResponse.json(
          { error: "Failed to create user record" },
          { status: 500 }
        );
      }
    }

    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL ||
      request.headers.get("origin") ||
      "http://localhost:3000";
    const downloadUrl = `${baseUrl}/download/file/${resourceId}`;

    const fileName = resourceId.split("/").pop() || "resource";

    await resend.emails.send({
      from: "Simeon <simeon@cover-io.com>",
      to: email,
      subject: `Your download link for ${fileName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #3b82f6; margin-bottom: 20px;">Your download is ready!</h1>
          
          <p style="font-size: 16px; line-height: 1.6; color: #374151; margin-bottom: 20px;">
            Hey there,
          </p>
          
          <p style="font-size: 16px; line-height: 1.6; color: #374151; margin-bottom: 20px;">
            Saw you grabbed ${fileName}, love that.
          </p>
          
          <p style="font-size: 16px; line-height: 1.6; color: #374151; margin-bottom: 20px;">
            Out of curiosity… Did you do anything cool with it yet?
          </p>
          
          <p style="font-size: 16px; line-height: 1.6; color: #374151; margin-bottom: 20px;">
            I get a lot of downloads from YouTube and Reddit, but rarely get to hear what happens next.
          </p>
          
          <p style="font-size: 16px; line-height: 1.6; color: #374151; margin-bottom: 20px;">
            So if you're open to it; hit reply and tell me what you're working on (or stuck on).
          </p>
          
          <p style="font-size: 16px; line-height: 1.6; color: #374151; margin-bottom: 20px;">
            And if you want some help turning that code into something useful, profitable, or scalable.
          </p>
          
          <p style="font-size: 16px; line-height: 1.6; color: #374151; margin-bottom: 20px;">
            Let me know!
          </p>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="${downloadUrl}" style="background-color: #3b82f6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold; display: inline-block;">
              Download ${fileName}
            </a>
          </div>
          
          <p style="font-size: 16px; line-height: 1.6; color: #374151; margin-bottom: 20px;">
            Talk soon,
          </p>
          
          <p style="font-size: 16px; line-height: 1.6; color: #374151;">
            Simeon
          </p>
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
