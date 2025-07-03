import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import {
  Box,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const Hero = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Box
      sx={{
        background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://i.ibb.co/0nQJv76/Whats-App-Image-2023-09-04-at-06-30-01.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "90vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: { xs: 3, sm: 6 },
        py: { xs: 10, sm: 14 },
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          color: "#fff",
          maxWidth: "800px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h6"
          color="primary.main"
          fontSize={{ xs: "22px", sm: "26px" }}
          mb={2}
        >
          Welcome To Romax
        </Typography>

        <Typography
          variant="h1"
          fontWeight={700}
          fontSize={{ xs: "36px", sm: "48px", md: "60px" }}
          lineHeight={1.3}
          mb={3}
        >
          Find Your Dream, Suitable And Comfortable Home.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#e3e1e1",
            fontSize: { xs: "16px", sm: "20px", md: "22px" },
            lineHeight: 1.8,
            maxWidth: { xs: "100%", md: "80%" },
            mb: 4,
          }}
        >
          Discover your dream home with us. Browse our listings and find the
          perfect property for you where comfort meets style.
        </Typography>

        <Button
          onClick={() => navigate("/products")}
          sx={{
            textTransform: "none",
            bgcolor: "primary.main",
            color: "white",
            px: 5,
            py: 1.8,
            fontSize: "18px",
            fontWeight: 600,
            borderRadius: "30px",
            alignSelf: "center",
            "&:hover": {
              backgroundColor: "#fc973f",
            },
          }}
        >
          Discover More
        </Button>
      </Box>
    </Box>
  );
};

export default Hero;
