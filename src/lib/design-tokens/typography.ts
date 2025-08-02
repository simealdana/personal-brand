export const typography = {
  fontFamily: {
    primary: "Bebas Neue, sans-serif",
    secondary: "Inter, sans-serif",
    architects: "Architects Daughter, cursive",
  },
  fontWeight: {
    thin: 100,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  fontSize: {
    xs: "12px",
    sm: "14px",
    base: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "30px",
    "4xl": "36px",
    "5xl": "48px",
    "6xl": "60px",
  },
  lineHeight: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
  letterSpacing: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0em",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
} as const;

export type TypographyToken = typeof typography;
export type TypographyKey = keyof TypographyToken;

export const getTypography = (
  category: keyof TypographyToken,
  key: string
): string => {
  return typography[category][
    key as keyof (typeof typography)[typeof category]
  ];
};

export const typographyCSSVariables = {
  "--font-family-primary": typography.fontFamily.primary,
  "--font-family-secondary": typography.fontFamily.secondary,
  "--font-family-architects": typography.fontFamily.architects,
} as const;
