"use client";

import React from "react";
import { Modal } from "@/lib/ui/modal";
import { H2 } from "@/lib/ui/heading";
import { Span } from "@/lib/ui/text";
import { useTheme } from "@/lib/ui/useTheme";
import LeadForm from "../LeadForm";
import { useApply } from "@/hooks/api/useApply";

interface LeadFormData {
  name: string;
  email: string;
  hasIdea: string;
  budget: string;
}

interface ModalLeadsFormProps {
  isOpen: boolean;
  onClose?: () => void;
  onSubmit?: (data: LeadFormData) => void;
}

export default function ModalLeadsForm({
  isOpen,
  onClose,
  onSubmit,
}: ModalLeadsFormProps) {
  const { colors } = useTheme();
  const { submitApplication, isLoading } = useApply();

  const handleSubmit = async (data: LeadFormData) => {
    try {
      if (onSubmit) {
        await onSubmit(data);
      } else {
        await submitApplication(data);
      }
      onClose?.();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose || (() => {})}
      size="xl"
      showCloseButton={false}
      closeOnOverlayClick={false}
    >
      <div className="mb-6 text-center space-y-2 px-8 py-4">
        <H2 className="text-sm font-medium mb-2" color={colors.primary}>
          WELL, THIS POPUP IS ALREADY POPPED UP...
        </H2>

        <H2 className="mb-2">
          SO YOU MIGHT ASWELL CLAIM YOUR{" "}
          <span className="underline whitespace-nowrap">
            FREE STRATEGY SESSION
          </span>
          👇.
        </H2>

        <Span>
          *Only schedule a call if you&apos;re ready to build a sellable
          AI-Agent.
        </Span>
      </div>

      <LeadForm onSubmit={handleSubmit} isLoading={isLoading} />
    </Modal>
  );
}
