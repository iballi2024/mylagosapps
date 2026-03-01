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
      "",
      "",
      "",
      "",
      "",
      "",
      "#0FA958",
      "#0B6B3A",
      "",
      "",

      // "#EBEEEB",
      // "#F0FFF0",
      // "#F5FFF5",
      // "#FAFFFA",
      // "#EEFFEE",
      // "#CCFFCC",
      // "#99FF99",
      // "#66FF66",
      // "#33FF33",
      // "#00FF00",
    ],
    secondary: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
  },
});
