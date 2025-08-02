import React from "react";
import { useTheme } from "../useTheme";

interface ArchitectsDaughterTextProps {
  children: React.ReactNode;
  className?: string;
}

export const ArchitectsDaughterText: React.FC<ArchitectsDaughterTextProps> = ({
  children,
  className = "",
}) => {
  const { colors, typography } = useTheme();

  const styles: React.CSSProperties = {
    fontFamily: typography.fontFamily.architects,
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: "17.9px",
    lineHeight: "25px",
    letterSpacing: "0.2%",
    color: colors.textPrimary,
    margin: 0,
    padding: 0,
  };

  return (
    <span style={styles} className={className}>
      {children}
    </span>
  );
};

export default ArchitectsDaughterText;
