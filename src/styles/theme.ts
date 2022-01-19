import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    primary: "#27AE60",
    secondary: "#EB5757",
    gray: {
      0: "#F5F5F5",
      100: "#E0E0E0",
      300: "#828282",
      600: "#333333",
    },
    negative: "#E60000",
    warning: "#FFCd07",
    sucess: "#168821",
    information: "#155BCB",
    fonts: {
      heading: "Inter",
      body: "Inter",
    },
    fontSizes: {
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
      xl: "1.375rem",
      "2xl": "1.625rem",
    },
    styles: {
      global: {
        body: {
          bg: "white",
        },
      },
    },
  },
});
