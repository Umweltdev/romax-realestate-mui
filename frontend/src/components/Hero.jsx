import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import {
  Box,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import FilterComponent from "./Filter";

const Hero = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Prevents double render mismatch on hydration
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Box
        sx={{
          background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://i.ibb.co/0nQJv76/Whats-App-Image-2023-09-04-at-06-30-01.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "90vh",
          width: "100%",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: "center",
          px: { xs: 2, sm: 6 },
          py: { xs: 8, sm: 12 },
          gap: 4,
          overflow: "hidden",
        }}
      >
        {/* LEFT TEXT CONTENT */}
        <Box
          sx={{
            flex: "1 1 60%",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: isMobile ? "center" : "flex-start",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          <Typography
            variant="h6"
            color="primary.main"
            fontSize={{ xs: "24px", sm: "28px" }}
            mb={2}
          >
            Welcome To Romax
          </Typography>
          <Typography
            variant="h1"
            fontWeight={700}
            fontSize={{ xs: "36px", sm: "48px", md: "64px" }}
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
              maxWidth: "90%",
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
              py: 2,
              fontSize: "18px",
              fontWeight: 600,
              borderRadius: "30px",
              "&:hover": {
                backgroundColor: "#fc973f",
              },
            }}
          >
            Discover More
          </Button>
        </Box>

        {/* RIGHT FILTER: Desktop only */}
        {!isMobile && (
          <Box
            sx={{
              flex: "1 1 40%",
              backgroundColor: "rgba(255, 255, 255, 0.92)",
              borderRadius: 3,
              p: 4,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <Box width="100%" maxWidth="500px">
              <FilterComponent />
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
};

export default Hero;
