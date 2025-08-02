"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useCallback } from "react";

export const useModalState = (paramName: string = "modal") => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const isOpen = searchParams.get(paramName) === "true";

  const openModal = useCallback(() => {
    const params = new URLSearchParams(searchParams);
    params.set(paramName, "true");
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }, [searchParams, router, pathname, paramName]);

  const closeModal = useCallback(() => {
    const params = new URLSearchParams(searchParams);
    params.delete(paramName);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }, [searchParams, router, pathname, paramName]);

  return {
    isOpen,
    openModal,
    closeModal,
  };
};
