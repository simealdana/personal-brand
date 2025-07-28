import React from "react";
import { useTheme } from "../useTheme";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "left",
  onClick,
  className = "",
  disabled = false,
  type = "button",
}) => {
  const { colors } = useTheme();

  const getVariantStyles = (): React.CSSProperties => {
    switch (variant) {
      case "primary":
        return {
          backgroundColor: colors.primary,
          color: "white",
          border: "none",
        };
      case "secondary":
        return {
          backgroundColor: colors.accent,
          color: "white",
          border: "none",
        };
      case "outline":
        return {
          backgroundColor: "transparent",
          color: colors.primary,
          border: `2px solid ${colors.primary}`,
        };
      default:
        return {
          backgroundColor: colors.primary,
          color: "white",
          border: "none",
        };
    }
  };

  const getSizeStyles = (): React.CSSProperties => {
    switch (size) {
      case "sm":
        return {
          padding: "8px 16px",
          fontSize: "12px",
        };
      case "md":
        return {
          padding: "18px 28px",
          fontSize: "14px",
        };
      case "lg":
        return {
          padding: "20px 40px",
          fontSize: "16px",
        };
      default:
        return {
          padding: "18px 28px",
          fontSize: "14px",
        };
    }
  };

  const baseStyles: React.CSSProperties = {
    borderRadius: "8px",
    fontWeight: 600,
    textTransform: "uppercase" as const,
    letterSpacing: "0.5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    cursor: disabled ? "not-allowed" : "pointer",
    transition: "all 0.2s ease",
    opacity: disabled ? 0.6 : 1,
    ...getVariantStyles(),
    ...getSizeStyles(),
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      e.currentTarget.style.opacity = "0.9";
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      e.currentTarget.style.opacity = "1";
    }
  };

  return (
    <button
      type={type}
      style={baseStyles}
      className={className}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      disabled={disabled}
    >
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
    </button>
  );
};

export default Button;
