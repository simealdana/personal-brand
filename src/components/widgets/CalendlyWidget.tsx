"use client";

import { InlineWidget } from "react-calendly";
import { colors } from "@/lib/design-tokens/colors";
import { useCalendlyEvent } from "@/hooks/useCalendlyEvent";
import { calendlyConfig } from "@/lib/config/calendly";

export default function CalendlyWidget() {
  useCalendlyEvent({
    onError: (error) => {
      console.error("Calendly event error:", error.message);
    },
  });

  return (
    <div className="w-full max-w-4xl mx-auto">
      <InlineWidget
        url={calendlyConfig.eventTypes.mentorship}
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
