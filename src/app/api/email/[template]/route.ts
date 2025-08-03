import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";
import { LeadStatus, EmailFlowStatus, CurrentEmailFlow } from "@/types";
import {
  EMAIL_TEMPLATES,
  generateEmailHTML,
  type EmailTemplateData,
} from "@/lib/email/templates";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(
  request: NextRequest,
  { params }: { params: { template: string } }
) {
  try {
    const { template } = params;
    const data: EmailTemplateData = await request.json();

    if (!data.email || !data.name) {
      return NextResponse.json(
        { error: "Email and name are required" },
        { status: 400 }
      );
    }

    if (!Object.prototype.hasOwnProperty.call(EMAIL_TEMPLATES, template)) {
      return NextResponse.json(
        { error: `Unknown email template: ${template}` },
        { status: 400 }
      );
    }

    const { data: existingLead } = await supabase
      .from("leads")
      .select("id")
      .eq("email", data.email)
      .single();

    let leadId: string | undefined;

    if (existingLead) {
      leadId = existingLead.id;
    } else {
      const { data: newLead, error: insertError } = await supabase
        .from("leads")
        .insert({
          email: data.email,
          first_name: data.name,
          has_idea_clear: false,
          budget: "$500-$1000",
          status: LeadStatus.FORM_SUBMITTED,
          email_flow_status: EmailFlowStatus.ACTIVE,
          current_email_flow: CurrentEmailFlow.FORM_NO_CALL,
          current_email_sequence: 0,
          form_submitted_at: new Date().toISOString(),
        })
        .select()
        .single();

      if (insertError) {
        console.error("Error creating lead:", insertError);
      } else {
        leadId = newLead.id;
      }
    }

    const templateConfig =
      EMAIL_TEMPLATES[template as keyof typeof EMAIL_TEMPLATES];
    const emailContent = generateEmailHTML(
      template as keyof typeof EMAIL_TEMPLATES,
      data
    );

    const firstName =
      typeof data.name === "string" ? data.name.split(" ")[0] : "";
    const subject =
      typeof templateConfig.subject === "string"
        ? templateConfig.subject.replace("{{First.name}}", firstName)
        : "";

    const { data: emailData, error } = await resend.emails.send({
      from: templateConfig.from,
      to: [data.email],
      subject: subject,
      html: emailContent,
    });

    if (error) {
      return NextResponse.json(
        { error: `Failed to send ${template} email` },
        { status: 500 }
      );
    }

    if (leadId) {
      await supabase
        .from("leads")
        .update({
          last_email_sent_at: new Date().toISOString(),
        })
        .eq("id", leadId);
    }

    return NextResponse.json({
      success: true,
      message: `${template} email sent successfully`,
      emailId: emailData?.id,
      leadId: leadId,
    });
  } catch (error) {
    console.error("Error in email template route:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
