import React from "react";
import { useTheme } from "../useTheme";

interface H2Props {
  children: React.ReactNode;
  className?: string;
}

export const H2: React.FC<H2Props> = ({ children, className = "" }) => {
  const { colors, typography } = useTheme();

  const styles: React.CSSProperties = {
    fontFamily: typography.fontFamily.primary,
    fontWeight: typography.fontWeight.bold,
    fontStyle: "normal",
    fontSize: "32.4px",
    lineHeight: "33px",
    letterSpacing: typography.letterSpacing.normal,
    color: colors.textPrimary,
    margin: 0,
    padding: 0,
  };

  return (
    <h2 style={styles} className={className}>
      {children}
    </h2>
  );
};

export default H2;
