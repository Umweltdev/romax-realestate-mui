import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";

const PropertySectionFlipping = ({ title, price, description, features, image }) => {
  const [flipped, setFlipped] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      onClick={() => setFlipped(!flipped)}
      sx={{
        perspective: "1500px",
        height: "100%",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: 360,
          transformStyle: "preserve-3d",
          transition: "transform 0.6s",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* FRONT FACE */}
        <Card
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            backfaceVisibility: "hidden",
            borderRadius: 2,
            overflow: "hidden",
          }}
          elevation={4}
        >
          <Box sx={{ position: "relative", height: "100%" }}>
            <Box
              component="img"
              src={image}
              alt={title}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                bgcolor: "rgba(255,255,255,0.92)",
                p: 2,
              }}
            >
              <Typography variant="body2" color="text.secondary" textAlign="left">
                {description}
              </Typography>
               <Typography
                variant="subtitle1"
                fontWeight="bold"
                color="primary"
                gutterBottom
              >
                {title} — {price}
              </Typography>
            </Box>
          </Box>
        </Card>

        {/* BACK FACE */}
        <Card
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
            borderRadius: 2,
            bgcolor: theme.palette.primary.main,
            color: "#fff",
            p: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
          elevation={2}
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ color: "#fff", mb: 2 }}
          >
            Features
          </Typography>
          <Stack spacing={1} maxWidth="80%">
            {features.map((feature, idx) => (
              <Typography
                key={idx}
                variant="body1"
                sx={{ color: "#f0f0f0" }}
              >
                • {feature}
              </Typography>
            ))}
          </Stack>
        </Card>
      </Box>
    </Box>
  );
};

export default PropertySectionFlipping;
