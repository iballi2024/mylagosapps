import { createTheme } from "@mantine/core";

export const theme = createTheme({
  // Controls --mantine-font-family
  // fontFamily: "Arial, sans-serif",
  fontFamily: "Poppins, sans-serif",
  // fontFamily: "Inter, sans-serif",

  // Controls --mantine-font-family-monospaceds
  // fontFamilyMonospace: "Courier New, monospace",
  fontFamilyMonospace: "Poppins, sans-serif",

  primaryColor: "cyan",

  headings: {
    // Controls --mantine-font-family-headings
    // fontFamily: "Georgia, serif",
    fontFamily: "Montserrat, sans-serif",
  },
  fontSizes: {
    xs: "0.5rem",
    sm: "0.75rem",
    md: "1rem",
    lg: "1.25rem",
    xl: "1.5rem",
  },

  colors: {
    primary: [
      "#E6F7EF", // 0 - very light
      "#C2EED9", // 1
      "#9DE5C3", // 2
      "#79DBAD", // 3
      "#54D297", // 4
      "#30C881", // 5
      "#0FA958", // 6 - base
      "#0B6B3A", // 7 - darker
      "#084F2B", // 8
      "#05341C", // 9 - darkest
    ],
    secondary: [
      "#FFF9E6", // 0 - very light cream gold
      "#FFF1CC", // 1
      "#FFE8B3", // 2
      "#FFDE99", // 3
      "#FFD580", // 4
      "#F7C948", // 5 - soft gold
      "#E6B800", // 6 - primary gold
      "#C99700", // 7
      "#A67C00", // 8
      "#7A5C00", // 9 - deep antique gold
    ],
    dark: [
      "#F5F7FA", // 0 - lightest
      "#E6EAF2",
      "#C9D2E3",
      "#A5B4CF",
      "#7E93B8",
      "#4A5F7D",
      "#161C28", // 6 - base color
      "#121722",
      "#0E131C",
      "#0A0E15", // 9 - darkest
    ],
  },
});
