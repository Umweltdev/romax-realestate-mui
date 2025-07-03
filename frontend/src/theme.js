import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#eb8510",
    },
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    fontSize: 14,
    h1: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: 700,
      fontSize: "64px",
      lineHeight: 1.2,
    },
    h5: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: 600,
      fontSize: "25px",
      lineHeight: 1.3,
    },
    h6: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: 600,
      fontSize: "20px",
      lineHeight: 1.3,
    },
    body1: {
      fontFamily: "Inter, sans-serif",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: 1.7,
    },
    body2: {
      fontFamily: "Inter, sans-serif",
      fontWeight: 500,
      fontSize: "15px",
      lineHeight: 1.6,
    },
    subtitle1: {
      fontFamily: "Inter, sans-serif",
      fontWeight: 600,
      fontSize: "14px",
      lineHeight: 1.5,
    },
    subtitle2: {
      fontFamily: "Inter, sans-serif",
      fontWeight: 400,
      fontSize: "13px",
      lineHeight: 1.5,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 968,
      lg: 1250,
      xl: 1536,
    },
  },
});
