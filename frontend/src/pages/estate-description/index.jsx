import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { useTheme } from "@mui/material/styles";
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
  Link as MuiLink,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";

import Navbar from "../../components/Navbar";
import Announcement from "../../components/Announcement";
import Newsletter from "../../components/Newsletter";
import Footer from "../../components/Footer";
import Loader from "../../components/Loader";
import { publicRequest } from "../../requestMethods";
import { features } from "../../data";
import Tab from "./Tab";
import Carousel from "./ProdDescCarousel";

const Estate = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const [showFullDesc, setShowFullDesc] = useState(false);

  useEffect(() => {
    const getEstate = async () => {
      try {
        const res = await publicRequest.get(`/estate/find/${id}`);
        setProduct(res.data);
      } catch (error) {
        console.error("Failed to fetch estate:", error);
      } finally {
        setLoading(false);
      }
    };
    getEstate();
  }, [id]);

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
              {/* Left - Image Carousel */}
              <Grid item xs={12} md={6}>
                <Carousel images={product?.img} />
              </Grid>

              {/* Right - Details */}
              <Grid item xs={12} md={6}>
                <Stack spacing={4}>
                  <Typography variant="h4" fontWeight={700} gutterBottom>
                    {product?.title}
                  </Typography>

                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    fontStyle="italic"
                  >
                    Category: {product?.categories}
                  </Typography>

                  {/* Description */}
                  <Box>
                    <Typography variant="h5" fontWeight={600} gutterBottom>
                      Description
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ lineHeight: 1.8 }}
                    >
                      {showFullDesc || product?.desc?.length <= 150
                        ? product?.desc
                        : `${product?.desc?.slice(0, 150)}`}
                    </Typography>
                    {product?.desc?.length > 150 && (
                      <MuiLink
                        component="button"
                        onClick={() => setShowFullDesc(!showFullDesc)}
                        sx={{ mt: 1, fontWeight: 600, display: "inline-block" }}
                      >
                        {showFullDesc ? "Show Less" : "Read More"}
                      </MuiLink>
                    )}
                  </Box>

                  {/* Contact + Property Details */}
                  <Box
                    display="flex"
                    flexDirection={{ xs: "column", sm: "row" }}
                    gap={4}
                    py={3}
                    sx={{
                      borderTop: "1px dashed #ccc",
                      borderBottom: "1px dashed #ccc",
                    }}
                  >
                    {/* Contact Information */}
                    <Box flex={1}>
                      <Typography variant="h5" fontWeight={600} gutterBottom>
                        Contact Information
                      </Typography>

                      <Stack spacing={1.5}>
                        {/* Phone numbers */}
                        <Box display={isMobile ? "block" : "flex"} gap={2}>
                          <Typography variant="body1">09019876493</Typography>
                          <Typography variant="body1">0700080003</Typography>
                        </Box>

                        {/* Action buttons */}
                        <Box display="flex" gap={2} flexWrap="wrap" mt={1}>
                          <Button
                            variant="contained"
                            startIcon={<MailOutlineIcon />}
                            onClick={() => navigate(`/bookings/${product._id}`)}
                            sx={{
                              textTransform: "none",
                              borderRadius: "16px",
                              fontWeight: 600,
                              px: 3,
                              py: 1.2,
                            }}
                          >
                            Send Email
                          </Button>
                          <Tooltip title="WhatsApp">
                            <IconButton
                              sx={{
                                backgroundColor: "#e9ecef",
                                borderRadius: "16px",
                                "&:hover": {
                                  backgroundColor: "primary.main",
                                  color: "white",
                                },
                              }}
                            >
                              <WhatsAppIcon />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="Call">
                            <IconButton
                              sx={{
                                backgroundColor: "#e9ecef",
                                borderRadius: "16px",
                                "&:hover": {
                                  backgroundColor: "primary.main",
                                  color: "white",
                                },
                              }}
                            >
                              <PhoneIcon />
                            </IconButton>
                          </Tooltip>
                        </Box>
                      </Stack>
                    </Box>

                    {/* Property Details */}
                    <Box flex={1}>
                      <Typography variant="h5" fontWeight={600} gutterBottom>
                        Property Details
                      </Typography>

                      <Grid container spacing={2} mt={1}>
                        <Grid item xs={6} sm={12} md={6}>
                          <Stack spacing={1}>
                            <Typography
                              variant="subtitle2"
                              color="primary.main"
                              fontWeight={700}
                            >
                              Estate Type
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {product?.categories}
                            </Typography>
                          </Stack>
                        </Grid>
                        <Grid item xs={6} sm={12} md={6}>
                          <Stack spacing={1}>
                            <Typography
                              variant="subtitle2"
                              color="primary.main"
                              fontWeight={700}
                            >
                              Houses
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {product?.house}
                            </Typography>
                          </Stack>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                </Stack>
              </Grid>
            </Grid>

            {/* Features */}
            <Box mt={8}>
              <Typography variant="h4" fontWeight={700} gutterBottom>
                Estate Features
              </Typography>
              <Grid container spacing={3} mt={1}>
                {features.map(({ Icon, details }, index) => (
                  <Grid key={index} item xs={12} sm={6} md={4}>
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
            </Box>

            {/* Additional Tabs */}
            <Box mt={6}>
              <Tab product={product} />
            </Box>
          </ContainerBox>
        </Box>
      )}
      <Newsletter />
      <Footer />
    </Box>
  );
};

export default Estate;
