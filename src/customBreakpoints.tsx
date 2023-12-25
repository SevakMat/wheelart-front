import { createTheme } from "@mui/material";

export const customBreakpoints = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 420,
      md: 1000,
      lg: 1200,
      xl: 1536,
    },
  },
});
