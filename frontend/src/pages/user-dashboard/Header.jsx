import { Typography, Stack, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-router-dom";

const Header = ({ Icon, title, button, openDrawer, link }) => {
  const isNonMobile = useMediaQuery("(min-width:968px)");
  const marginBottom = button ? { xs: 1.5, md: 0 } : 0;
  const alignment = button ? "start" : "center";

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      mb={3}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems={{ xs: "flex-start", md: "center" }}
        spacing={2}
        width="100%"
      >
        <Stack
          direction="row"
          spacing={1.5}
          alignItems="center"
          mb={marginBottom}
        >
          {Icon && (
            <Icon
              sx={{
                color: "primary.main",
                fontSize: "26px",
              }}
            />
          )}

          <Typography
            variant="h5"
            color="text.primary"
            fontSize={{ xs: "20px", md: "25px" }}
          >
            {title}
          </Typography>
        </Stack>

        {button && (
          <Link to={link} style={{ textDecoration: "none" }}>
            <Button
              sx={{
                textTransform: "none",
                bgcolor: "#fdecbd",
                color: "primary.main",
                fontSize: "subtitle2",
                px: isNonMobile ? "40px" : "20px",
                fontWeight: 600,
                py: "6px",
                "&:hover": {
                  backgroundColor: "rgba(210, 63, 87, 0.04)",
                },
              }}
            >
              {button}
            </Button>
          </Link>
        )}
      </Stack>

      {/* Mobile Drawer Button */}
      {!isNonMobile && (
        <IconButton onClick={openDrawer}>
          <MenuIcon />
        </IconButton>
      )}
    </Stack>
  );
};

export default Header;
