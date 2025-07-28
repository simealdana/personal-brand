import { useMemo } from "react";
import {
  colors,
  colorCSSVariables,
  getColor,
  type ColorToken,
  type ColorKey,
} from "../design-tokens/colors";
import {
  typography,
  typographyCSSVariables,
  getTypography,
  type TypographyToken,
} from "../design-tokens/typography";

export interface Theme {
  colors: ColorToken;
  getColor: (color: ColorKey) => string;
  cssVariables: typeof colorCSSVariables;
  typography: TypographyToken;
  getTypography: (category: keyof TypographyToken, key: string) => string;
  typographyCSSVariables: typeof typographyCSSVariables;
}

export const useTheme = (): Theme => {
  const theme = useMemo(() => {
    return {
      colors,
      getColor,
      cssVariables: colorCSSVariables,
      typography,
      getTypography,
      typographyCSSVariables,
    };
  }, []);

  return theme;
};

export const useColors = () => {
  const { colors, getColor } = useTheme();
  return { colors, getColor };
};

export const useColor = (colorKey: ColorKey) => {
  const { getColor } = useTheme();
  return getColor(colorKey);
};

export const useTypography = () => {
  const { typography, getTypography } = useTheme();
  return { typography, getTypography };
};

export const useFontFamily = (family: keyof TypographyToken["fontFamily"]) => {
  const { typography } = useTheme();
  return typography.fontFamily[family];
};
