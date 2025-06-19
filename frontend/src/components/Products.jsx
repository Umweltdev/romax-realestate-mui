import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  CircularProgress,
} from "@mui/material";
import Slider from "react-slick";
import { publicRequest } from "../requestMethods";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Card = ({ imageUrl, title, description }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <Box
      sx={{
        borderRadius: 2,
        overflow: "hidden",
        boxShadow: 3,
        bgcolor: "#f9f9f9",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        position: "relative",
        mt: 2,
        mb: 2,
      }}
    >
      <Box
        sx={{
          height: { xs: "auto", md: "85%" }, // increased from 70%
          overflow: "hidden",
          position: "relative",
          backgroundColor: "#e0e0e0",
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        }}
      >
        {!imgLoaded && (
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 10,
            }}
          >
            <CircularProgress sx={{ color: "black" }} />
          </Box>
        )}
        <img
          src={imageUrl}
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: imgLoaded ? "block" : "none",
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
          }}
          onLoad={() => setImgLoaded(true)}
          onError={() => setImgLoaded(true)}
        />
      </Box>
      <Box
        sx={{
          p: 2,
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          borderBottomLeftRadius: 8,
          borderBottomRightRadius: 8,
          backgroundColor: "#f9f9f9",
        }}
      >
        <Typography variant="h6" noWrap>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" noWrap>
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await publicRequest.get(`/products`);
        setProducts(res.data || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    rtl: true,
    responsive: [
      {
        breakpoint: 968,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  const containerHeight = isMobile ? "auto" : "65vh";

  return (
    <Box
      width="100vw"
      marginY={10}
      paddingX={0}
      padding={{ xs: 2, sm: 4 }}
      sx={{
        backgroundColor: "#fff",
        minHeight: containerHeight,
        overflow: "hidden",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: isMobile ? "flex-start" : "center",
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

      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: containerHeight,
          }}
        >
          <CircularProgress sx={{ color: "black" }} />
        </Box>
      ) : products.length === 0 ? (
        <Typography textAlign="center" color="text.secondary">
          No featured properties available at the moment.
        </Typography>
      ) : isMobile ? (
        <Box sx={{ display: "block" }}>
          {products.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </Box>
      ) : (
        <Slider {...settings}>
          {products.map((item, index) => (
            <Box
              key={index}
              px={1}
              sx={{
                height: "calc(65vh - 120px)",
                boxSizing: "border-box",
              }}
            >
              <Card {...item} />
            </Box>
          ))}
        </Slider>
      )}
    </Box>
  );
};

export default Products;
