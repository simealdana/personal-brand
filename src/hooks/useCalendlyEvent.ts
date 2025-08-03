import { useRouter } from "next/navigation";
import { useCalendlyEventListener } from "react-calendly";
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
  emailTemplate?: string;
}

export function useCalendlyEvent(options: UseCalendlyEventOptions = {}) {
  const router = useRouter();
  const {
    onEventScheduled,
    onError,
    redirectTo = calendlyConfig.redirects.confirmation,
    enableAnalytics = true,
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

        const response = await fetch("/api/leads/calendly-booking", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ eventUuid, inviteeUuid }),
        });

        if (!response.ok) {
          throw new Error(
            `Failed to process Calendly booking: ${response.status}`
          );
        }

        const bookingData = await response.json();

        if (onEventScheduled) {
          const inviteeData: CalendlyInviteeData = {
            email: bookingData.data.email,
            name: bookingData.data.name,
            timezone: "America/Mexico_City",
            eventStartTime: bookingData.data.event_start,
            eventEndTime: bookingData.data.event_end,
          };
          await onEventScheduled(inviteeData);
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
