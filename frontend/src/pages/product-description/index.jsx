import Navbar from "../../components/Navbar";
import Announcement from "../../components/Announcement";
import Newsletter from "../../components/Newsletter";
import Footer from "../../components/Footer";
import { useState, useEffect } from "react";
import Loader from "../../components/Loader";
import { publicRequest } from "../../requestMethods";

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
  Paper,
  Modal,
  Collapse,
  Link as MuiLink,
} from "@mui/material";
import { features } from "../../data";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Tab from "./Tab";
import Carousel from "./ProdDescCarousel";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { userRequest } from "../../requestMethods";
import makeToast from "../../toaster";
import { useSelector } from "react-redux";
import { Close } from "@mui/icons-material";
import Login from "../../pages/Login";

const Product = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.currentUser);
  const id = location.pathname.split("/")[2];
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const [toggle, setToggle] = useState(false);
  const [open, setOpen] = useState(false);
  const [showFullDesc, setShowFullDesc] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSavedProperty = async () => {
    if (!user) {
      handleOpen();
      return;
    }
    try {
      const res = await userRequest.put(`/users/save-property/${id}`);
      if (res.data) {
        makeToast("success", res.data.message);
        setToggle(!toggle);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(`/products/${id}`);
        setProduct(res.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    getProduct();
  }, [id]);

  // const shortDesc = product?.desc?.slice(0, 300) || "";

  return (
    <Box>
      <Announcement />
      <Navbar />
      {loading ? (
        <Loader />
      ) : (
        <Box py={{ xs: 5, md: 6 }} px={4}>
          <ContainerBox maxWidth="lg">
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Carousel images={product?.img} />
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={4}>
                  <Typography variant="h4" fontWeight={700} gutterBottom>
                    {product?.title}
                  </Typography>

                  <Typography
                    variant="h5"
                    color="primary.main"
                    fontWeight={600}
                  >
                    ₦ {product?.price?.toLocaleString()}
                  </Typography>

                  <Stack spacing={2}>
                    {["address", "location", "category"].map((label) => (
                      <Stack
                        direction="row"
                        alignItems="center"
                        spacing={1}
                        key={label}
                      >
                        <Typography
                          variant="subtitle1"
                          fontWeight={600}
                          minWidth={90}
                        >
                          {label.charAt(0).toUpperCase() + label.slice(1)}:
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                          {product?.[label] || "Will be updated soon"}
                        </Typography>
                      </Stack>
                    ))}
                    {product?.inStock <= 0 ? (
                      <Typography
                        variant="body2"
                        sx={{
                          backgroundColor: "gray",
                          color: "white",
                          borderRadius: "8px",
                          padding: "8px 16px",
                          width: "fit-content",
                        }}
                      >
                        Out Of Stock
                      </Typography>
                    ) : (
                      <Stack direction="row" spacing={1}>
                        <Typography variant="subtitle1" fontWeight={600}>
                          Stock:
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                          {`${product?.inStock} units`}
                        </Typography>
                      </Stack>
                    )}
                  </Stack>

                  <Box>
                    <Collapse in={showFullDesc} collapsedSize={80}>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ lineHeight: 1.8 }}
                      >
                        {showFullDesc || product?.desc?.length <= 300
                          ? product?.desc
                          : `${product?.desc?.slice(0, 300)}...`}
                      </Typography>
                    </Collapse>
                    {product?.desc?.length > 300 && (
                      <MuiLink
                        component="button"
                        onClick={() => setShowFullDesc(!showFullDesc)}
                        sx={{
                          mt: 1,
                          fontWeight: 600,
                          display: "inline-block",
                        }}
                      >
                        {showFullDesc ? "Read Less" : "Read More"}
                      </MuiLink>
                    )}
                  </Box>

                  <Box
                    display="flex"
                    gap={2}
                    py={2.5}
                    sx={{
                      borderTop: "1px dashed #ccc",
                      borderBottom: "1px dashed #ccc",
                      flexWrap: "wrap",
                    }}
                  >
                    <Button
                      disabled={product?.stock <= 0}
                      onClick={() => navigate(`/booking/${product._id}`)}
                      sx={{
                        textTransform: "none",
                        bgcolor: "primary.main",
                        color: "white",
                        fontWeight: 600,
                        px: 3,
                        py: 1.5,
                        borderRadius: "16px",
                        display: "flex",
                        gap: 1,
                        "&:hover": {
                          backgroundColor: "#fc973f",
                        },
                      }}
                    >
                      <MailOutlineIcon />
                      Send Email
                    </Button>

                    <Tooltip title="Save Property">
                      <IconButton
                        onClick={handleSavedProperty}
                        sx={{
                          backgroundColor: toggle ? "primary.main" : "#e9ecef",
                          borderRadius: "16px",
                          color: toggle ? "white" : "black",
                          "&:hover": {
                            backgroundColor: "primary.main",
                            color: "white",
                          },
                        }}
                      >
                        <FavoriteBorderIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="WhatsApp">
                      <IconButton
                        sx={{
                          backgroundColor: "#e9ecef",
                          borderRadius: "16px",
                          color: "black",
                          "&:hover": {
                            backgroundColor: "primary.main",
                            color: "white",
                          },
                        }}
                      >
                        <WhatsAppIcon />
                      </IconButton>
                    </Tooltip>
                  </Box>

                  <Box>
                    <Typography variant="h5" fontWeight={600} gutterBottom>
                      Property Details
                    </Typography>
                    <Grid container spacing={3}>
                      <Grid item xs={6} sm={4}>
                        <Stack spacing={1}>
                          <Typography
                            variant="subtitle2"
                            color="primary.main"
                            fontWeight={700}
                          >
                            Property Type
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Semi-Detached Duplex
                          </Typography>
                        </Stack>
                      </Grid>
                      <Grid item xs={6} sm={4}>
                        <Stack spacing={1}>
                          <Typography
                            variant="subtitle2"
                            color="primary.main"
                            fontWeight={700}
                          >
                            Bedrooms
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {product?.bed}
                          </Typography>
                        </Stack>
                      </Grid>
                      <Grid item xs={6} sm={4}>
                        <Stack spacing={1}>
                          <Typography
                            variant="subtitle2"
                            color="primary.main"
                            fontWeight={700}
                          >
                            Bathrooms
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {product?.bath}
                          </Typography>
                        </Stack>
                      </Grid>
                      <Grid item xs={6} sm={4}>
                        <Stack spacing={1}>
                          <Typography
                            variant="subtitle2"
                            color="primary.main"
                            fontWeight={700}
                          >
                            Car Parking
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {product?.car}
                          </Typography>
                        </Stack>
                      </Grid>
                      <Grid item xs={6} sm={4}>
                        <Stack spacing={1}>
                          <Typography
                            variant="subtitle2"
                            color="primary.main"
                            fontWeight={700}
                          >
                            Size
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {product?.size}
                          </Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Box>
                </Stack>
              </Grid>
            </Grid>

            <Grid container spacing={4} my={6}>
              {features.map(({ Icon, details }, index) => (
                <Grid key={index} item sm={6} md={4}>
                  <Paper
                    elevation={2}
                    sx={{
                      border: "1px solid #dee2e6",
                      borderRadius: "10px",
                      p: 4,
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 1.5,
                      height: "100%",
                    }}
                  >
                    <Icon
                      sx={{
                        fontSize: isNonMobile ? "48px" : "2.4rem",
                        color: "primary.main",
                      }}
                    />
                    <Typography variant="body2" color="text.secondary">
                      {details}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>

            <Tab product={product} />
          </ContainerBox>
        </Box>
      )}
      <Newsletter />
      <Footer />
      <Modal open={open} onClose={handleClose}>
        <Login handleClose={handleClose} />
      </Modal>
    </Box>
  );
};

export default Product;
