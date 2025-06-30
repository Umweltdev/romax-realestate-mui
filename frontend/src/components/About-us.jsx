import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Stack,
  Divider,
  useMediaQuery,
  useTheme,
  Card,
  Fade,
} from "@mui/material";
import estate1 from "../assests/estate1.jpg";
import estate2 from "../assests/estate2.jpg";
import estate3 from "../assests/estate3.jpg";
import estate4 from "../assests/estate4.jpg";
import estate5 from "../assests/estate5.jpg";
import estate from "../assests/estate.jpg";
import PropertySectionFlipping from "../PropertySectionFlipping";

const AboutRomax12B = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ bgcolor: "#f5f5f5", py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        {/* Hero */}
        <Fade in timeout={600}>
          <Box textAlign="center" sx={{ mb: 4 }}>
            <Typography
              variant="h2"
              fontWeight="bold"
              color="primary"
              gutterBottom
            >
              About
            </Typography>
          </Box>
        </Fade>
        {/* Overview */}
        <Grid container spacing={6} alignItems="center" sx={{ mb: 10 }}>
          <Grid item xs={12}>
            <Typography
              variant="h5"
              mt={2}
              mb={2}
              fontWeight={700}
              color="#1c1c1c"
              gutterBottom
              textAlign= "center" 
            >
              Romax Homes is crafted for comfort and designed to endure.
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              paragraph
              sx={{ textAlign: isMobile ? "center" : "left" }}
            >
              Located in the peaceful General Paints area of Ajiwe, Lekki, Romax
              Homes 12B offers timeless architecture and functional spaces
              tailored to modern lifestyles. Every corner reflects thoughtful
              design, prioritizing both comfort and durability.
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ textAlign: isMobile ? "center" : "left" }}
            >
              Whether you're buying your first home or expanding your investment
              portfolio, Romax 12B blends elegance, serenity, and smart value
              into one compelling offer.
            </Typography>
          </Grid>
        </Grid>
        {/* Property Options */}
        <Box>
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            textAlign="center"
          >
            Property Options
          </Typography>
          <Divider sx={{ my: 3 }} />

          <Grid container spacing={4}>
            {[
              {
                title: "1 Bedroom Apartment",
                price: "₦35M",
                image: estate1,
                description:
                  "Ideal for professionals and first-time buyers seeking comfort in a compact and modern space.",
                features: [
                  "Great rental and short-let potential",
                  "Contemporary finishes and efficient layout",
                  "Smart entry into a prime location",
                  "Flexible payments: 0–6 months | 0–12 months",
                ],
              },
              {
                title: "2 Bedroom Apartment",
                price: "₦50M",
                image: estate2,

                description:
                  "Perfect for small families or investors looking for comfort and functionality in a growing area.",
                features: [
                  "Private ensuite rooms",
                  "Open living and dining zones",
                  "Excellent for personal use or leasing",
                  "Flexible payments: 0–6 months | 0–12 months",
                ],
              },
              {
                title: "3 Bedroom Terrace",
                price: "₦65M",
                image: estate3,

                description:
                  "Spaciously built for families needing comfort, storage, and fluid everyday living.",
                features: [
                  "Private balconies and spacious interiors",
                  "Clear division of social and private spaces",
                  "Perfect for families or rental investment",
                ],
              },
              {
                title: "4 Bedroom Terrace (Corner Unit)",
                price: "₦80M",
                image: estate4,
                description:
                  "Enjoy added privacy and natural light in a tastefully expanded corner home.",
                features: [
                  "Premium corner advantage",
                  "Airy layout with wide windows",
                  "All ensuite for modern comfort",
                ],
              },
              {
                title: "4 Bedroom Semi-Detached (Deluxe)",
                price: "₦120M",
                image: estate5,
                description:
                  "A serene and spacious residence, ideal for those who value lifestyle, ease, and space.",
                features: [
                  "Ample living space with private lounge",
                  "Top-tier kitchen setup and finishes",
                  "Frontage with dedicated parking",
                ],
              },
              {
                title: "5 Bedroom Fully Detached",
                price: "₦150M",
                image: estate,
                description:
                  "Our flagship residence: expansive, elegant, and built for multi-generational living or premium rental.",
                features: [
                  "Private compound and BQ",
                  "Family lounge, walk-in closets",
                  "Refined craftsmanship and finish",
                ],
              },
            ].map((property, idx) => (
              <Grid key={idx} item xs={12} sm={6}>
                <PropertySectionFlipping {...property} />
              </Grid>
            ))}
          </Grid>
        </Box>
        {/* Payment Plans */}
        <Box sx={{ my: 6, px: { xs: 2, md: 6 } }}>
          <Box maxWidth="md" mx="auto">
            <Typography
              variant="h4"
              fontWeight={700}
              color="primary"
              gutterBottom
              textAlign={isMobile ? "left" : "center"}
            >
              Payment Plans
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              paragraph
              sx={{ textAlign: isMobile ? "left" : "center" }}
            >
              We provide flexible payment structures to suit your needs and
              financial goals:
            </Typography>
            <Stack
              spacing={1.5}
              sx={{
                textAlign: isMobile ? "left" : "center",
                pl: isMobile ? 0 : 1,
              }}
            >
              <Typography variant="body1" color="text.primary">
                 <strong>0 – 6 Months</strong>: All Units
              </Typography>
              <Typography variant="body1" color="text.primary">
                 <strong>0 – 12 Months</strong>: 1 & 2 Bedroom Apartments
              </Typography>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutRomax12B;
