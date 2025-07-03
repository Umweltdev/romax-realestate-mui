import { Typography, Box, Stack, Button, Link as MuiLink } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/userRedux";

// Reusable Link Block
const ILink = ({ text, Icon, url, closeDrawer }) => {
  const location = useLocation();
  const isActive =
    location.pathname === `/user/${url}` ||
    location.pathname.startsWith(`/user/${url}/`);

  return (
    <MuiLink
      component={Link}
      to={`/user/${url}`}
      onClick={closeDrawer}
      underline="none"
      sx={{
        display: "block",
        pl: 3.5,
        pr: 2,
        py: 1,
        color: isActive ? "primary.main" : "text.primary",
        borderLeft: "4px solid",
        borderColor: isActive ? "primary.main" : "transparent",
        transition: "all 0.3s ease",
        "&:hover": {
          color: "primary.main",
          borderColor: "primary.main",
          bgcolor: "action.hover",
        },
      }}
    >
      <Stack direction="row" alignItems="center" spacing={1}>
        {Icon}
        <Typography variant="subtitle2" fontWeight={500}>
          {text}
        </Typography>
      </Stack>
    </MuiLink>
  );
};

const DashboardBox = ({ closeDrawer }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const dashboards = [
    {
      text: "Bookings",
      Icon: <BookmarkBorderIcon fontSize="small" />,
      url: "bookings",
    },
    {
      text: "Saved",
      Icon: <FavoriteBorderIcon fontSize="small" />,
      url: "saved",
    },
  ];

  const account = [
    {
      text: "Profile Info",
      Icon: <PersonOutlineOutlinedIcon fontSize="small" />,
      url: "profile",
    },
    {
      text: "Addresses",
      Icon: <LocationOnIcon fontSize="small" />,
      url: "addresses",
    },
  ];

  return (
    <Box sx={{ textAlign: "left" }}>
      <Stack spacing={4}>
        <Box>
          <Typography
            pl={3.5}
            variant="subtitle2"
            color="text.secondary"
            mb={1}
            textAlign="left"
          >
            ACCOUNT SETTINGS
          </Typography>
          <Stack spacing={1}>
            {account.map((item, index) => (
              <ILink key={index} {...item} closeDrawer={closeDrawer} />
            ))}
          </Stack>
        </Box>
        <Box>
          <Typography
            pl={3.5}
            variant="subtitle2"
            color="text.secondary"
            mb={1}
            textAlign="left"
          >
            DASHBOARD
          </Typography>
          <Stack spacing={1}>
            {dashboards.map((item, index) => (
              <ILink key={index} {...item} closeDrawer={closeDrawer} />
            ))}
          </Stack>
        </Box>
        <Box px={3.5} mt={2}>
          <Button
            variant="outlined"
            onClick={handleLogout}
            fullWidth
            sx={{
              textTransform: "none",
              fontWeight: 600,
              py: 1.2,
              borderRadius: 1,
              color: "#fff",
              backgroundColor: "#eb8510",
              justifyContent: "center",
              pl: 3.5,
              "&:hover": {
                backgroundColor: "#d9770a",
                borderColor: "divider",
              },
            }}
          >
            <Typography variant="subtitle2" component="span">
              Logout
            </Typography>
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default DashboardBox;
