import { type EmailTemplateData } from "./templates";

export interface EmailServiceConfig {
  baseUrl?: string;
  retryAttempts?: number;
  retryDelay?: number;
}

export interface EmailResponse {
  success: boolean;
  emailId?: string;
  error?: string;
}

export class EmailService {
  private baseUrl: string;
  private retryAttempts: number;
  private retryDelay: number;

  constructor(config: EmailServiceConfig = {}) {
    this.baseUrl = config.baseUrl || "/api/email";
    this.retryAttempts = config.retryAttempts || 3;
    this.retryDelay = config.retryDelay || 1000;
  }

  async sendEmail(
    template: string,
    data: EmailTemplateData,
    attempt: number = 1
  ): Promise<EmailResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/${template}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        return {
          success: true,
          emailId: result.emailId,
        };
      }

      if (attempt < this.retryAttempts) {
        await this.delay(this.retryDelay * attempt);
        return this.sendEmail(template, data, attempt + 1);
      }

      return {
        success: false,
        error: result.error || "Failed to send email",
      };
    } catch (error) {
      if (attempt < this.retryAttempts) {
        await this.delay(this.retryDelay * attempt);
        return this.sendEmail(template, data, attempt + 1);
      }

      return {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  }

  async sendFormCompletionEmail(
    data: EmailTemplateData
  ): Promise<EmailResponse> {
    return this.sendEmail("formCompletion", data);
  }

  async sendBookingConfirmationEmail(
    data: EmailTemplateData
  ): Promise<EmailResponse> {
    return this.sendEmail("bookingConfirmation", data);
  }

  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

export const emailService = new EmailService();
