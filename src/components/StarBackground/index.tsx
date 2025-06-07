"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";

// Generamos los elementos de efectos visuales una sola vez
const generateSparkleEffects = (total: number) => {
  return [...Array(total)].map((_, i) => {
    const size = Math.random() * 6 + 3;
    const duration = 2 + Math.random() * 3;
    const delay = Math.random() * 2;
    const left = `${Math.random() * 100}%`;
    const top = `${Math.random() * 100}%`;
    const opacity = Math.random() * 0.5 + 0.2;
    const xMove = Math.random() * 100 - 50;
    const yMove = Math.random() * 100 - 50;
    const scale = Math.random() + 0.2;
    const isWhite = Math.random() > 0.5;

    return (
      <motion.div
        key={`sparkle-${i}`}
        className={`absolute rounded-full ${
          isWhite ? "bg-gray-800" : "bg-gray-600"
        }`}
        style={{
          width: size,
          height: size,
          left,
          top,
          opacity,
        }}
        animate={{
          x: [0, xMove],
          y: [0, yMove],
          scale: [1, scale],
          opacity: [null, 0.1, 0.5],
        }}
        transition={{
          duration,
          repeat: Infinity,
          repeatType: "reverse",
          delay,
          ease: "easeInOut",
        }}
      />
    );
  });
};

const generateShiningStars = (total: number) => {
  return [...Array(total)].map((_, i) => {
    const size = Math.random() * 4 + 2;
    const left = `${Math.random() * 100}%`;
    const top = `${Math.random() * 100}%`;
    const duration = 2 + Math.random() * 2;
    const delay = Math.random() * 2;

    return (
      <motion.div
        key={`star-${i}`}
        className="absolute bg-gray-800 rounded-full"
        style={{
          width: size,
          height: size,
          left,
          top,
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration,
          repeat: Infinity,
          delay,
        }}
      />
    );
  });
};

// Componente memoizado para evitar re-renders
export const StarBackground = React.memo(
  ({
    children,
    className = "",
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    // Generamos los efectos visuales una sola vez usando useMemo
    const sparkleEffects = useMemo(() => generateSparkleEffects(100), []);
    const shiningStars = useMemo(() => generateShiningStars(80), []);

    return (
      <div className={`relative overflow-hidden ${className}`}>
        <div className="absolute inset-0">
          {sparkleEffects}
          {shiningStars}
        </div>

        <div className="relative z-10">{children}</div>
      </div>
    );
  }
);

// Añadimos un displayName para debugging
StarBackground.displayName = "StarBackground";

export default StarBackground;
