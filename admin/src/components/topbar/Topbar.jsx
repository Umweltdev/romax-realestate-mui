import {
  Box,
  Stack,
  IconButton,
  Typography,
  Tooltip
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Menu, Settings } from "@mui/icons-material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { logout } from "../../redux/userRedux";


const TopBar = ({ handleDrawerOpen }) => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const bigScreen = useMediaQuery("(min-width:968px)");
  const user = useSelector(state => state.user.currentUser)

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout())
    navigate("/login")
  }
  return (
    <Box
      bgcolor="#FFFFFF80"
      pt={1}
      px={{ xs: 1.5, sm: 4 }}
      sx={{
        // boxShadow: " 0px 4px 16px rgba(43, 52, 69, 0.1)",
        position: "sticky",
        top: 0,
        zIndex: 20,
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <IconButton
          onClick={handleDrawerOpen}
          sx={{
            background: "#F6F9FC",
            display: bigScreen ? "none" : "inline-flex",
          }}
        >
          <Menu />
        </IconButton>

        <Link
          to="/"
          style={{
            textDecoration: "none",
          }}
        >
          <Box >
            <img
              src="https://static.wixstatic.com/media/38c36f_cf2679a5ddd4403fa15dda614149c8f9~mv2.png/v1/fill/w_187,h_113,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/PHOTO-2021-09-15-13-59-41_edited.png"
              alt="Romax Properties Ltd Logo"
              style={{
                height: isNonMobile ? "80px" : "60px"
              }}
            />
          </Box>
        </Link>


        {
          user && <Stack
            direction="row"
            spacing={{ sm: 1.5 }}
            alignItems="center"
          >
            <Typography>{user.username}</Typography>
            <Tooltip title="Logout">
              <IconButton onClick={handleLogout}><Settings />  </IconButton>

            </Tooltip>

          </Stack>
        }



      </Stack>
    </Box>
  );
};

export default TopBar;