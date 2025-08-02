import React from "react";
import { colors } from "../../design-tokens/colors";
import { typography } from "../../design-tokens/typography";

interface H1ServerProps {
  children: React.ReactNode;
  bold?: boolean;
  className?: string;
  color?: string;
}

export const H1Server: React.FC<H1ServerProps> = ({
  children,
  bold = false,
  className = "",
  color,
}) => {
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
  };

  return (
    <h1 style={styles} className={className}>
      {children}
    </h1>
  );
};

export default H1Server;
