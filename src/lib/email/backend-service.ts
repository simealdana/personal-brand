import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import { EmailType, EmailStatus, CurrentEmailFlow } from "@/types";
import { generateEmailHTML, EMAIL_TEMPLATES } from "./templates";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const resend = new Resend(process.env.RESEND_API_KEY);

export interface EmailData {
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

export interface SendEmailResult {
  success: boolean;
  emailId?: string;
  error?: string;
}

export class BackendEmailService {
  /**
   * Send an email and create a record in the database
   */
  async sendEmail(
    leadId: string,
    emailType: EmailType,
    flow: CurrentEmailFlow,
    sequenceNumber: number,
    emailData: EmailData,
    scheduledFor?: Date
  ): Promise<SendEmailResult> {
    try {
      const emailConfig = EMAIL_TEMPLATES[emailType];
      const sendDate = scheduledFor || new Date();

      // 1. Create email record in database
      const { data: emailRecord, error: emailInsertError } = await supabase
        .from("emails")
        .insert({
          lead_id: leadId,
          email_type: emailType,
          flow,
          sequence_number: sequenceNumber,
          status: EmailStatus.PENDING,
          scheduled_for: sendDate.toISOString(),
        })
        .select()
        .single();

      if (emailInsertError) {
        console.error("Error inserting email record:", emailInsertError);
        return {
          success: false,
          error: "Failed to create email record",
        };
      }

      // 2. Generate email content
      const emailHtml = generateEmailHTML(emailType, emailData);
      const subject = emailConfig.subject.replace(
        "{{First.name}}",
        emailData.name.split(" ")[0]
      );

      // 3. Send the email
      const { error: emailError } = await resend.emails.send({
        from: emailConfig.from,
        to: emailData.email,
        subject,
        html: emailHtml,
      });

      if (emailError) {
        console.error("Error sending email:", emailError);

        // Update email status to failed
        await supabase
          .from("emails")
          .update({
            status: EmailStatus.FAILED,
            sent_at: new Date().toISOString(),
          })
          .eq("id", emailRecord.id);

        return {
          success: false,
          error: emailError.message,
        };
      }

      // 4. Update email status to sent
      await supabase
        .from("emails")
        .update({
          status: EmailStatus.SENT,
          sent_at: new Date().toISOString(),
        })
        .eq("id", emailRecord.id);

      // 5. Update lead's last email sent
      await supabase
        .from("leads")
        .update({
          last_email_sent_at: new Date().toISOString(),
        })
        .eq("id", leadId);

      return {
        success: true,
        emailId: emailRecord.id,
      };
    } catch (error) {
      console.error("Error in BackendEmailService.sendEmail:", error);
      return {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  }

  /**
   * Send form completion email (immediate)
   */
  async sendFormCompletionEmail(
    leadId: string,
    emailData: EmailData
  ): Promise<SendEmailResult> {
    return this.sendEmail(
      leadId,
      EmailType.FORM_FOLLOWUP_1,
      CurrentEmailFlow.FORM_NO_CALL,
      1,
      emailData
    );
  }

  /**
   * Send booking confirmation email
   */
  async sendBookingConfirmationEmail(
    leadId: string,
    emailData: EmailData
  ): Promise<SendEmailResult> {
    return this.sendEmail(
      leadId,
      EmailType.CALL_CONFIRMATION,
      CurrentEmailFlow.CALL_REMINDERS,
      1,
      emailData
    );
  }

  /**
   * Send scheduled email (for future delivery)
   */
  async scheduleEmail(
    leadId: string,
    emailType: EmailType,
    flow: CurrentEmailFlow,
    sequenceNumber: number,
    emailData: EmailData,
    scheduledFor: Date
  ): Promise<SendEmailResult> {
    try {
      // Only create the record, don't send immediately
      const { data: emailRecord, error: emailInsertError } = await supabase
        .from("emails")
        .insert({
          lead_id: leadId,
          email_type: emailType,
          flow,
          sequence_number: sequenceNumber,
          status: EmailStatus.PENDING,
          scheduled_for: scheduledFor.toISOString(),
        })
        .select()
        .single();

      if (emailInsertError) {
        console.error("Error scheduling email:", emailInsertError);
        return {
          success: false,
          error: "Failed to schedule email",
        };
      }

      return {
        success: true,
        emailId: emailRecord.id,
      };
    } catch (error) {
      console.error("Error in BackendEmailService.scheduleEmail:", error);
      return {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  }
}

// Export singleton instance
export const backendEmailService = new BackendEmailService();
