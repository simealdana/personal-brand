export const colors = {
  primary: "#8C52FF",
  textPrimary: "#000000",
  textSecondary: "#545454",
  accent: "#FD9129",
  white: "#FFFFFF",
  bgPrimary: "#FFFFFF",
  bgSecondary: "#FAFAFA",
  bgTertiary: "#CDCDCD",
  borderGray: "#5E595E",
  outlineGray: "#697282",
} as const;

export type ColorToken = typeof colors;
export type ColorKey = keyof ColorToken;

export const getColor = (color: keyof ColorToken): string => {
  return colors[color];
};

export const colorCSSVariables = {
  "--color-primary": colors.primary,
  "--color-text-primary": colors.textPrimary,
  "--color-text-secondary": colors.textSecondary,
  "--color-accent": colors.accent,
  "--color-white": colors.white,
  "--color-bg-primary": colors.bgPrimary,
  "--color-bg-secondary": colors.bgSecondary,
  "--color-bg-tertiary": colors.bgTertiary,
  "--color-border-gray": colors.borderGray,
  "--color-outline-gray": colors.outlineGray,
} as const;
