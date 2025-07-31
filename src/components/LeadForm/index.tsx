"use client";

import React, { useState } from "react";
import { Button } from "@/lib/ui/button";
import { useTheme } from "@/lib/ui/useTheme";
import { Input } from "@/lib/ui/input";
import { RadioButtonList } from "@/lib/ui/radio-button-list";
import { H3 } from "@/lib/ui/heading";

interface LeadFormData {
  name: string;
  email: string;
  hasIdea: string;
  budget: string;
}

interface LeadFormProps {
  onSubmit: (data: LeadFormData) => void;
  isLoading?: boolean;
}

export default function LeadForm({
  onSubmit,
  isLoading = false,
}: LeadFormProps) {
  const { colors } = useTheme();
  const [formData, setFormData] = useState<LeadFormData>({
    name: "",
    email: "",
    hasIdea: "",
    budget: "",
  });

  const handleInputChange = (field: keyof LeadFormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-2">
          <div className="w-full md:w-1/2">
            <Input
              id="name"
              label="What's your name?"
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              placeholder="Write your name here"
              required
            />
          </div>
          <div className="w-full md:w-1/2">
            <Input
              id="email"
              label="What's your email?"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="Write your best email here"
              required
            />
          </div>
        </div>

        <RadioButtonList
          label="Do you have a clear idea of what AI-agent you want to build?"
          name="hasIdea"
          options={[
            {
              value: "yes",
              label: "Yes, I have a clear idea..",
            },
            {
              value: "no",
              label: "No, I'm hoping you can help me with that?",
            },
          ]}
          value={formData.hasIdea}
          onChange={(value) => handleInputChange("hasIdea", value)}
          required
        />

        <RadioButtonList
          label="What's your budget for building your AI-Agent?"
          name="budget"
          options={[
            {
              value: "500-1000",
              label: "$500-$1000",
            },
            {
              value: "1000-2000",
              label: "$1000-$2000",
            },
            {
              value: "2000-5000",
              label: "$2000-$5000",
            },
          ]}
          value={formData.budget}
          onChange={(value) => handleInputChange("budget", value)}
          required
        />
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full py-3 sm:py-4 text-base sm:text-lg font-semibold"
        bg={colors.primary}
        textColor="white"
      >
        <H3 color={colors.white}>
          {isLoading ? "Submitting..." : "PICK A TIME FOR YOUR FREE SESSION"}
        </H3>
      </Button>
    </form>
  );
}
