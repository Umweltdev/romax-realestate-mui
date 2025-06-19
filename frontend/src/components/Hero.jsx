import React from "react";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router";
import {
  Container,
  Typography,
  Box,
  Button,
  useMediaQuery,
  useTheme,
  Stack,
} from "@mui/material";
import { HomeOutlined } from "@mui/icons-material";

const HeroContainer = styled(Box)(({ theme }) => ({
  background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://i.ibb.co/0nQJv76/Whats-App-Image-2023-09-04-at-06-30-01.jpg')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  color: theme.palette.common.white,
  minHeight: "80vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(8, 2),
  textAlign: "center",
}));

const Hero = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <HeroContainer>
      <Container maxWidth="md">
        <Box display="flex" justifyContent="center" mb={3}>
          <HomeOutlined fontSize="large" />
        </Box>

        <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          spacing={0}
        >
          {/* Subheading */}
          <Typography
            variant="h6"
            color="primary.main"
            fontSize={{ xs: "24px", sm: "28px" }}
            mt={2}
            mb={2}
          >
            Welcome To Romax
          </Typography>

          {/* Headline */}
          <Typography
            variant="h1"
            fontWeight={700}
            fontSize={{ xs: "36px", sm: "48px", md: "64px" }}
            lineHeight={1.3}
            mt={1}
            mb={3}
          >
            Find Your Dream, Suitable And Comfortable Home.
          </Typography>

          {/* Subtext */}
          <Typography
            variant="body1"
            sx={{
              color: "#e3e1e1",
              maxWidth: "700px",
              fontSize: { xs: "16px", sm: "20px", md: "24px" },
              lineHeight: 1.8,
              letterSpacing: "0.5px",
              mt: 1,
              mb: 6,
            }}
          >
            Discover your dream home with us. Browse our listings and find the
            perfect property for you — where comfort meets style.
          </Typography>

          {/* Button */}
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
              width: { xs: "100%", sm: "auto" },
              "&:hover": {
                backgroundColor: "#fc973f",
              },
            }}
          >
            Discover More
          </Button>
        </Stack>
      </Container>
    </HeroContainer>
  );
};

export default Hero;
