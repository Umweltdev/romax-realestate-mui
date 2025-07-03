import React, { useState } from "react";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  CircularProgress,
  Divider,
} from "@mui/material";
import Slider from "react-slick";
import estate1 from "../assests/estate1.jpg";
import estate2 from "../assests/estate2.jpg";
import estate3 from "../assests/estate3.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const fallbackImage = "/fallback.jpg";

const Card = ({ imageUrl, title, description }) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <Box
      sx={{
        borderRadius: 3,
        overflow: "hidden",
        boxShadow: 3,
        bgcolor: "white",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        position: "relative",
        mt: 2,
        mb: 4,
      }}
    >
      <Box
        sx={{
          height: 300,
          width: "100%",
          position: "relative",
          backgroundColor: "#e0e0e0",
        }}
      >
        {!imgLoaded && (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1,
            }}
          >
            <CircularProgress sx={{ color: "black" }} />
          </Box>
        )}
        <img
          src={imgError ? fallbackImage : imageUrl}
          alt={title}
          onLoad={() => setImgLoaded(true)}
          onError={() => {
            setImgError(true);
            setImgLoaded(true);
          }}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: imgLoaded ? "block" : "none",
          }}
        />
      </Box>

      <Box
        sx={{
          p: 3,
          backgroundColor: "white",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            color: "#eb8510",
            fontSize: { xs: "16px", sm: "18px" },
            lineHeight: 1.3,
            mb: 1,
          }}
        >
          {title}
        </Typography>
        <Divider sx={{ my: 1, borderColor: "#eb8510", borderWidth: "1px" }} />

        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            fontSize: { xs: "13px", sm: "14px" },
            lineHeight: 1.6,
            mt: "auto",
          }}
        >
          {description?.length > 100
            ? `${description.substring(0, 97)}...`
            : description}
        </Typography>
      </Box>
    </Box>
  );
};

const Products = () => {
  const [products] = useState([
    {
      imageUrl: estate2,
      title: "Modern Duplex",
      description:
        "A beautifully designed 4-bedroom duplex in a serene estate.",
    },
    {
      imageUrl: estate1,
      title: "Luxury Terrace",
      description:
        "Spacious and luxurious terrace apartment with a great view.",
    },
    {
      imageUrl: estate3,
      title: "Urban Apartment",
      description:
        "Perfect for city dwellers looking for modern living for beautiful family.",
    },
  ]);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    rtl: false,
    cssEase: "linear",
    arrows: true,
    responsive: [
      {
        breakpoint: 968,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <Box
      width="100%"
      marginY={6}
      padding={{ xs: 2, sm: 4 }}
      sx={{
        backgroundColor: "#f9f9f9",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginBottom: 10,
      }}
    >
      <Typography
        variant="h4"
        textAlign="center"
        mb={6}
        sx={{
          fontWeight: 600,
          fontSize: { xs: "24px", sm: "32px", md: "36px" },
        }}
      >
        Featured Houses
      </Typography>

      {isMobile ? (
        <Box>
          {products.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </Box>
      ) : (
        <Slider {...settings}>
          {[...products].reverse().map((item, index) => (
            <Box key={index} px={2}>
              <Card {...item} />
            </Box>
          ))}
        </Slider>
      )}
    </Box>
  );
};

export default Products;
