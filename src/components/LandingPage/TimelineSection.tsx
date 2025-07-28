"use client";

import React from "react";
import { useTheme } from "@/lib/ui/useTheme";
import { H1 } from "@/lib/ui/heading";
import { Paragraph } from "@/lib/ui/text";
import { ProgressSteps, type Step } from "@/lib/ui/progress-steps";
import Image from "next/image";
import { SimpleCheckIcon } from "@/lib/ui/icons/simple-check.icon";
import { useDevice } from "@/hooks/useDevice";

export default function TimelineSection() {
  const { colors } = useTheme();
  const { isMobile } = useDevice();

  const partnerLogos = [
    { name: "n8n", src: "/images/utils/logos/n8n-logo.png" },
    { name: "Supabase", src: "/images/utils/logos/supabase-logo.png" },
    { name: "Claude", src: "/images/utils/logos/claude-logo.png" },
    { name: "OpenAI", src: "/images/utils/logos/open-ai-logo.png" },
    { name: "Cursor", src: "/images/utils/logos/cursor-logo.png" },
  ];

  const timelineSteps: Step[] = [
    {
      id: "today",
      label: "TODAY",
      title: "Get started.",
      items: [
        "Pick a profitable AI-agent idea",
        "Map out your tech stack",
        "Book your first 1:1 strategy call",
      ],
    },
    {
      id: "day7",
      label: "DAY 7",
      title: "Get comfortable.",
      items: [
        "Launch your first automation",
        "See your AI-agent do real work",
        "Build your AI-agent with me.",
      ],
    },
    {
      id: "day30",
      label: "DAY 30",
      title: "Start selling AI-agents.",
      items: [
        "AI-Agent ready and launched",
        "Get your first sales (or be ready to)",
        "Know how to price, and sell it",
      ],
    },
  ];

  return (
    <div
      className="w-full pb-10 pt-6"
      style={{ backgroundColor: colors.bgSecondary }}
    >
      <div className="py-16 px-4 lg:px-8 container mx-auto">
        <div className="text-center mb-16">
          <Paragraph
            color={colors.textSecondary}
            style={{ marginBottom: "32px" }}
          >
            Built with leading AI companies
          </Paragraph>
          <div className="flex justify-center items-center gap-8 lg:gap-12 flex-wrap">
            {partnerLogos.map((logo, index) => (
              <div key={index} className="flex items-center">
                <Image
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  width={120}
                  height={40}
                  className="h-8 lg:h-10 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center my-24">
          <H1 bold className="mb-4">
            WHAT YOU CAN ACHIEVE IN{" "}
            <span style={{ color: colors.primary }}>30</span>{" "}
            <span style={{ color: colors.primary }}>DAYS</span> WITH ME
          </H1>
        </div>

        <div className="max-w-6xl mx-auto">
          <ProgressSteps
            steps={timelineSteps}
            currentStep={2}
            variant={isMobile ? "vertical" : "horizontal"}
            itemIcon={<SimpleCheckIcon />}
            itemClassName="font-medium"
          />
        </div>
      </div>
    </div>
  );
}
