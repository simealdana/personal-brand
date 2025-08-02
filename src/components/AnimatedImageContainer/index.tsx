"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface AnimatedImageContainerProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  size?: "sm" | "md" | "lg";
  fill?: boolean;
  customSize?: {
    width?: number;
    height?: number;
  };
}

export const AnimatedImageContainer: React.FC<AnimatedImageContainerProps> = ({
  src,
  alt,
  className = "",
  priority = false,
  size = "md",
  fill = false,
  customSize,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  // Determinar las dimensiones basadas en el tamaño
  const getSizeStyles = () => {
    switch (size) {
      case "sm":
        return {
          borderRadius: "60% 40% 70% 30% / 60% 30% 70% 40%",
          width: fill ? "100%" : "min(250px, 90vw)",
          height: fill ? "100%" : "min(250px, 90vw)",
        };
      case "lg":
        return {
          borderRadius: "60% 40% 70% 30% / 60% 30% 70% 40%",
          width: fill ? "100%" : "min(700px, 90vw)",
          height: fill ? "100%" : "min(900px, 90vh)",
        };
      case "md":
      default:
        return {
          borderRadius: "60% 40% 70% 30% / 60% 30% 70% 40%",
          width: fill ? "100%" : "min(400px, 90vw)",
          height: fill ? "100%" : "min(500px, 90vh)",
        };
    }
  };

  const sizeStyles = getSizeStyles();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`relative ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/0 via-blue-500/10 to-blue-950/0 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-blue-950/0 rounded-full blur-2xl"></div>
      <div
        className="relative overflow-hidden"
        style={{
          width: customSize?.width
            ? `min(${customSize.width}px, 90vw)`
            : sizeStyles.width,
          height: customSize?.height
            ? `min(${customSize.height}px, 90vh)`
            : sizeStyles.height,
          borderRadius: sizeStyles.borderRadius,
          boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)",
        }}
      >
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-full h-full bg-gradient-to-r from-blue-800/30 to-blue-600/30 animate-pulse"
              style={{
                borderRadius: sizeStyles.borderRadius,
              }}
            >
              <div
                className="h-full w-full bg-gradient-to-tr from-blue-500/10 to-transparent animate-pulse"
                style={{
                  animationDuration: "1.5s",
                  animationDelay: "0.2s",
                }}
              ></div>
              <div
                className="absolute inset-0 bg-gradient-to-bl from-transparent to-blue-500/10 animate-pulse"
                style={{
                  animationDuration: "2s",
                  animationDelay: "0.5s",
                }}
              ></div>
            </div>
          </div>
        )}
        {fill ? (
          <Image
            src={src}
            alt={alt}
            fill
            className={`object-cover w-full h-full transition-opacity duration-500 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            priority={priority}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageLoaded(true)}
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={
              customSize?.width ||
              (sizeStyles.width === "min(250px, 90vw)"
                ? 250
                : sizeStyles.width === "min(400px, 90vw)"
                ? 400
                : 700)
            }
            height={
              customSize?.height ||
              (sizeStyles.height === "min(250px, 90vw)"
                ? 250
                : sizeStyles.height === "min(500px, 90vh)"
                ? 500
                : 900)
            }
            className={`object-cover w-full h-full transition-opacity duration-500 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            priority={priority}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageLoaded(true)}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/80 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-transparent to-blue-950/80"></div>
      </div>
      <div className="absolute -inset-4 bg-blue-500/5 blur-3xl rounded-full"></div>
    </motion.div>
  );
};

export default AnimatedImageContainer;
