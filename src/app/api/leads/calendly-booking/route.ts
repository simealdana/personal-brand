import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { calendlyConfig, validateCalendlyConfig } from "@/lib/config/calendly";
import { LeadStatus, CurrentEmailFlow } from "@/types/Lead";
import { backendEmailService } from "@/lib/email/backend-service";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

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
    const inviteeData = {
      email: data.resource.email,
      name: data.resource.name,
      timezone: data.resource.timezone,
      eventStartTime: data.resource.start_time,
      eventEndTime: data.resource.end_time,
      questionsAndAnswers: data.resource.questions_and_answers,
    };

    const { data: existingLead } = await supabase
      .from("leads")
      .select("*")
      .eq("email", inviteeData.email)
      .single();

    let leadId: string;

    if (existingLead) {
      const { error: updateError } = await supabase
        .from("leads")
        .update({
          status: LeadStatus.CALL_SCHEDULED,
          current_email_flow: CurrentEmailFlow.CALL_REMINDERS,
          current_email_sequence: 0,
          call_booked_at: new Date().toISOString(),
          call_scheduled_for: inviteeData.eventStartTime,
        })
        .eq("id", existingLead.id);

      if (updateError) {
        console.error("Error updating lead:", updateError);
        return NextResponse.json(
          { error: "Failed to update lead" },
          { status: 500 }
        );
      }

      leadId = existingLead.id;
    } else {
      const { data: newLead, error: insertError } = await supabase
        .from("leads")
        .insert({
          email: inviteeData.email,
          first_name: inviteeData.name,
          has_idea_clear: false,
          budget: "$500-$1000",
          status: LeadStatus.CALL_SCHEDULED,
          email_flow_status: "ACTIVE",
          current_email_flow: CurrentEmailFlow.CALL_REMINDERS,
          current_email_sequence: 0,
          form_submitted_at: new Date().toISOString(),
          call_booked_at: new Date().toISOString(),
          call_scheduled_for: inviteeData.eventStartTime,
        })
        .select()
        .single();

      if (insertError) {
        console.error("Error creating lead:", insertError);
        return NextResponse.json(
          { error: "Failed to create lead" },
          { status: 500 }
        );
      }

      leadId = newLead.id;
    }

    const emailResult = await backendEmailService.sendBookingConfirmationEmail(
      leadId,
      inviteeData
    );

    if (!emailResult.success) {
      console.error("Error sending confirmation email:", emailResult.error);
    }

    return NextResponse.json({
      success: true,
      message: "Calendly booking processed successfully",
      data: {
        lead_id: leadId,
        email: inviteeData.email,
        name: inviteeData.name,
        event_start: inviteeData.eventStartTime,
        event_end: inviteeData.eventEndTime,
        email_sent: emailResult.success,
      },
    });
  } catch (error) {
    console.error("Error in calendly-booking:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
