import { Box, Typography, Stack, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/userRedux";

const NavBarDrawer = () => {
  const user = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <Stack
      justifyContent="space-between"
      sx={{
        width: "200px", // reduced from 250px
        height: "100%",
        bgcolor: "white",
        py: 3,
        px: 1.5,
      }}
    >
      {/* Logo + Links */}
      <Stack spacing={3}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Box display="flex" justifyContent="center">
            <img
              src="https://static.wixstatic.com/media/38c36f_cf2679a5ddd4403fa15dda614149c8f9~mv2.png/v1/fill/w_187,h_113,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/PHOTO-2021-09-15-13-59-41_edited.png"
              alt="Romax Properties Ltd Logo"
              style={{
                maxWidth: "100px", // slightly reduced for compact layout
                height: "auto",
              }}
            />
          </Box>
        </Link>

        <Stack spacing={1.2}>
          {[
            { label: "House Prices", to: "/products" },
            { label: "Our Estates", to: "/estate" },
            { label: "Our Timeline", to: "/timeline" },
            { label: "About Us", to: "/about-us" },
            { label: "Saved", to: "#" }, // update route if needed
          ].map((item) => (
            <Link
              key={item.label}
              to={item.to}
              style={{ textDecoration: "none" }}
            >
              <Typography
                color="#2b3445"
                variant="body2"
                py={0.8}
                sx={{
                  px: 1,
                  "&:hover": {
                    color: "primary.main",
                    transition: "color 0.3s ease-in-out",
                  },
                }}
              >
                {item.label}
              </Typography>
            </Link>
          ))}
        </Stack>
      </Stack>

      {/* Auth Button */}
      <Box>
        <Button
          onClick={user ? handleLogout : () => navigate("/login")}
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "primary.main",
            width: "100%",
            borderRadius: "8px",
            borderColor: "primary.main",
            borderWidth: "2px",
            "&:hover": {
              color: "#FFFFFF",
              bgcolor: "primary.main",
            },
          }}
        >
          <Typography variant="body2">{user ? "Logout" : "Sign in"}</Typography>
        </Button>
      </Box>
    </Stack>
  );
};

export default NavBarDrawer;
