import { useState, useEffect, useRef } from "react";
import {
  Typography,
  Box,
  Stack,
  Button,
  IconButton,
  Divider,
  styled,
  Grid,
  useMediaQuery,
} from "@mui/material";
import Bookmark from "@mui/icons-material/Bookmark";
import { useNavigate, useParams } from "react-router-dom";
import Carousel from "./Carousel";
import PropertyDetails from "./PropertyDetails";
import MenuIcon from "@mui/icons-material/Menu";

import { product } from "./data";
import { dateConverter } from "./utils";

export const CustomDivider = styled(Divider)`
  margin: 16px 0px 24px;
  border-width: 0px 0px thin;
  border-style: solid;
  border-color: #7d879c;
`;
const Booking = ({ openDrawer }) => {
  const isNonMobile = useMediaQuery("(min-width:968px)");
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <Box>
      <Stack flex={1} spacing={3}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="start"
        >
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "start", md: "center" }}
            width={{ xs: "auto", md: "100%" }}
          >
            <Stack
              direction="row"
              spacing={{ xs: 1, md: 2 }}
              alignItems="center"
              mb={{ xs: 1.5, md: 0 }}
            >
              <Bookmark
                sx={{
                  color: "primary.main",
                }}
              />
              <Typography
                variant="h5"
                color="text.primary"
                fontSize={{ xs: "20px", md: "25px" }}
              >
                Booking Details
              </Typography>
            </Stack>
          </Stack>
          <IconButton
            onClick={openDrawer}
            sx={{
              display: isNonMobile ? "none" : "inline-flex",
            }}
          >
            <MenuIcon />
          </IconButton>
        </Stack>

        <Stack spacing={2}>
          <Stack spacing={1}>
            <Stack direction="row" spacing={1.5}>
              <Typography>BookingID: </Typography>
              <Typography color="#7D879C">
                31943bfd-a345-40a7-96bd-df3b1fb38d0d
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1.5}>
              <Typography> Enquiry Date: </Typography>
              <Typography color="#7D879C">
                {dateConverter(Date.now())}
              </Typography>
            </Stack>{" "}
            <Stack direction="row" spacing={1.5}>
              <Typography>Inspection Date: </Typography>
              <Typography color="#7D879C">
                {dateConverter(Date.now())}
              </Typography>
            </Stack>
          </Stack>

          <Typography variant="h5">{product?.title}</Typography>

          <Typography variant="h5" color="teal">
            {`₦ ${product.price.toLocaleString()}`}
          </Typography>

          <Carousel images={product.images} />
        </Stack>

        <PropertyDetails product={product} />
      </Stack>
    </Box>
  );
};

export default Booking;
