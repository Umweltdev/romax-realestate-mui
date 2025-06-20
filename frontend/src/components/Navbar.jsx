import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { logout } from "../redux/userRedux";
import {
  Typography,
  Stack,
  Container,
  Button,
  Drawer,
  Box,
  useMediaQuery,
} from "@mui/material";
import NavBarDrawer from "./NavBarDrawer";
import MobileNavBar from "./MobileNavBar";

const Navbar = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const user = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [drawer, setDrawer] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <Container>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        {/* Logo */}
        <Link to="/" style={{ textDecoration: "none" }}>
          <Box>
            <img
              src="https://static.wixstatic.com/media/38c36f_cf2679a5ddd4403fa15dda614149c8f9~mv2.png/v1/fill/w_187,h_113,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/PHOTO-2021-09-15-13-59-41_edited.png"
              alt="Romax Properties Ltd Logo"
              style={{ height: isNonMobile ? "80px" : "48px" }}
            />
          </Box>
        </Link>

        {/* Hamburger menu for mobile */}
        <MobileNavBar openDrawer={() => setDrawer(true)} />

        {/* Desktop nav links */}
        <Stack
          direction="row"
          spacing={3.5}
          display={{ xs: "none", md: "flex" }}
        >
          {[
            { label: "House Prices", to: "/products" },
            { label: "Our Estates", to: "/estate" },
            { label: "Our Timeline", to: "/about" },
          ].map(({ label, to }) => (
            <Link key={label} to={to} style={{ textDecoration: "none" }}>
              <Typography
                color="#2b3445"
                variant="body2"
                sx={{ "&:hover": { color: "primary.main" } }}
              >
                {label}
              </Typography>
            </Link>
          ))}
        </Stack>

        {/* Desktop right-side user actions */}
        <Stack
          direction="row"
          spacing={3.5}
          alignItems="center"
          display={{ xs: "none", md: "flex" }}
        >
          {user && (
            <Link
              to={user.isAdmin ? "https://romax-admin.netlify.app/login" : "/user/profile"}
              style={{ textDecoration: "none" }}
            >
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  bgcolor: "primary.main",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  "&:hover": {
                    boxShadow: 3,
                  },
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    fontWeight: 600,
                    fontSize: "16px",
                  }}
                >
                  {user.username?.charAt(0).toUpperCase()}
                </Typography>
              </Box>
            </Link>
          )}

          <Typography
            color="#2b3445"
            variant="body2"
            sx={{ "&:hover": { color: "primary.main" } }}
          >
            Saved
          </Typography>

          <Button
            onClick={user ? handleLogout : () => navigate("/login")}
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "primary.main",
              borderRadius: "8px",
              borderColor: "primary.main",
              borderWidth: "2px",
              "&:hover": {
                color: "#FFFFFF",
                bgcolor: "primary.main",
              },
            }}
          >
            <Typography variant="body2">
              {user ? "Logout" : "Sign in"}
            </Typography>
          </Button>
        </Stack>
      </Stack>

      {/* Drawer for mobile nav */}
      <Drawer
        open={drawer}
        onClose={() => setDrawer(false)}
        anchor="left"
        sx={{
          zIndex: 1200,
          "& .MuiPaper-root": {
            backgroundColor: "white",
          },
        }}
      >
        <NavBarDrawer onClose={() => setDrawer(false)} />
      </Drawer>
    </Container>
  );
};

export default Navbar;
