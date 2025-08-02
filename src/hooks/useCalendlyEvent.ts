import { useRouter } from "next/navigation";
import { useCalendlyEventListener } from "react-calendly";
import { emailService } from "@/lib/email/service";
import { calendlyConfig } from "@/lib/config/calendly";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export interface CalendlyInviteeData {
  email: string;
  name: string;
  timezone: string;
  eventStartTime: string;
  eventEndTime: string;
  questionsAndAnswers?: Array<{
    question: string;
    answer: string;
  }>;
}

export interface UseCalendlyEventOptions {
  onEventScheduled?: (inviteeData: CalendlyInviteeData) => void | Promise<void>;
  onError?: (error: Error) => void;
  redirectTo?: string;
  enableAnalytics?: boolean;
  enableEmailConfirmation?: boolean;
  emailTemplate?: string;
}

export function useCalendlyEvent(options: UseCalendlyEventOptions = {}) {
  const router = useRouter();
  const {
    onEventScheduled,
    onError,
    redirectTo = calendlyConfig.redirects.confirmation,
    enableAnalytics = true,
    enableEmailConfirmation = calendlyConfig.email.enabled,
  } = options;

  useCalendlyEventListener({
    onEventScheduled: async (e) => {
      try {
        if (enableAnalytics && typeof window !== "undefined" && window.gtag) {
          window.gtag("event", "calendly_event_scheduled", {
            event_category: calendlyConfig.analytics.eventCategory,
            event_label: calendlyConfig.analytics.eventLabel,
            value: calendlyConfig.analytics.eventValue,
          });
        }

        const inviteeUri = e.data.payload.invitee.uri;
        const eventUri = e.data.payload.event.uri;
        const inviteeUuid = inviteeUri.split("/").pop();
        const eventUuid = eventUri.split("/").pop();

        if (!inviteeUuid || !eventUuid) {
          throw new Error("Invalid Calendly URIs");
        }

        const response = await fetch("/api/calendly-invitee", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ eventUuid, inviteeUuid }),
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch invitee data: ${response.status}`);
        }

        const inviteeData: CalendlyInviteeData = await response.json();

        if (onEventScheduled) {
          await onEventScheduled(inviteeData);
        }

        if (enableEmailConfirmation) {
          const emailResult = await emailService.sendBookingConfirmationEmail(
            inviteeData
          );
          if (!emailResult.success) {
            throw new Error(`Email sending failed: ${emailResult.error}`);
          }
        }

        router.push(redirectTo);
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : "Unknown error";
        onError?.(
          new Error(`Calendly event processing failed: ${errorMessage}`)
        );
      }
    },
  });
}
