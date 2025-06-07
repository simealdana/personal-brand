"use client";

import { useIsTreePage } from "@/hooks/usePathname";
import Footer from "./Footer";

export default function ConditionalFooter() {
  const isTreePage = useIsTreePage();

  if (isTreePage) {
    return null;
  }

  return <Footer />;
}
