"use client";

import { usePathname } from "next/navigation";

export function useIsTreePage() {
  const pathname = usePathname();
  return pathname === "/tree";
}
