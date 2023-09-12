import styled from "styled-components";
import Navbar from "../../components/Navbar";
import Announcement from "../../components/Announcement";
import Newsletter from "../../components/Newsletter";
import Footer from "../../components/Footer";
import { useState, useEffect, useRef } from "react";
import Loader from "../../components/Loader";
import {
  Box,
  Stack,
  Grid,
  Typography,
  IconButton,
  Tooltip,
  Button,
  Container as ContainerBox,
  useMediaQuery,
} from "@mui/material";
import { features } from "../../data";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Tab from "./Tab";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Container = styled.div`
  padding: 0px;
`;

const Estate = () => {
  // const location = useLocation();
  // const id = location.pathname.split("/")[2];
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [product, setProduct] = useState({
    title: "4 Bedroom Semi-Detached Duplex with B/Q",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum,sunt in culpa qui officia deserunt mollit anim id est laborum.",
    location: "Harris Crescent Road, by VGC estate, Lekki, Lagos.",
    price: 7500000,
    images: [
      "../assests/island.jpg",
      "../assests/bedroom.jpg",
      "../assests/island.jpg",
      "../assests/bedroom.jpg",
      "../assests/island.jpg",
      "../assests/island.jpg",
      "../assests/bedroom.jpg",
      "../assests/island.jpg",
    ],
    stock: 2,
    category: "Island Property",
  });

  const [loading, setLoading] = useState(false);
  const [mainSliderRef, setMainSliderRef] = useState(null);
  const [thumbnailSliderRef, setThumbnailSliderRef] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: thumbnailSliderRef,
  };

  const thumbnailSettings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: product?.images.length < 4 ? product?.images.length : 4,
    slidesToScroll: 1,
    focusOnSelect: true,
    asNavFor: mainSliderRef,
  };
  // const dispatch = useDispatch();
  // const user = useSelector(state => state.user.currentUser)

  // useEffect(() => {
  //   const getProduct = async () => {
  //     try {
  //       const res = await publicRequest.get("/products/find/" + id);
  //       setProduct(res.data);
  //       setLoading(false)
  //     } catch (error) {
  //       setLoading(false)
  //     }
  //   }
  //   getProduct();
  // }, [id]);

  /* const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  }; */

  // const handleClick = () => {
  //   dispatch(addProduct({ ...product, color, size }));
  // };
  return (
    <Container>
      <Announcement />
      <Navbar />
      {loading ? (
        <Loader />
      ) : (
        <Box paddingY="40px">
          <ContainerBox maxWidth="lg">
            <Grid container spacing={3}>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  gap: 1,
                }}
              >
                <div>
                  <Slider {...settings} ref={slider => setMainSliderRef(slider)}>
                    {product?.images.map((image, index) => (
                      <div key={index}>
                        <img
                          src={image}
                          alt="house"
                          style={{
                            width: "100%",
                          }}
                        />
                      </div>
                    ))}
                  </Slider>
                  <Box
                    mt={2}
                    sx={{
                      cursor: "pointer",
                    }}
                  >
                    <Slider {...thumbnailSettings} ref={slider => setThumbnailSliderRef(slider)}>
                      {product?.images.map((image, index) => (
                        <div
                          key={index}
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            width: "100%",
                          }}
                        >
                          <img
                            src={image}
                            alt="house"
                            className="desc-carousel-image"
                          />
                        </div>
                      ))}
                    </Slider>
                  </Box>
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={2}>
                  <Typography variant="h5">{product?.title}</Typography>

                  <Typography variant="h5" color="teal">
                    {`₦ ${product.price.toLocaleString()}`}
                  </Typography>

                  <Stack direction="row" spacing={5}>
                    <Stack spacing={0.3}>
                      <Typography variant="subtitle1">Location: </Typography>
                      <Typography variant="subtitle1">
                        Category:{" "}
                      </Typography>
                      {product?.stock <= 0 ? (
                        <Typography
                          variant="subtitle2"
                          color="white"
                          p={0.4}
                          px={2}
                          sx={{
                            backgroundColor: "#E3364E",
                            borderRadius: "10px",
                            marginTop: "10px !important",
                          }}
                        >
                          Out Of Stock
                        </Typography>
                      ) : (
                        <Typography variant="subtitle1">Available: </Typography>
                      )}
                    </Stack>
                    <Stack spacing={0.3}>
                      <Typography variant="subtitle2">
                        {product?.location || "No Type"}
                      </Typography>
                      <Typography variant="subtitle2" color="text.secondary">
                        {product?.category}
                      </Typography>
                      {product?.stock > 0 && (
                        <Typography variant="subtitle2" color="text.secondary">
                          Yes
                        </Typography>
                      )}
                    </Stack>
                  </Stack>
                  <Typography variant="subtitle2" color="text.secondary">
                    {product?.desc}
                  </Typography>

                  <Box
                    justifyContent={{ xs: "center", sm: "left" }}
                    sx={{
                      padding: "13px 0",
                      borderWidth: "1px 0",
                      borderStyle: "dashed",
                      borderColor: "#ddd",
                      display: "flex",
                      gap: "15px",
                    }}
                  >
                    <Button
                      disabled={product?.stock <= 0}
                      sx={{
                        textTransform: "none",
                        bgcolor: "teal",
                        color: "white",
                        fontSize: "14px",
                        paddingX: "25px",
                        fontWeight: 600,
                        paddingY: "12px",
                        alignSelf: "start",
                        display: "flex",
                        gap: "10px",
                        borderRadius: "16px",
                        "&:hover": {
                          backgroundColor: "#119595",
                        },
                      }}
                    >
                      <MailOutlineIcon />
                      <Typography variant="subtitle1"> Send Email</Typography>
                    </Button>

                    <Tooltip title="Like Product">
                      <IconButton
                        sx={{
                          backgroundColor: "#e9ecef",
                          borderRadius: "16px",
                          paddingX: "12px",
                          color: "black",
                          "&:hover": {
                            backgroundColor: "teal",
                            color: "white",
                          },
                        }}
                      >
                        <FavoriteBorderIcon />
                      </IconButton>
                    </Tooltip>
                  </Box>
                  <Stack>
                    <Typography variant="body2" mb={1}>
                      Property Details
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={6} sm={4}>
                        <Stack spacing={1}>
                          <Typography variant="subtitle1" color="teal">
                            Property Type
                          </Typography>
                          <Typography>Semi-Detached Duplex</Typography>
                        </Stack>
                      </Grid>
                      <Grid item xs={6} sm={4}>
                        <Stack spacing={1}>
                          <Typography variant="subtitle1" color="teal">
                            Bedrooms
                          </Typography>
                          <Typography>4</Typography>
                        </Stack>
                      </Grid>
                      <Grid item xs={6} sm={4}>
                        <Stack spacing={1}>
                          <Typography variant="subtitle1" color="teal">
                            Bathrooms
                          </Typography>
                          <Typography>4.5</Typography>
                        </Stack>
                      </Grid>
                      <Grid item xs={6} sm={4}>
                        <Stack spacing={1}>
                          <Typography variant="subtitle1" color="teal">
                            Car Parking
                          </Typography>
                          <Typography>3</Typography>
                        </Stack>
                      </Grid>

                    </Grid>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>

            <Grid
              container
              spacing={3}
              sx={{
                my: 5,
              }}
            >
              {features.map(({ Icon, details }, index) => (
                <Grid key={index} item sm={6}>
                  <Stack
                    bgcolor="teal"
                    justifyContent="center"
                    alignItems="center"
                    p={7}
                    textAlign="center"
                    spacing={1.5}
                    color="#e9ecef"
                  >
                    <Icon
                      sx={{
                        fontSize: isNonMobile ? "50px" : "2.4rem",
                      }}
                    />
                    <Typography>{details}</Typography>
                  </Stack>
                </Grid>
              ))}
            </Grid>
            <Tab />
          </ContainerBox>
        </Box>
      )}
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Estate;
