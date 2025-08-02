import React from "react";
import { useTheme } from "../useTheme";

interface ArchitectsTextProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
  fontSize?: string;
  fontWeight?: number;
}

export const ArchitectsText: React.FC<ArchitectsTextProps> = ({
  children,
  className = "",
  color,
  fontSize = "16px",
  fontWeight = 400,
}) => {
  const { colors, typography } = useTheme();

  const styles: React.CSSProperties = {
    fontFamily: typography.fontFamily.architects,
    fontWeight,
    fontSize,
    color: color || colors.textPrimary,
    lineHeight: "1.4",
  };

  return (
    <span style={styles} className={className}>
      {children}
    </span>
  );
};

export default ArchitectsText;
