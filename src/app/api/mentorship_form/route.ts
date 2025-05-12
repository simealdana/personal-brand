import { NextResponse } from "next/server";

// Environment variables (only available server-side)
const WEBHOOK_URL =
  process.env.MENTORSHIP_WEBHOOK_URL ||
  "https://cover.app.n8n.cloud/webhook/8c8dc8a8-add0-40ef-be9e-8e54b15a9924";
const AUTH_USERNAME = process.env.MENTORSHIP_USERNAME || "";
const AUTH_KEY = process.env.MENTORSHIP_KEY || "";

export async function POST(request: Request) {
  try {
    // Parse the form data
    const formData = await request.json();

    // Validate required fields
    const { fullName, email, aiProject, experience, goal, investment, source } =
      formData;

    if (
      !fullName ||
      !email ||
      !aiProject ||
      !experience ||
      !goal ||
      !investment ||
      !source
    ) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Map the form data to the expected format
    const mappedData = {
      mail_address: email,
      fullName: fullName,
      project: aiProject,
      experience: experience,
      goal: goal,
      readyToInvest: investment,
      referral: source,
    };

    // Set up headers with authentication
    const headers: HeadersInit = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    // Add auth headers if credentials are provided
    if (AUTH_USERNAME && AUTH_KEY) {
      const authString = `${AUTH_USERNAME}:${AUTH_KEY}`;
      const base64Auth = Buffer.from(authString).toString("base64");
      headers["Authorization"] = `Basic ${base64Auth}`;
    }

    // Forward the request to the webhook with the mapped data
    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers,
      body: JSON.stringify(mappedData),
    });

    // Handle response
    if (!response.ok) {
      const errorText = await response.text();
      console.error("Webhook error:", response.status, errorText);

      return NextResponse.json(
        { error: "Failed to process application" },
        { status: response.status }
      );
    }

    // Return success response
    return NextResponse.json({
      success: true,
      message: "Application submitted successfully",
    });
  } catch (error) {
    console.error("Server error processing form:", error);

    return NextResponse.json(
      { error: "Server error processing application" },
      { status: 500 }
    );
  }
}
