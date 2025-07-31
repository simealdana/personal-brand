"use client";

import React from "react";

import { H1, H3 } from "@/lib/ui/heading";
import { Button } from "@/lib/ui/button";
import { Send } from "lucide-react";
import { useActionButton } from "@/hooks/useActionButton";
import { useTheme } from "@/lib/ui/useTheme";
import { Span } from "@/lib/ui/text";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: "1",
    question: "What if I'm not technical at all?",
    answer:
      "That's exactly who this is for. I'll guide you through every step; visually, slowly, and practically. You'll know just enough to launch, without being overwhelmed.",
  },
  {
    id: "2",
    question: "Do I need an idea already?",
    answer:
      "Not at all. Most students come in with nothing. I'll help you pick a profitable, buildable idea in the first session depending on your interests.",
  },
  {
    id: "3",
    question: "Will I actually finish it?",
    answer: "Yes, because we don't stop until it's done.",
  },
  {
    id: "4",
    question: "How much time does it take?",
    answer:
      "You'll need around 2-4 focused hours per week, including the live call.",
  },
  {
    id: "5",
    question: "What if I'm not sure yet?",
    answer:
      "You can still apply for the first free 1:1 call there's no commitment. I'll review it and let you know if we're a fit.",
  },
  {
    id: "6",
    question: "Will I own what I build?",
    answer:
      "Absolutely. Everything you create during the mentorship is 100% yours. I'm here to guide you, not take ownership of your work.",
  },
];

export default function FAQSection() {
  const { colors } = useTheme();
  const handleAction = useActionButton();

  return (
    <section className="py-16 px-4 container mx-auto">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <H1 bold className="mb-4">
            YOU MIGHT BE WONDERING...
          </H1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {faqData.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-lg p-6 border border-purple-200 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4 ">
                <span className="text-orange-500 font-bold text-lg">?</span>
                <H3 className="font-bold text-black text-lg">{faq.question}</H3>
              </div>
              <Span>{faq.answer}</Span>
            </div>
          ))}
        </div>

        <div className="flex justify-center ">
          <Button
            size="lg"
            icon={<Send size={24} />}
            iconPosition="left"
            onClick={handleAction}
            bg={colors.primary}
            textColor="white"
            className="px-8 py-4"
          >
            <H3 color="white">BOOK YOUR FIRST FREE 1:1 STRATEGY SESSION</H3>
          </Button>
        </div>
      </div>
    </section>
  );
}
