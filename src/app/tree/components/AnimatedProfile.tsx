"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../styles.module.css";

interface AnimatedProfileProps {
  imageSrc: string;
  alt: string;
}

export default function AnimatedProfile({
  imageSrc,
  alt,
}: AnimatedProfileProps) {
  return (
    <motion.div
      className={cn(
        "tree-page__profile-container relative w-24 h-24 rounded-full overflow-hidden border-2 border-white/20",
        styles.profileContainer
      )}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      whileHover={{ scale: 1.05, borderColor: "rgba(255, 255, 255, 0.4)" }}
    >
      <Image src={imageSrc} alt={alt} className="object-cover" fill priority />
    </motion.div>
  );
}
