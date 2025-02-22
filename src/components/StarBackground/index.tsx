import React from "react";
import { motion } from "framer-motion";

const SparkleEffect = ({ total }: { total: number }) => {
  return [...Array(total)].map((_, i) => {
    const size = Math.random() * 6 + 3;
    const duration = 2 + Math.random() * 3;
    const delay = Math.random() * 2;

    return (
      <motion.div
        key={`sparkle-${i}`}
        className={`absolute rounded-full ${
          Math.random() > 0.5 ? "bg-gray-800" : "bg-gray-600"
        }`}
        style={{
          width: size,
          height: size,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          opacity: Math.random() * 0.5 + 0.2,
        }}
        animate={{
          x: [0, Math.random() * 100 - 50],
          y: [0, Math.random() * 100 - 50],
          scale: [1, Math.random() + 0.2],
          opacity: [null, 0.1, 0.5],
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          repeatType: "reverse",
          delay: delay,
          ease: "easeInOut",
        }}
      />
    );
  });
};

const ShiningStars = ({ total }: { total: number }) => {
  return [...Array(total)].map((_, i) => {
    const size = Math.random() * 4 + 2;
    return (
      <motion.div
        key={`star-${i}`}
        className="absolute bg-gray-800 rounded-full"
        style={{
          width: size,
          height: size,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 2 + Math.random() * 2,
          repeat: Infinity,
          delay: Math.random() * 2,
        }}
      />
    );
  });
};

export const StarBackground = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`relative overflow-hidden bg-white ${className}`}>
      <div className="absolute inset-0">
        <SparkleEffect total={100} />
        <ShiningStars total={80} />
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default StarBackground;
