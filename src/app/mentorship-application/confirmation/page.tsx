import { colors } from "@/lib/design-tokens/colors";
import { typography } from "@/lib/design-tokens/typography";
import Logo from "@/lib/ui/logo/logo";
import { H1, H2 } from "@/lib/ui/heading";
import { Span, Paragraph } from "@/lib/ui/text";

export default function ConfirmationPage() {
  return (
    <div className="min-h-screen  py-12">
      <div className="w-full mx-auto p-8 px-4 md:px-20">
        <div className="mb-8 flex justify-center w-full">
          <Logo
            title="SIMEON ALDANA"
            subtitle="AI Agent Builder & 1:1 Mentor"
            showVerifiedIcon={true}
            showRocketIcon={true}
          />
        </div>

        <H1 className="text-center mb-2">
          <span style={{ color: colors.primary }}>CONGRATS!</span> YOUR
          APPOINTMENT IS CONFIRMED! PLEASE FOLLOW THE STEPS BELOW FOR SOME
          IMPORTANT INSTRUCTIONS ABOUT YOUR APPOINTMENT...
        </H1>

        <hr className="border-gray-300 mb-8" />

        <div className="flex flex-col items-center justify-center">
          <div className="mb-8 max-w-md text-left">
            <H2 className="mb-6">
              DO THESE{" "}
              <span
                style={{ color: colors.primary, textDecoration: "underline" }}
              >
                3 THINGS
              </span>{" "}
              RIGHT NOW:
            </H2>

            <div className="space-y-4">
              <div className="mt-2">
                <Paragraph
                  style={{
                    fontWeight: "bold",
                    fontFamily: typography.fontFamily.primary,
                  }}
                >
                  STEP 1: CHECK YOUR EMAIL AND ACCEPT THE CALENDAR INVITE
                </Paragraph>
                <Span>
                  Sometimes the invite lands in Spam or Promotions, so make sure
                  it&apos;s added to your calendar so you don&apos;t miss the
                  session.
                </Span>
              </div>

              <div>
                <Paragraph
                  style={{
                    fontWeight: "bold",
                    fontFamily: typography.fontFamily.primary,
                  }}
                >
                  STEP 2: KEEP AN EYE ON YOUR PHONE OR EMAIL
                </Paragraph>
                <Span>
                  I&apos;ll confirm the call or send over pre-call material.
                </Span>
              </div>

              <div>
                <Paragraph
                  style={{
                    fontWeight: "bold",
                    fontFamily: typography.fontFamily.primary,
                  }}
                >
                  STEP 3: READ THE SESSION INBOX BELOW
                </Paragraph>
                <Span>
                  It&apos;ll walk you through what to expect on the call, and
                  who this mentorship is really for.
                </Span>
              </div>
            </div>
          </div>
          <div
            className="rounded-lg p-6 mb-8 max-w-md"
            style={{
              border: `2px solid ${colors.lightPurple}`,
              backgroundColor: `${colors.lightPurple}10`,
            }}
          >
            <H2 color={colors.primary} className="mb-4">
              HOW YOUR 1:1 STRATEGY SESSIONS WILL WORK!
            </H2>

            <div className="flex items-start gap-2 mb-4 text-left">
              <span className="text-gray-600">🔒</span>
              <Span>
                Your call is confirmed, but here&apos;s how to make sure
                it&apos;s worth your time (and mine):
              </Span>
            </div>

            <ul className="space-y-3 text-left">
              <li className="flex items-start gap-2">
                <span style={{ color: colors.primary }}>•</span>
                <Span>
                  <strong>Bring your idea and goals.</strong> You don&apos;t
                  need to have it figured out, but I&apos;ll ask questions to
                  help you clarify what AI agent to build and how to launch it.
                </Span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: colors.primary }}>•</span>
                <Span>
                  <strong>Come ready to take action.</strong> This isn&apos;t a
                  &quot;see what happens&quot; chat; it&apos;s for people
                  serious about building an AI agent that works (and sells).
                </Span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: colors.primary }}>•</span>
                <Span>
                  <strong>
                    Come in with a mindset to invest in yourself and in your AI
                    agent.
                  </strong>
                </Span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: colors.primary }}>•</span>
                <Span>
                  <strong>No reschedules.</strong> We will not reserve
                  additional consultation spots.
                </Span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
