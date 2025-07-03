import {
  Typography,
  Box,
  Paper,
  Avatar,
  useMediaQuery,
  IconButton,
  Tooltip,
} from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Header from "./Header";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Profile = ({ openDrawer }) => {
  const Mobile = useMediaQuery("(min-width:600px)");
  const user = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/user/profile/${user?._id}`);
  };

  const username = user?.username || "User";

  return (
    <Box>
      <Header
        title={
          <Box>
            <Typography
              variant="h1"
              color="text.secondary"
              fontWeight={600}
              sx={{ fontSize: "20px" }}
            >
              My Profile
            </Typography>
            {/* <Typography
              variant="body1"
              textTransform="capitalize"
              sx={{ lineHeight: 1.67, fontSize: "12px" }}
            >
              {username}
            </Typography> */}
          </Box>
        }
        openDrawer={openDrawer}
      />

      <Paper
        elevation={0}
        sx={{
          position: "relative",
          bgcolor: "white",
          py: 2,
          px: Mobile ? 3 : 1.5,
        }}
      >
        {/* Edit Icon in top-right */}
        <Box sx={{ position: "absolute", top: 16, right: 16 }}>
          <Tooltip title="Edit Profile">
            <IconButton
              onClick={handleEdit}
              sx={{
                bgcolor: "primary.main",
                color: "white",
                boxShadow: 2,
                "&:hover": {
                  bgcolor: "primary.dark",
                },
              }}
            >
              <EditOutlinedIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>

        {/* Avatar Section */}
        <Box sx={{ textAlign: "center", mb: 3, mt: 1 }}>
          <Avatar
            sx={{
              bgcolor: "primary.main",
              width: 64,
              height: 64,
              mx: "auto",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            {username.charAt(0)}
          </Avatar>
        </Box>

        {/* User Info - Stacked Vertically */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {[
            { label: "Username", value: user?.username },
            { label: "First Name", value: user?.firstName },
            { label: "Last Name", value: user?.lastName },
            { label: "Email", value: user?.email },
          ].map((item, index) => (
            <Box key={index}>
              <Typography
                variant="caption"
                sx={{
                  color: "rgb(125, 135, 156)",
                  mb: 0.5,
                  display: "block",
                  fontSize: "13px",
                }}
              >
                {item.label}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  fontSize: "16px",
                  textTransform: "capitalize",
                  wordBreak: "break-word",
                }}
              >
                {item.value}
              </Typography>
            </Box>
          ))}
        </Box>
      </Paper>
    </Box>
  );
};

export default Profile;
