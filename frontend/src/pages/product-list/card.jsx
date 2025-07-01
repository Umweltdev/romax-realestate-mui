import { useState } from "react";
import {
  Box,
  Typography,
  Stack,
  Grid,
  useMediaQuery,
  IconButton,
  Modal,
} from "@mui/material";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Carousel from "./ProdListCarousel";
import { dateConverter } from "../user-dashboard/utils";
import { Link, useNavigate } from "react-router-dom";
import { userRequest } from "../../requestMethods";
import { useSelector } from "react-redux";
import makeToast from "../../toaster";
import Login from "../../pages/Login";

const Card = (props) => {
  const {
    _id,
    title,
    desc,
    price,
    bath,
    bed,
    img,
    car,
    isFeatured,
    propertyType,
    createdAt,
  } = props;
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.currentUser);
  const [toggle, setToggle] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSavedProperty = async () => {
    if (!user) {
      handleOpen();
      return;
    }
    try {
      const res = await userRequest.put(`/users/save-property/${_id}`);
      if (res.data) {
        makeToast("success", res.data.message);
        setToggle(!toggle);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      bgcolor="white"
      borderRadius={3}
      boxShadow="0px 3px 10px rgba(0, 0, 0, 0.1)"
      overflow="hidden"
      sx={{ width: "100%" }}
    >
      <Grid container>
        {/* Left: Image + Price */}
        <Grid item xs={12} sm={6.5} sx={{ p: 0 }}>
          <Link
            to={`/product/${_id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Stack sx={{ height: "100%" }}>
              <Box sx={{ height: "75%" }}>
                <Carousel images={img} />
              </Box>

              {!isFeatured ? (
                <Box
                  bgcolor="#f4f4f5"
                  p={2}
                  sx={{
                    height: "25%",
                    overflow: "hidden",
                    borderBottomLeftRadius: isNonMobile ? 12 : 0,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Stack
                    spacing={0.5}
                    justifyContent="center"
                    color="primary.main"
                  >
                    <Typography
                      variant="h5"
                      fontWeight={700}
                      letterSpacing={0.5}
                    >
                      ₦ {price?.toLocaleString()}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      letterSpacing={1.3}
                      fontWeight={600}
                    >
                      Offers Over
                    </Typography>
                  </Stack>
                </Box>
              ) : (
                <Box
                  bgcolor="#e78f2a"
                  color="white"
                  sx={{
                    height: "25%",
                    overflow: "hidden",
                    borderBottomLeftRadius: isNonMobile ? 12 : 0,
                  }}
                >
                  <Stack direction="row" height="100%">
                    <Stack
                      p={2}
                      spacing={0.5}
                      justifyContent="center"
                      sx={{ flex: isNonMobile ? "0 0 70%" : "0 0 60%" }}
                    >
                      <Typography
                        variant="h5"
                        fontWeight={700}
                        letterSpacing={0.5}
                      >
                        ₦ {price?.toLocaleString()}
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        letterSpacing={1.3}
                        fontWeight={600}
                      >
                        Offers Over
                      </Typography>
                    </Stack>
                    <Box
                      p={2}
                      sx={{
                        flex: isNonMobile ? "0 0 30%" : "0 0 40%",
                        display: "flex",
                        justifyContent: "center",
                        bgcolor: "primary.main",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        variant="body2"
                        textAlign="center"
                        sx={{
                          lineHeight: 1.3,
                          fontWeight: 600,
                          letterSpacing: 0.8,
                        }}
                      >
                        PREMIUM LISTING
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              )}
            </Stack>
          </Link>
        </Grid>

        {/* Right: Content */}
        <Grid item xs={12} sm={5.5} sx={{ p: 0 }}>
          <Stack
            px={3}
            py={3}
            height="100%"
            justifyContent="space-between"
            spacing={3}
          >
            <Link
              to={`/product/${_id}`}
              style={{ textDecoration: "none", color: "#2b3445" }}
            >
              <Typography
                variant="h6"
                component="h3"
                fontWeight={700}
                gutterBottom
                sx={{ mb: 1 }}
              >
                {title}
              </Typography>

              <Stack
                direction="row"
                spacing={3}
                alignItems="center"
                sx={{ mb: 2 }}
              >
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  fontWeight={600}
                >
                  {propertyType || "Semi-Detached"}
                </Typography>
                <Stack direction="row" spacing={1} alignItems="center">
                  <BedOutlinedIcon
                    sx={{ fontSize: 20, color: "text.secondary" }}
                  />
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    fontWeight={500}
                  >
                    <span style={{ fontSize: "12px" }}>X</span> {bed}
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <BathtubOutlinedIcon
                    sx={{ fontSize: 20, color: "text.secondary" }}
                  />
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    fontWeight={500}
                  >
                    <span style={{ fontSize: "12px" }}>X</span> {bath}
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <DriveEtaIcon
                    sx={{ fontSize: 20, color: "text.secondary" }}
                  />
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    fontWeight={500}
                  >
                    <span style={{ fontSize: "12px" }}>X</span> {car}
                  </Typography>
                </Stack>
              </Stack>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ lineHeight: 1.6, mb: 3 }}
              >
                {desc.substring(0, 200)}...
              </Typography>

              <Typography
                variant="caption"
                color="primary.main"
                fontWeight={600}
                sx={{ letterSpacing: 0.5 }}
              >
                Added on {dateConverter(createdAt)}
              </Typography>
            </Link>

            <Stack spacing={1}>
              <Stack
                direction="row"
                spacing={2}
                justifyContent="space-between"
                borderTop="1px solid #eb8510"
                pt={2}
                alignItems="center"
              >
                <Stack direction="row" spacing={1} alignItems="center">
                  <IconButton
                    onClick={() => navigate(`/booking/${_id}`)}
                    size="medium"
                    sx={{ color: "text.secondary" }}
                  >
                    <EmailOutlinedIcon sx={{ fontSize: 25 }} />
                  </IconButton>
                  <IconButton
                    onClick={handleSavedProperty}
                    size="medium"
                    sx={{ color: toggle ? "primary.main" : "text.secondary" }}
                  >
                    {toggle ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />}
                  </IconButton>
                </Stack>

                <Stack direction="row" alignItems="center" spacing={1}>
                  <a
                    href="tel:01612320345"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      textDecoration: "none",
                      color: "#7D879C",
                      cursor: "pointer",
                    }}
                    aria-label="Call phone number 0161 232 0345"
                  >
                    <LocalPhoneOutlinedIcon sx={{ fontSize: 24, mr: 0.5 }} />
                    <Typography
                      variant="subtitle2"
                      color="#7D879C"
                      fontWeight={600}
                    >
                      0161 232 0345
                    </Typography>
                  </a>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
      </Grid>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <Login handleClose={handleClose} />
        </Box>
      </Modal>
    </Box>
  );
};

export default Card;
