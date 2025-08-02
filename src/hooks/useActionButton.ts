"use client";

import { useModalState } from "./useModalState";

export const useActionButton = () => {
  const { openModal } = useModalState("leads-form");

  const handleAction = () => {
    openModal();
  };

  return handleAction;
};
