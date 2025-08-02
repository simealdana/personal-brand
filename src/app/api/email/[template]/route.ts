import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import {
  EMAIL_TEMPLATES,
  generateEmailHTML,
  type EmailTemplateData,
} from "@/lib/email/templates";

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

    if (!EMAIL_TEMPLATES[template]) {
      return NextResponse.json(
        { error: `Unknown email template: ${template}` },
        { status: 400 }
      );
    }

    const templateConfig = EMAIL_TEMPLATES[template];
    const emailContent = generateEmailHTML(template, data);

    const firstName = data.name.split(" ")[0];
    const subject = templateConfig.subject.replace("{{First.name}}", firstName);

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

    return NextResponse.json({
      success: true,
      message: `${template} email sent successfully`,
      emailId: emailData?.id,
    });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
