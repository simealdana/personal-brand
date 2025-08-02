import React from "react";
import { useTheme } from "../useTheme";

interface H1Props {
  children: React.ReactNode;
  bold?: boolean;
  className?: string;
  color?: string;
}

export const H1: React.FC<H1Props> = ({
  children,
  bold = false,
  className = "",
  color,
}) => {
  const { colors, typography } = useTheme();

  const styles: React.CSSProperties = {
    fontFamily: typography.fontFamily.primary,
    fontWeight: bold
      ? typography.fontWeight.bold
      : typography.fontWeight.normal,
    fontStyle: "normal",
    fontSize: typography.fontSize["5xl"],
    lineHeight: typography.lineHeight.tight,
    letterSpacing: typography.letterSpacing.wider,
    color: color || colors.textPrimary,
    // Remove default margin and padding to allow className to work
  };

  return (
    <h1 style={styles} className={className}>
      {children}
    </h1>
  );
};

export default H1;
