import {
  generateAutoReplyEmail,
  simpleEmailToMe,
} from "@/app/services/email-services";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const { name, email, interest, message, subscribe } = data;

    const emailHtml = generateAutoReplyEmail({
      name,
      interest,
      subscribe,
      senderContactInfo: "simeon@cover-io.com",
      senderName: "Simeon",
      senderTitle: "Free - Digital Product Consultant",
    });

    const { data: emailData, error: emailError } = await resend.emails.send({
      from: "simeon@cover-io.com",
      to: email,
      subject: `Let's talk about ${interest}`,
      html: emailHtml,
    });

    // Send email to me
    const emailHtmlToMe = simpleEmailToMe({
      name,
      email,
      interest,
      message,
      subscribe,
    });

    await resend.emails.send({
      from: "simeon@cover-io.com",
      to: "simeon@cover-io.com",
      subject: `Let's talk about ${interest}`,
      html: emailHtmlToMe,
    });

    if (emailError) {
      throw new Error("Failed to send email");
    }

    return NextResponse.json({
      message: "Message sent successfully",
      email_data: emailData,
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
