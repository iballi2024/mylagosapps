"use client";
import {
  Button,
  createTheme,
  defaultVariantColorsResolver,
  MantineTheme,
  PasswordInput,
  Select,
  TextInput,
} from "@mantine/core";

// const variantColorResolver = (input: any) => {
//   const defaultResolved = defaultVariantColorsResolver(input);

//   if (input.variant === "danger") {
//     return {
//       background: "green",
//       hover: "darkred",
//       color: "white",
//       border: "none",
//     };
//   }

//   return defaultResolved;
// };

export const theme = createTheme({
  // Controls --mantine-variant-color-resolver
  // variantColorResolver,

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
    danger: [
      "#FFE9E9", // 0 - very light
      "#FFD3D3", // 1
      "#FFB5B5", // 2
      "#FF8787", // 3
      "#FF6B6B", // 4
      "#FA5252", // 5
      "#E03131", // 6 - base danger
      "#C92A2A", // 7
      "#A61E1E", // 8
      "#7A1212", // 9 - darkest
    ],
    accentBlue: [
      "#EAF2FF", // 0
      "#D6E4FF", // 1
      "#ADC8FF", // 2
      "#84A9FF", // 3
      "#6690FF", // 4
      "#3366FF", // 5
      "#1F4FE0", // 6 - base
      "#1939B7", // 7
      "#132C8F", // 8
      "#0D1F66", // 9
    ],
    accentTeal: [
      "#E6FAF7", // 0
      "#C2F1EA", // 1
      "#9DE8DD", // 2
      "#79DFD0", // 3
      "#54D6C3", // 4
      "#30CDB6", // 5
      "#14B8A6", // 6 - base
      "#0E8F82", // 7
      "#0A6B61", // 8
      "#054741", // 9
    ],
  },

  components: {
    Button: {
      styles: {
        root: {
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 500,
          borderRadius: "100vmax",
          // padding: "0.5rem 1.5rem",
          // height: "2.5rem",
          fontSize: "inherit",
          zIndex: 0,
          // color: "inherit",
        },
        variants: {
          filled: {
            color: "white",
            backgroundColor: "var(--color-primary-6)",
          },
          light: {
            color: "var(--color-primary-6)",
            backgroundColor: "white",
          },
          outline: {
            color: "var(--color-primary-6)",
            backgroundColor: "white",
          },
        },
      },
    },

    TextInput: {
      styles: (
        theme: MantineTheme,
        props: { variant?: string; color?: string },
      ) => {
        if (props.variant === "transparent") {
          return {
            input: {
              borderColor: theme.colors.primary[6],
              backgroundColor: props.variant,
              color: props.color,
            },
            "&:hover": {
              input: {
                borderColor: theme.colors.red[6],
                backgroundColor: theme.colors.red[0],
                color: theme.colors.red[9],
              },
            },
          };
        }
        return {
          label: {
            fontFamily: "inherit",
            fontWeight: 500,
            fontSize: "inherit",
            zIndex: 0,
            color: "inherit",
            textAlign: "left",
            marginBottom: "0.5rem",
          },
          input: {
            borderRadius: 5,
            height: 45,
            fontSize: "inherit",
          },
        };
      },
    },
    Input: {
      styles: (
        theme: MantineTheme,
        props: { variant?: string; color?: string },
      ) => {
        if (props.variant === "transparent") {
          return {
            input: {
              borderColor: theme.colors.primary[6],
              backgroundColor: props.variant,
              color: props.color,
            },
            "&:hover": {
              input: {
                borderColor: theme.colors.red[6],
                backgroundColor: theme.colors.red[0],
                color: theme.colors.red[9],
              },
            },
          };
        }
        return {
          label: {
            fontFamily: "inherit",
            fontWeight: 500,
            fontSize: "inherit",
            zIndex: 0,
            color: "inherit",
            textAlign: "left",
            marginBottom: "0.5rem",
          },
          input: {
            borderRadius: 5,
            height: 45,
            fontSize: "inherit",
          },
        };
      },
    },

    PasswordInput: {
      styles: (
        theme: MantineTheme,
        props: { variant?: string; color?: string },
      ) => {
        if (props.variant === "transparent") {
          return {
            input: {
              borderColor: theme.colors.primary[6],
              backgroundColor: props.variant,
              color: props.color,
            },
            "&:hover": {
              input: {
                borderColor: theme.colors.red[6],
                backgroundColor: theme.colors.red[0],
                color: theme.colors.red[9],
              },
            },
          };
        }
        return {
          label: {
            fontFamily: "inherit",
            fontWeight: 500,
            fontSize: "inherit",
            zIndex: 0,
            color: "inherit",
            textAlign: "left",
            marginBottom: "0.5rem",
          },
          input: {
            borderRadius: 5,
            height: 45,
            fontSize: "inherit",
          },
        };
      },
    },

    Textarea: {
      styles: {
        label: {
          fontFamily: "inherit",
          fontWeight: 500,
          fontSize: "inherit",
          zIndex: 0,
          color: "inherit",
          textAlign: "left",
          marginBottom: "0.5rem",
        },
        input: {
          borderRadius: 5,
          fontSize: "inherit",
        },
      },
    },

    Select: {
      styles: {
        label: {
          fontFamily: "inherit",
          fontWeight: 500,
          fontSize: "inherit",
          zIndex: 0,
          color: "inherit",
          textAlign: "left",
          marginBottom: "0.5rem",
        },
        input: {
          borderRadius: 5,
          height: 45,
          fontSize: "inherit",
        },
      },
    },
  },
});

export { inputControlTheme } from "./inputControl";
