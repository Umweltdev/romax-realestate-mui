import { useState, useEffect } from "react";
import {
  Typography,
  Box,
  Stack,
  Paper,
  Avatar,
  useMediaQuery,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import Header from "./Header";
import { useSelector } from "react-redux";

const Profile = ({ openDrawer }) => {
  const isNonMobile = useMediaQuery("(min-width:968px)");
  const Mobile = useMediaQuery("(min-width:600px)");
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Stack spacing={3}>
      <Header
        Icon={PersonIcon}
        title={"My Profile"}
        openDrawer={openDrawer}
        button="Edit Profile"
        link={`/user/profile/${user?._id}`}
      />

      <Paper
        elevation={0}
        sx={{
          paddingY: 2,
          paddingX: Mobile ? 3 : 1.5,
          display: "flex",
          bgcolor: "white",
          flexDirection: "column",
        }}
      >
        {/* Avatar Section */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          <Avatar sx={{ bgcolor: "primary.main", width: 64, height: 64 }}>
            <PersonIcon sx={{ fontSize: 32 }} />
          </Avatar>
        </Box>

        {/* User Info */}
        <Box
          sx={{
            display: "flex",
            flexDirection: isNonMobile ? "row" : "column",
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              flex: "1 1 0",
              display: "flex",
              flexDirection: "column",
              padding: "8px",
            }}
          >
            <small style={{ color: "rgb(125, 135, 156)" }}>First Name</small>
            <Typography variant="subtitle2" sx={{ fontSize: "16px" }} textTransform="capitalize">
              {user?.firstName}
            </Typography>
          </Box>

          <Box
            sx={{
              flex: "1 1 0",
              display: "flex",
              flexDirection: "column",
              padding: "8px",
            }}
          >
            <small style={{ color: "rgb(125, 135, 156)" }}>Last Name</small>
            <Typography variant="subtitle2" sx={{ fontSize: "16px" }} textTransform="capitalize">
              {user?.lastName}
            </Typography>
          </Box>

          <Box
            sx={{
              flex: "1 1 0",
              display: "flex",
              flexDirection: "column",
              padding: "8px",
            }}
          >
            <small style={{ color: "rgb(125, 135, 156)" }}>Email</small>
            <Typography variant="subtitle2" sx={{ fontSize: "16px" }}>
              {user?.email}
            </Typography>
          </Box>

          <Box
            sx={{
              flex: "1 1 0",
              display: "flex",
              flexDirection: "column",
              padding: "8px",
            }}
          >
            <small style={{ color: "rgb(125, 135, 156)" }}>Username</small>
            <Typography variant="subtitle2" sx={{ fontSize: "16px" }}>
              {user?.username}
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Stack>
  );
};

export default Profile;
