"use client";

import React from "react";
import { useTheme } from "@/lib/ui/useTheme";
import { H1, H3 } from "@/lib/ui/heading";
import { AnimatedElement } from "@/lib/ui/animated";
import { Button } from "@/lib/ui/button";
import { ProgressSteps, Step } from "@/lib/ui/progress-steps";

import { Send } from "lucide-react";
import { useActionButton } from "@/hooks/useActionButton";

const experienceSteps: Step[] = [
  {
    id: "1",
    title: "Good news.",
    description:
      "You don&apos;t need to have everything figured out. In the first step, I&apos;ll help you choose a profitable AI-agent idea or help you map out how to build it out your idea.",
  },
  {
    id: "2",
    title: "More good news.",
    description:
      "You won&apos;t be stuck watching tutorials. You&apos;ll actually build something that works alongside with me. Together, we&apos;ll launch your first AI-agent doing real work.",
    isHighlighted: true,
  },
  {
    id: "3",
    title: "EVEN MORE good news.",
    description:
      "By the end, your AI-agent will be live — and ready to sell. You&apos;ll know how to position it, price it, and pitch it with confidence.",
  },
];

export default function ExperienceSection() {
  const { colors } = useTheme();
  const handleAction = useActionButton();

  return (
    <section className="w-full bg-white py-16 px-4 lg:px-8 container mx-auto">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <AnimatedElement as="div" animation="slideUp" duration={0.6}>
            <H1 bold className="mb-6">
              YOU DON&apos;T NEED ANY EXPERIENCE.
            </H1>
          </AnimatedElement>

          <div className="flex justify-center">
            <AnimatedElement
              as="p"
              animation="slideUp"
              delay={0.2}
              className="max-w-2xl mx-auto text-center"
              color={colors.textSecondary}
              isText={true}
            >
              You don&apos;t need to know how to code or. We&apos;ll use visual
              tools like n8n, Airtable, Make, and Claude. I&apos;ll walk you
              through every single detail.
            </AnimatedElement>
          </div>
        </div>

        <AnimatedElement
          as="div"
          animation="slideUp"
          delay={0.4}
          duration={0.6}
        >
          <ProgressSteps
            steps={experienceSteps}
            currentStep={2}
            showTimeline={true}
            variant="horizontal"
            activeStepColor={colors.primary}
            showAsList={false}
            className="mb-12"
          />
        </AnimatedElement>

        <AnimatedElement
          as="div"
          animation="slideUp"
          delay={0.8}
          duration={0.6}
          className="flex justify-center"
        >
          <Button
            variant="primary"
            size="lg"
            icon={<Send size={20} />}
            iconPosition="left"
            onClick={handleAction}
            className="px-8 py-4 text-lg font-bold"
          >
            <H3 color={colors.white}>
              BOOK YOUR FIRST FREE 1:1 STRATEGY SESSION
            </H3>
          </Button>
        </AnimatedElement>
      </div>
    </section>
  );
}
