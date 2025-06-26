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
} from "@mui/material";

const PropertySection = ({ title, price, description, features }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ mb: 6 }}>
      <Typography
        variant="h6"
        fontWeight="bold"
        gutterBottom
        textAlign={isMobile ? "center" : "left"}
        color="primary"
      >
        {title} — {price}
      </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        paragraph
        textAlign={isMobile ? "center" : "left"}
      >
        {description}
      </Typography>

      <Stack spacing={1}>
        {features.map((feature, idx) => (
          <Typography
            key={idx}
            variant="body2"
            fontWeight="medium"
            color="text.secondary"
            textAlign={isMobile ? "center" : "left"}
          >
            {feature}
          </Typography>
        ))}
      </Stack>
    </Box>
  );
};


const AboutRomax12B = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ bgcolor: "#fafafa", py: 8 }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box textAlign="center" sx={{ mb: 8 }}>
          <Typography
            variant="h3"
            fontWeight="bold"
            color="primary"
            gutterBottom
          >
            About Romax Homes 12B
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            maxWidth="sm"
            sx={{ mx: "auto" }}
          >
            Discover refined real estate living with Romax Homes 12B – designed
            for comfort, crafted for enduring value.
          </Typography>
        </Box>

        {/* Image and Overview */}
        <Grid container spacing={6} alignItems="center" sx={{ mb: 10 }}>
          <Grid item xs={12} md={6}>
            <img
              src="/assests/island.jpg"
              alt="Romax 12B Ajiwe"
              style={{ width: "100%", borderRadius: 8, objectFit: "cover" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" fontWeight="medium" gutterBottom>
              Crafted for Comfort. Designed to Endure.
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Located in the peaceful General Paints area of Ajiwe, Lekki, Romax
              Homes 12B offers timeless architecture and functional spaces
              tailored to modern lifestyles.
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Whether buying your first home or expanding your portfolio, Romax
              12B offers the perfect blend of elegance, serenity, and smart
              investment.
            </Typography>
          </Grid>
        </Grid>

        {/* Property Options */}
        <Box>
          <Typography
            variant="h5"
            fontWeight="bold"
            gutterBottom
            textAlign={isMobile ? "center" : "left"}
          >
            Property Options
          </Typography>
          <Divider sx={{ my: 3 }} />

          <PropertySection
            title="1 Bedroom Apartment"
            price="₦35M"
            description="Ideal for professionals and first-time buyers seeking comfort in a compact and modern space."
            features={[
              "Great rental and short-let potential",
              "Contemporary finishes and efficient layout",
              "Smart entry into a prime location",
              "Flexible payments: 0–6 months | 0–12 months",
            ]}
          />
          <PropertySection
            title="2 Bedroom Apartment"
            price="₦50M"
            description="Perfect for small families or investors looking for comfort and functionality in a growing area."
            features={[
              "Private ensuite rooms",
              "Open living and dining zones",
              "Excellent for personal use or leasing",
              "Flexible payments: 0–6 months | 0–12 months",
            ]}
          />
          <PropertySection
            title="3 Bedroom Terrace"
            price="₦65M"
            description="Spaciously built for families needing comfort, storage, and fluid everyday living."
            features={[
              "Private balconies and spacious interiors",
              "Clear division of social and private spaces",
              "Perfect for families or rental investment",
            ]}
          />
          <PropertySection
            title="4 Bedroom Terrace (Corner Unit)"
            price="₦80M"
            description="Enjoy added privacy and natural light in a tastefully expanded corner home."
            features={[
              "Premium corner advantage",
              "Airy layout with wide windows",
              "All ensuite for modern comfort",
            ]}
          />
          <PropertySection
            title="4 Bedroom Semi-Detached (Deluxe)"
            price="₦120M"
            description="A serene and spacious residence, ideal for those who value lifestyle, ease, and space."
            features={[
              "Ample living space with private lounge",
              "Top-tier kitchen setup and finishes",
              "Frontage with dedicated parking",
            ]}
          />
          <PropertySection
            title="5 Bedroom Fully Detached"
            price="₦150M"
            description="Our flagship residence: expansive, elegant, and built for multi-generational living or premium rental."
            features={[
              "Private compound and BQ",
              "Family lounge, walk-in closets",
              "Refined craftsmanship and finish",
            ]}
          />
        </Box>

        {/* Payment Plan */}
        <Box sx={{ my: 6 }}>
          <Typography
            variant="h6"
            fontWeight="bold"
            gutterBottom
            color="primary"
            textAlign={isMobile ? "center" : "left"}
          >
            Payment Plans
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            paragraph
            textAlign={isMobile ? "center" : "left"}
          >
            We provide flexible options tailored to your budget and pace:
          </Typography>
          <Stack spacing={1}>
            <Typography
              variant="body2"
              color="text.secondary"
              textAlign={isMobile ? "center" : "left"}
            >
              0 – 6 Months: All Units
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              textAlign={isMobile ? "center" : "left"}
            >
              0 – 12 Months: 1 & 2 Bedroom Apartments
            </Typography>
          </Stack>
        </Box>

        {/* Why Choose Section */}
        <Box sx={{ my: 6 }}>
          <Typography
            variant="h6"
            fontWeight="bold"
            gutterBottom
            color="primary"
            textAlign={isMobile ? "center" : "left"}
          >
            Why Choose Romax Homes 12B?
          </Typography>
          <Stack spacing={1}>
            {[
              "Serene yet connected location in Ajiwe, Lekki",
              "High-growth investment zone",
              "Sturdy, quality construction",
              "Professional property management services",
              "Great for living, letting, or long-term hold",
            ].map((item, idx) => (
              <Typography
                key={idx}
                variant="body2"
                color="text.secondary"
                textAlign={isMobile ? "center" : "left"}
              >
                {item}
              </Typography>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutRomax12B;
