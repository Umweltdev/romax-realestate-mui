import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#008080",
      }
    },
    typography: {   
        fontFamily: [
            "Poppins",
            "sans-serif",
          ].join(","),   
      h5: {
        fontWeight: 700,
        fontSize: "25px",
        lineHeight: 1,
      },
      h6: {
        fontWeight: 600,
        fontSize: "18px",
        lineHeight: 1,
      },
      body2: {
        fontWeight: 600,
        fontSize: "16px",
        lineHeight: 1.5,
      },
      subtitle1: {
        fontWeight: 600,
        fontSize: "15px",
        lineHeight: 1.5,
      },
      subtitle2: {
        fontWeight: 400,
        fontSize: "15px",
        lineHeight: 1.5,
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 968,
        lg: 1280,
        xl: 1536,
      },
    },
  });