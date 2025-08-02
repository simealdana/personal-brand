import React from "react";
import { useTheme } from "../useTheme";

interface ParagraphProps {
  children: React.ReactNode;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Paragraph: React.FC<ParagraphProps> = ({
  children,
  color,
  className = "",
  style = {},
}) => {
  const { colors, typography } = useTheme();

  const paragraphStyles: React.CSSProperties = {
    fontFamily: typography.fontFamily.secondary,
    fontWeight: 500,
    fontStyle: "normal",
    fontSize: "18.9px",
    lineHeight: "23px",
    letterSpacing: "0.29%",
    color: color || colors.textSecondary,
    margin: 0,
    padding: 0,
    ...style,
  };

  return (
    <p className={className} style={paragraphStyles}>
      {children}
    </p>
  );
};

export default Paragraph;
