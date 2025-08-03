import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { LeadStatus, EmailFlowStatus, CurrentEmailFlow } from "@/types";
import { backendEmailService } from "@/lib/email/backend-service";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

interface LeadFormData {
  name: string;
  email: string;
  hasIdea: string;
  budget: string;
}

export async function POST(request: Request) {
  try {
    const body: LeadFormData = await request.json();
    const { name, email, hasIdea, budget } = body;

    // Validate required fields
    if (!name || !email || !hasIdea || !budget) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Validate hasIdea value
    if (!["yes", "no"].includes(hasIdea)) {
      return NextResponse.json(
        { error: "Invalid hasIdea value" },
        { status: 400 }
      );
    }

    // Validate budget value
    const validBudgets = ["500-1000", "1000-2000", "2000-5000"];
    if (!validBudgets.includes(budget)) {
      return NextResponse.json(
        { error: "Invalid budget value" },
        { status: 400 }
      );
    }

    // Check if lead already exists
    const { data: existingLead } = await supabase
      .from("leads")
      .select("id")
      .eq("email", email)
      .single();

    if (existingLead) {
      return NextResponse.json(
        { error: "Lead already exists with this email" },
        { status: 409 }
      );
    }

    // Convert budget format to match database enum
    const budgetMap: Record<string, string> = {
      "500-1000": "$500-$1000",
      "1000-2000": "$1000-$2000",
      "2000-5000": "$2000-$5000",
    };

    // 1. Create lead in database
    const { data: lead, error: insertError } = await supabase
      .from("leads")
      .insert({
        email,
        first_name: name,
        has_idea_clear: hasIdea === "yes",
        budget: budgetMap[budget],
        status: LeadStatus.FORM_SUBMITTED,
        email_flow_status: EmailFlowStatus.ACTIVE,
        current_email_flow: CurrentEmailFlow.FORM_NO_CALL,
        current_email_sequence: 0,
        form_submitted_at: new Date().toISOString(),
      })
      .select()
      .single();

    if (insertError) {
      console.error("Error inserting lead:", insertError);
      return NextResponse.json(
        { error: "Failed to save lead" },
        { status: 500 }
      );
    }

    // 2. Send email using the centralized service
    const emailResult = await backendEmailService.sendFormCompletionEmail(
      lead.id,
      { name, email }
    );

    if (!emailResult.success) {
      console.error("Error sending email:", emailResult.error);
      // Don't fail the request if email fails, just log it
    }

    console.log("Lead form submission:", {
      name,
      email,
      hasIdea,
      budget,
      lead_id: lead.id,
      email_id: emailResult.emailId,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Lead form submitted successfully",
      data: {
        name,
        email,
        hasIdea,
        budget,
        lead_id: lead.id,
      },
    });
  } catch (error) {
    console.error("Error in submit-form:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
