"use client";

import React from "react";
import { useTheme } from "@/lib/ui/useTheme";
import { H1, H3 } from "@/lib/ui/heading";
import { Paragraph, ArchitectsDaughterText } from "@/lib/ui/text";
import { List } from "@/lib/ui/list";
import { Button } from "@/lib/ui/button";
import { Personal } from "@/lib/ui/testimony";
import { PrimaryCheckIcon } from "@/lib/ui/icons";
import Logo from "@/lib/ui/logo/logo";
import { Send } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const { colors } = useTheme();

  const benefitsList = [
    {
      text: "1:1 sessions to build your AI agent; step-by-step, together",
    },
    {
      text: "Unlimited & personalized support between calls",
    },
    {
      text: "Launch a ready-to-sell AI agent in just 4 weeks",
    },
  ];

  const danielTestimony = {
    author: {
      name: "DANIEL G",
      title: "Top 1% Upwork Freelancer",
      initials: "DG",
    },
    rating: 5,
    image: "/images/testimony/daniel_image.png",
  };

  return (
    <div className="w-full bg-white py-8 pb-10 px-4 lg:px-0">
      <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-16 py-10">
        <div className="w-full space-y-6 lg:ml-20">
          <div className="mb-10">
            <Logo
              title="SIMEON ALDANA"
              subtitle="AI Agent Builder & 1:1 Mentor"
              showVerifiedIcon={true}
              showRocketIcon={true}
            />
          </div>
          <H1 bold className="my-4">
            I will help you Launch &{" "}
            <span style={{ color: colors.primary }}>Sell</span> Your First AI
            Agent <span style={{ color: colors.primary }}>in Just 30 Days</span>
          </H1>

          <Paragraph>
            This isn&apos;t a &quot;course&quot;. This is hands-on 1:1
            mentorship where I personally help you build and turn your idea into
            a working, ready-to-sell AI agent.
          </Paragraph>

          <List
            items={benefitsList}
            variant="withIcons"
            icon={<PrimaryCheckIcon />}
            itemClassName="font-bold"
          />

          <Button
            variant="primary"
            size="md"
            icon={<Send size={16} />}
            iconPosition="left"
          >
            <H3 color={colors.white}>
              BOOK YOUR FIRST FREE 1:1 STRATEGY SESSION
            </H3>
          </Button>
          <div>
            <ArchitectsDaughterText>
              &quot;if you get the chance to work with Simeon. DO IT!!&quot;
            </ArchitectsDaughterText>
          </div>

          <Personal {...danielTestimony} />
        </div>

        <div className="w-full">
          <div
            className="border-2 lg:border-r-0 p-2.5 rounded-2xl lg:-mr-8 lg:mt-10 max-w-sm lg:max-w-none mx-auto lg:mx-0"
            style={{
              borderColor: colors.primary,
              backgroundColor: colors.bgSecondary,
            }}
          >
            <div className="relative h-[300px] lg:h-[495px] p-1 rounded-lg">
              <Image
                src="/images/utils/hero-main-image.png"
                alt="AI Agent Interface Screenshot"
                fill
                className="object-contain rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
