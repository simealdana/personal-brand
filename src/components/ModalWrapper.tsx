"use client";

import { useModalState } from "@/hooks/useModalState";
import ModalLeadsForm from "./ModalLeadsForm";

export default function ModalWrapper() {
  const { isOpen, closeModal } = useModalState("leads-form");

  return <ModalLeadsForm isOpen={isOpen} onClose={closeModal} />;
}
