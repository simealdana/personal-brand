import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/lib/ui/useTheme";
import { H4 } from "@/lib/ui/heading";

export interface VideoProps {
  src: string;
  title?: string;
  className?: string;
  containerClassName?: string;
  variant?: "iframe" | "player";
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  aspectRatio?: "video" | "square" | "custom";
  customAspectRatio?: string;
  headerText?: string;
}

export const Video: React.FC<VideoProps> = ({
  src,
  title,
  className = "",
  containerClassName = "max-w-4xl mx-auto",
  variant = "iframe",
  size = "lg",
  aspectRatio = "video",
  customAspectRatio,
  headerText,
}) => {
  const { colors } = useTheme();
  const getAspectRatioClass = () => {
    switch (aspectRatio) {
      case "video":
        return "aspect-video";
      case "square":
        return "aspect-square";
      case "custom":
        return customAspectRatio || "aspect-video";
      default:
        return "aspect-video";
    }
  };

  const getSizeClass = () => {
    switch (size) {
      case "sm":
        return "max-w-sm";
      case "md":
        return "max-w-md";
      case "lg":
        return "max-w-[500px]";
      case "xl":
        return "max-w-4xl";
      case "2xl":
        return "max-w-6xl";
      default:
        return "max-w-[500px]";
    }
  };

  if (variant === "iframe") {
    return (
      <div className={containerClassName}>
        <motion.div
          className={`relative w-full ${getAspectRatioClass()} bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 ${getSizeClass()} mx-auto ${className}`}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <iframe
            className="w-full h-full"
            src={src}
            title={title || "Video content"}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </motion.div>
      </div>
    );
  }

  if (variant === "player") {
    return (
      <div className={`${containerClassName} ${getSizeClass()} rounded-lg`}>
        {headerText && (
          <div
            className="flex items-center justify-center py-2 px-4 rounded-t-lg "
            style={{ backgroundColor: colors.primary }}
          >
            <H4
              color="white"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                maxHeight: "2.4em",
              }}
            >
              {headerText}
            </H4>
          </div>
        )}
        <motion.div
          className={`relative w-full ${getAspectRatioClass()} bg-gray-900 overflow-hidden ${className} ${
            headerText ? "rounded-t-none rounded-b-lg" : "rounded-lg"
          }`}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <iframe
            className="w-full h-full rounded-lg"
            src={src}
            title={title || "Video content"}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </motion.div>
      </div>
    );
  }

  return null;
};

export default Video;
