import React from "react";
import { useTheme } from "../useTheme";

interface SpanProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
  fontSize?: string | number;
  fontWeight?: string | number;
  fontFamily?: string;
  lineHeight?: string | number;
  letterSpacing?: string;
  textAlign?: React.CSSProperties["textAlign"];
  textDecoration?: React.CSSProperties["textDecoration"];
  textTransform?: React.CSSProperties["textTransform"];
  fontStyle?: React.CSSProperties["fontStyle"];
  style?: React.CSSProperties;
}

export const Span: React.FC<SpanProps> = ({
  children,
  className = "",
  color,
  fontSize,
  fontWeight,
  fontFamily,
  lineHeight,
  letterSpacing,
  textAlign,
  textDecoration,
  textTransform,
  fontStyle,
  style = {},
  ...props
}) => {
  const { colors, typography } = useTheme();

  const defaultStyles: React.CSSProperties = {
    fontFamily: typography.fontFamily.secondary,
    fontStyle: "normal",
    fontSize: "14.9px",
    lineHeight: "18px",
    letterSpacing: "0.39%",
    color: colors.textSecondary,
  };

  const customStyles: React.CSSProperties = {
    ...(color && { color }),
    ...(fontSize && {
      fontSize: typeof fontSize === "number" ? `${fontSize}px` : fontSize,
    }),
    ...(fontWeight && { fontWeight }),
    ...(fontFamily && { fontFamily }),
    ...(lineHeight && {
      lineHeight:
        typeof lineHeight === "number" ? `${lineHeight}px` : lineHeight,
    }),
    ...(letterSpacing && { letterSpacing }),
    ...(textAlign && { textAlign }),
    ...(textDecoration && { textDecoration }),
    ...(textTransform && { textTransform }),
    ...(fontStyle && { fontStyle }),
  };

  const combinedStyles: React.CSSProperties = {
    ...defaultStyles,
    ...customStyles,
    ...style,
  };

  return (
    <span style={combinedStyles} className={className} {...props}>
      {children}
    </span>
  );
};

export default Span;
