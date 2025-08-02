import React from "react";
import { motion, Variants } from "framer-motion";
import { useTheme } from "../useTheme";

interface AnimatedElementProps {
  children: React.ReactNode;
  as?:
    | "p"
    | "span"
    | "div"
    | "section"
    | "article"
    | "header"
    | "footer"
    | "main"
    | "aside"
    | "nav";
  animation?:
    | "fadeIn"
    | "slideUp"
    | "slideDown"
    | "slideLeft"
    | "slideRight"
    | "scale"
    | "none";
  delay?: number;
  duration?: number;
  once?: boolean;
  threshold?: number;
  customVariants?: Variants;
  className?: string;
  style?: React.CSSProperties;
  color?: string;
  // Text-specific props (optional)
  isText?: boolean;
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  as = "div",
  animation = "fadeIn",
  delay = 0,
  duration = 0.6,
  once = true,
  threshold = 0.1,
  customVariants,
  className = "",
  style = {},
  color,
  isText = false,
}) => {
  const { colors, typography } = useTheme();

  const baseStyles: React.CSSProperties = {
    ...(isText && {
      fontFamily: typography?.fontFamily?.secondary || "inherit",
      fontWeight: 500,
      fontStyle: "normal",
      fontSize: "18.9px",
      lineHeight: "23px",
      letterSpacing: "0.29%",
      color: color || colors?.textSecondary || "inherit",
    }),
    // Solo aplicar reset de margin/padding si no hay className o style personalizados
    ...((!className || className.trim() === "") &&
      Object.keys(style).length === 0 && {
        margin: 0,
        padding: 0,
      }),
    ...style,
  };

  const getAnimationVariants = (): Variants => {
    if (customVariants) return customVariants;

    const baseVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          duration,
          delay,
          ease: "easeOut",
        },
      },
    };

    switch (animation) {
      case "slideUp":
        return {
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration,
              delay,
              ease: "easeOut",
            },
          },
        };

      case "slideDown":
        return {
          hidden: { opacity: 0, y: -20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration,
              delay,
              ease: "easeOut",
            },
          },
        };

      case "slideLeft":
        return {
          hidden: { opacity: 0, x: 20 },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              duration,
              delay,
              ease: "easeOut",
            },
          },
        };

      case "slideRight":
        return {
          hidden: { opacity: 0, x: -20 },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              duration,
              delay,
              ease: "easeOut",
            },
          },
        };

      case "scale":
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              duration,
              delay,
              ease: "easeOut",
            },
          },
        };

      case "none":
        return {
          hidden: { opacity: 1 },
          visible: { opacity: 1 },
        };

      default: // fadeIn
        return baseVariants;
    }
  };

  const renderMotionComponent = () => {
    try {
      const props = {
        className,
        style: baseStyles,
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: { once, threshold },
        variants: getAnimationVariants(),
        children,
      };

      switch (as) {
        case "p":
          return <motion.p {...props} />;
        case "span":
          return <motion.span {...props} />;
        case "div":
          return <motion.div {...props} />;
        case "section":
          return <motion.section {...props} />;
        case "article":
          return <motion.article {...props} />;
        case "header":
          return <motion.header {...props} />;
        case "footer":
          return <motion.footer {...props} />;
        case "main":
          return <motion.main {...props} />;
        case "aside":
          return <motion.aside {...props} />;
        case "nav":
          return <motion.nav {...props} />;
        default:
          return <motion.div {...props} />;
      }
    } catch (error) {
      console.error("Error in AnimatedElement:", error);
      // Fallback to a simple div if motion components fail
      return (
        <div className={className} style={baseStyles}>
          {children}
        </div>
      );
    }
  };

  return renderMotionComponent();
};

export default AnimatedElement;
