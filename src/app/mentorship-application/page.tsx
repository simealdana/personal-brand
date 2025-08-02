import { colors } from "@/lib/design-tokens/colors";
import { H1Server } from "@/lib/ui/heading";
import { Paragraph } from "@/lib/ui/text";
import { CalendlyWidget } from "@/components/widgets";

export default function MentorshipApplicationPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <div className="max-w-7xl lg:max-w-[1920px] mx-auto">
        <div className="container mx-auto py-20 text-center">
          <H1Server className="text-center ">
            <span style={{ color: colors.primary }}> NEXT STEPS! </span>
            LOCK IN YOUR{" "}
            <span className="underline" style={{ color: colors.primary }}>
              FIRST FREE 1:1 SESSION
            </span>{" "}
            BY LOCKING IN
          </H1Server>
          <H1Server className="text-center mb-2">
            A TIME IN THE CALENDAR BELOW! 👇
          </H1Server>

          <Paragraph>
            <span className="font-bold"> Note:</span> if you do NOT want to
            <span className="font-bold">
              build and launch a sellable AI agent
            </span>{" "}
            within the next 30 days;
          </Paragraph>
          <Paragraph>
            this mentorship is NOT for you and I won&apos;t be able to help you.
          </Paragraph>

          <CalendlyWidget />
        </div>
      </div>
    </div>
  );
}
