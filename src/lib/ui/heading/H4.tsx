import React from "react";
import { useTheme } from "../useTheme";

interface H4Props {
  children: React.ReactNode;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const H4: React.FC<H4Props> = ({
  children,
  color,
  className = "",
  style = {},
}) => {
  const { colors } = useTheme();

  const h4Styles: React.CSSProperties = {
    fontFamily: "Bebas Neue, sans-serif",
    fontWeight: 700,
    fontStyle: "normal",
    fontSize: "13.9px",
    lineHeight: "14px",
    letterSpacing: "0.2%",
    color: color || colors.textPrimary,
    margin: 0,
    padding: 0,
    ...style,
  };

  return (
    <h4 className={className} style={h4Styles}>
      {children}
    </h4>
  );
};

export default H4;
