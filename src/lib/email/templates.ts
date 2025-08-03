import { EmailType } from "@/types";

export interface EmailTemplateData {
  name: string;
  email: string;
  eventStartTime?: string;
  eventEndTime?: string;
  timezone?: string;
  questionsAndAnswers?: Array<{
    question: string;
    answer: string;
  }>;
}

export interface EmailConfig {
  subject: string;
  from: string;
  template: string;
}

export const EMAIL_TEMPLATES: Record<EmailType, EmailConfig> = {
  FORM_FOLLOWUP_1: {
    subject: "{{First.name}}? Open up",
    from: process.env.EMAIL_FROM || "Simeon <noreply@yourdomain.com>",
    template: "FORM_FOLLOWUP_1",
  },
  CALL_CONFIRMATION: {
    subject: "Your 1:1 strategy session is confirmed ✅",
    from: process.env.EMAIL_FROM || "Simeon <noreply@yourdomain.com>",
    template: "bookingConfirmation",
  },
  FORM_FOLLOWUP_2: {
    subject: "{{First.name}}? Open up",
    from: process.env.EMAIL_FROM || "Simeon <noreply@yourdomain.com>",
    template: "FORM_FOLLOWUP_2",
  },
  CALL_REMINDER_24H: {
    subject: "{{First.name}}? Open up",
    from: process.env.EMAIL_FROM || "Simeon <noreply@yourdomain.com>",
    template: "CALL_REMINDER_24H",
  },
  CALL_REMINDER_2H: {
    subject: "{{First.name}}? Open up",
    from: process.env.EMAIL_FROM || "Simeon <noreply@yourdomain.com>",
    template: "CALL_REMINDER_2H",
  },
  NO_SHOW_FOLLOWUP: {
    subject: "{{First.name}}? Open up",
    from: process.env.EMAIL_FROM || "Simeon <noreply@yourdomain.com>",
    template: "NO_SHOW_FOLLOWUP",
  },
  NURTURE_1: {
    subject: "{{First.name}}? Open up",
    from: process.env.EMAIL_FROM || "Simeon <noreply@yourdomain.com>",
    template: "NURTURE_1",
  },
  NURTURE_2: {
    subject: "{{First.name}}? Open up",
    from: process.env.EMAIL_FROM || "Simeon <noreply@yourdomain.com>",
    template: "NURTURE_2",
  },
  NURTURE_3: {
    subject: "{{First.name}}? Open up",
    from: process.env.EMAIL_FROM || "Simeon <noreply@yourdomain.com>",
    template: "NURTURE_3",
  },
  NURTURE_MONTHLY_1: {
    subject: "{{First.name}}? Open up",
    from: process.env.EMAIL_FROM || "Simeon <noreply@yourdomain.com>",
    template: "NURTURE_MONTHLY_1",
  },
  NURTURE_MONTHLY_2: {
    subject: "{{First.name}}? Open up",
    from: process.env.EMAIL_FROM || "Simeon <noreply@yourdomain.com>",
    template: "NURTURE_MONTHLY_2",
  },
  REFERRAL_FEEDBACK: {
    subject: "{{First.name}}? Open up",
    from: process.env.EMAIL_FROM || "Simeon <noreply@yourdomain.com>",
    template: "REFERRAL_FEEDBACK",
  },
  REFERRAL_PROGRAM: {
    subject: "{{First.name}}? Open up",
    from: process.env.EMAIL_FROM || "Simeon <noreply@yourdomain.com>",
    template: "REFERRAL_PROGRAM",
  },
};

export function generateEmailHTML(
  template: string,
  data: EmailTemplateData
): string {
  switch (template as EmailType) {
    case "FORM_FOLLOWUP_1":
      return generateFormCompletionEmailHTML(data.name);
    case "CALL_CONFIRMATION":
      return generateBookingConfirmationEmailHTML(data.name);
    default:
      return generateFormCompletionEmailHTML(data.name);
  }
}

function generateFormCompletionEmailHTML(name: string): string {
  const firstName = name.split(" ")[0];

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Open up</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
      </head>
      <body style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 1000px; margin: 0 auto; padding: 4px;">
        <p>Hey ${firstName},</p>
        
        <p>You filled out the form… which tells me something big:</p>
        
        <p>You're curious… maybe even excited… about building your own AI agent.</p>
        
        <p><strong>But here's the truth: curiosity doesn't build agents. Action does.</strong></p>
        
        <p>In the 1-on-1 call we will map out exactly what agent you should build, how to do it fast, and what steps will make it real.</p>
        
        <p>🟣 You don't need experience</p>
        <p>🟣 You don't need the perfect idea yet</p>
        <p>🟣 You just need to be ready to build</p>
        
        <p>You've already taken the first step. Don't let hesitation stall your momentum.</p>
        
        <p><a href="https://calendly.com/simeon-cover-io/1-1-ai-agent-mentorship">Click here to book your session now »</a></p>
        
        <p>I'll walk you through everything.</p>
        
        <p>Simeon</p>
      </body>
    </html>
  `;
}

function generateBookingConfirmationEmailHTML(name: string): string {
  const firstName = name.split(" ")[0];

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Your 1:1 strategy session is confirmed</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
      </head>
      <body style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 1000px; margin: 0 auto; padding: 4px;">
        <p>Hey ${firstName},</p>
        
        <p>You're officially booked in.</p>
        
        <p>This isn't a webinar. It's you and me.</p>
        
        <p>What we'll cover in our 1:1 call:</p>
        
        <p style="padding-right: 10px;"> 🟣 What type of AI agent is right for you, or how you can manifest your idea</p>
        <p style="padding-right: 10px;"> 🟣 How to build it even if you've never done this before</p>
        <p style="padding-right: 10px;"> 🟣 A gameplan to make it real, fast!</p>
        
        <p>Check your email for the Google Meet link and calendar invite. Add it now so you don't miss it.</p>
        
        <p>See you soon,</p>
        
        <p>Simeon</p>
      </body>
    </html>
  `;
}
