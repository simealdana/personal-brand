import React from "react";
import { useTheme } from "../useTheme";

interface H3Props {
  children: React.ReactNode;
  className?: string;
  color?: string;
}

export const H3: React.FC<H3Props> = ({ children, className = "", color }) => {
  const { colors, typography } = useTheme();

  const styles: React.CSSProperties = {
    fontFamily: typography.fontFamily.primary,
    fontWeight: 700,
    fontStyle: "normal",
    fontSize: "21.4px",
    lineHeight: "22px",
    letterSpacing: "0%",
    color: color || colors.textPrimary,
    margin: 0,
    padding: 0,
  };

  return (
    <h3 style={styles} className={className}>
      {children}
    </h3>
  );
};

export default H3;
