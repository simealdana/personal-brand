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
          width: fill ? "100%" : "250px",
          height: fill ? "100%" : "250px",
        };
      case "lg":
        return {
          borderRadius: "60% 40% 70% 30% / 60% 30% 70% 40%",
          width: fill ? "100%" : "700px",
          height: fill ? "100%" : "900px",
        };
      case "md":
      default:
        return {
          borderRadius: "60% 40% 70% 30% / 60% 30% 70% 40%",
          width: fill ? "100%" : "400px",
          height: fill ? "100%" : "500px",
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
          width: customSize?.width || sizeStyles.width,
          height: customSize?.height || sizeStyles.height,
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
            width={customSize?.width || Number(sizeStyles.width)}
            height={customSize?.height || Number(sizeStyles.height)}
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
      <div className="absolute -inset-10 bg-blue-500/5 blur-3xl rounded-full"></div>
    </motion.div>
  );
};

export default AnimatedImageContainer;
