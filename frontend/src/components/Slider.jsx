import { useNavigate } from "react-router-dom";
import { sliderItems } from "../data";
import {
  Box,
  Grid,
  Stack,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { OtherHousesOutlined } from "@mui/icons-material";

const Card = ({ title, img, desc, bg }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      maxWidth="1440px"
      width="100%"
      mx="auto"
      borderRadius={2}
      overflow="hidden"
    >
      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        height={{ xs: "auto", sm: 500 }}
        width="100%"
      >
        {/* Left Image */}
        <Box
          sx={{
            width: { xs: "100%", sm: "50%" },
            height: { xs: 250, sm: "100%" },
            backgroundColor: bg,
          }}
        >
          <img
            src={img}
            alt="slider"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </Box>

        {/* Right Text Content */}
        <Box
          sx={{
            width: { xs: "100%", sm: "50%" },
            backgroundColor: bg,
            padding: { xs: 4, sm: 6 },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stack
            spacing={3}
            alignItems={isSmDown ? "center" : "flex-start"}
            textAlign={isSmDown ? "center" : "left"}
            width="100%"
          >
            <Typography
              variant="h4"
              fontWeight={700}
              fontSize={{ xs: "22px", sm: "28px", md: "36px" }}
              letterSpacing="1px"
              lineHeight="1.4"
            >
              {title}
            </Typography>

            <Typography
              variant="body1"
              fontSize={{ xs: "14px", sm: "16px" }}
              color="text.secondary"
            >
              {desc?.length > 150 ? `${desc.substring(0, 147)}...` : desc}
            </Typography>

            <Button
              variant="contained"
              onClick={() => navigate("/estate")}
              sx={{
                textTransform: "none",
                bgcolor: "#EB8150",
                color: "#fff",
                px: 4,
                py: 1.5,
                borderRadius: "10px",
                fontWeight: 600,
                gap: 1.2,
                alignSelf: { xs: "center", sm: "flex-start" },
                "&:hover": {
                  bgcolor: "#d56e40",
                },
              }}
            >
              <Typography fontSize="16px" fontWeight={500}>
                Our Estate
              </Typography>
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

const Carousel = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 5000,
    cssEase: "ease-in-out",
  };

  return (
    <Box py={6} width="100%" overflow="hidden">
      <Slider {...settings}>
        {sliderItems.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </Slider>
    </Box>
  );
};

export default Carousel;
