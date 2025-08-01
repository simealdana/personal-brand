"use client";

import { useRouter } from "next/navigation";
import { InlineWidget, useCalendlyEventListener } from "react-calendly";
import { colors } from "@/lib/design-tokens/colors";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function CalendlyWidget() {
  const router = useRouter();

  useCalendlyEventListener({
    onEventScheduled: () => {
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "calendly_event_scheduled", {
          event_category: "mentorship",
          event_label: "1-1-ai-agent-mentorship",
          value: 1,
        });
      }
      router.push("/mentorship-application/confirmation");
    },
  });

  return (
    <div className="w-full max-w-4xl mx-auto">
      <InlineWidget
        url="https://calendly.com/simeon-cover-io/1-1-ai-agent-mentorship"
        styles={{
          height: "700px",
          minWidth: "300px",
          width: "100%",
          border: "none",
        }}
        pageSettings={{
          backgroundColor: colors.bgPrimary.replace("#", ""),
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: colors.primary.replace("#", ""),
          textColor: colors.textSecondary.replace("#", ""),
        }}
        utm={{
          utmCampaign: "mentorship-application",
          utmSource: "website",
          utmMedium: "inline-widget",
        }}
      />
    </div>
  );
}
