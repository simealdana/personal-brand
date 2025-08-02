import { NextRequest, NextResponse } from "next/server";
import { calendlyConfig, validateCalendlyConfig } from "@/lib/config/calendly";

export async function POST(request: NextRequest) {
  validateCalendlyConfig();
  try {
    const { eventUuid, inviteeUuid } = await request.json();

    if (!eventUuid || !inviteeUuid) {
      return NextResponse.json(
        { error: "Event UUID and Invitee UUID are required" },
        { status: 400 }
      );
    }

    const response = await fetch(
      `${calendlyConfig.baseUrl}/scheduled_events/${eventUuid}/invitees/${inviteeUuid}`,
      {
        headers: {
          Authorization: `Bearer ${calendlyConfig.apiKey}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch invitee data" },
        { status: response.status }
      );
    }

    const data = await response.json();

    return NextResponse.json({
      email: data.resource.email,
      name: data.resource.name,
      timezone: data.resource.timezone,
      eventStartTime: data.resource.start_time,
      eventEndTime: data.resource.end_time,
      questionsAndAnswers: data.resource.questions_and_answers,
    });
  } catch (error) {
    console.error("Error fetching invitee data:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
