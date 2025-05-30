"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "../styles.module.css";

interface AnimatedLinkProps {
  href: string;
  label: string;
  index: number;
  target?: string;
}

export default function AnimatedLink({
  href,
  label,
  index,
  target,
}: AnimatedLinkProps) {
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.1 * index,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link
        href={href}
        className="tree-page__link w-full"
        passHref
        target={target}
      >
        <Button
          variant="outline"
          className={cn(
            "tree-page__button w-full py-6 bg-white/90 hover:bg-white/100 text-slate-800 hover:text-black rounded-full border-none text-base font-medium",
            styles.linkButton
          )}
        >
          {label}
        </Button>
      </Link>
    </motion.div>
  );
}
