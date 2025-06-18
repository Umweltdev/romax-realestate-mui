import { useState, useEffect } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { publicRequest } from "../requestMethods";
import Card from "./Card";
import { ArrowBack, ArrowForward } from "@mui/icons-material"; // ✅ UPDATED import

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        right: "-5px",
        backgroundColor: "#eb8510",
        color: "white",
        "&:hover": {
          backgroundColor: "#eb8510",
        },
      }}
    >
      <ArrowForward sx={{ fontSize: 25 }} />
    </IconButton>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        left: "-5px",
        zIndex: 10,
        backgroundColor: "#eb8510",
        color: "white",
        "&:hover": {
          backgroundColor: "#eb8510",
        },
      }}
    >
      <ArrowBack sx={{ fontSize: 25 }} />
    </IconButton>
  );
}

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const res = await publicRequest.get(`/products`);
        setProducts(res.data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 968,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <Box width={{ xs: "97%", md: "80%" }} mx="auto" pb={3}>
      <Typography
        variant="h5"
        textAlign="center"
        fontSize="28px"
        mb={2}
        fontWeight={600}
      >
        Featured Houses
      </Typography>

      <Slider {...settings}>
        {products.map((item, index) => (
          <Box key={index} px={1}>
            <Card {...item} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Products;
