import { useEffect } from "react";
import { Typography, Box, Stack, IconButton, Paper, Chip } from "@mui/material";
import { Link } from "react-router-dom";
import Bookmark from "@mui/icons-material/Bookmark";
import EastIcon from "@mui/icons-material/East";
import Header from "./Header";

const Booking = ({ _id, bookingId, enquiryDate, inspectionDate }) => {
  return (
    <Link
      to={`/user/bookings/${_id}`}
      style={{
        textDecoration: "none",
      }}
    >
      <Paper
        elevation={0}
        sx={{
          paddingX: 2,
          paddingY: 1.5,
          display: "flex",
          bgcolor: "white",
          borderRadius: "10px",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Typography variant="subtitle1" flex="1 1 0">
          {bookingId.substring(0, 8)}
        </Typography>

        <Typography
          variant="subtitle2"
          flex="1 1 0"
          // marginLeft="40px"
          whiteSpace={{ xs: "pre", sm: "normal" }}
          sx={{
            margin: "6px",
          }}
        >
          {new Date(enquiryDate).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </Typography>
        <Typography
          variant="subtitle2"
          flex="1 1 0"
          margin="6px"
          whiteSpace={{ xs: "pre", sm: "normal" }}
        >
          {new Date(inspectionDate).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </Typography>

        <Typography display={{ xs: "none", sm: "block" }}>
          <IconButton>
            <EastIcon />
          </IconButton>
        </Typography>
      </Paper>
    </Link>
  );
};

const Bookings = ({ openDrawer }) => {
  const bookings = [
    {
      _id: "1234",
      bookingId: "31943bfd-a345-40a7-96bd-df3b1fb38d0d",
      enquiryDate: Date.now(),
      inspectionDate: Date.now(),
    },
  ];

  return (
    <Stack spacing={2}>
      <Header Icon={Bookmark} title={"My Bookings"} openDrawer={openDrawer} />

      <Box display={{ xs: "none", sm: "flex" }} px={2} color="#7d879c">
        <Typography variant="body2" flex="1 1 0">
          Booking#
        </Typography>
        <Typography variant="body2" flex="1 1 0">
          Date Of Enqiury
        </Typography>
        <Typography variant="body2" flex="1 1 0">
          Date Of Inspection
        </Typography>
      </Box>

      <Stack spacing={2}>
        {bookings.map((booking, index) => (
          <Booking {...booking} key={index} />
        ))}
      </Stack>
    </Stack>
  );
};

export default Bookings;
