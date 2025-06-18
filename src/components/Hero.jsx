import { useNavigate } from "react-router-dom";
import {
  Container,
  Grid,
  Paper,
  Stack,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { HomeOutlined } from "@mui/icons-material";
import FilterComponent from "./Filter";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
          url('https://i.ibb.co/0nQJv76/Whats-App-Image-2023-09-04-at-06-30-01.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        py: { xs: 10, sm: 12 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="flex-start">
          <Grid item xs={12} md={8}>
            <Box
              textAlign={{ xs: "center", md: "left" }}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems={{ xs: "center", md: "flex-start" }}
            >
              <Stack direction="row" spacing={2} alignItems="center" mb={4}>
                <HomeOutlined />
                <Typography variant="h6" color="primary.main">
                  Welcome To Romax
                </Typography>
              </Stack>
              <Typography
                variant="h5"
                sx={{ fontSize: { xs: "40px", md: "52px" }, mb: 4 }}
              >
                Find Your Dream, Suitable & Comfortable Home.
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  letterSpacing: "3px",
                  lineHeight: 1.3,
                  fontSize: { xs: "16px", sm: "20px" },
                  mb: 4,
                  color: "#e3e1e1",
                }}
              >
                Discover your dream home with us. Browse our listings and find
                the perfect property for you.
              </Typography>
              <Button
                onClick={() => navigate("/products")}
                sx={{
                  textTransform: "none",
                  bgcolor: "primary.main",
                  color: "white",
                  px: "30px",
                  py: "15px",
                  display: "inline-flex",
                  gap: "5px",
                  borderRadius: "30px",
                  mt: "25px",
                  "&:hover": {
                    backgroundColor: "#fc973f",
                  },
                }}
              >
                {/* <ChevronRight /> */}
                <Typography variant="body2" fontSize="17px" letterSpacing="1px">
                  Discover More
                </Typography>
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={4} display={{ xs: "none", md: "block" }}>
            <Paper
              elevation={3}
              sx={{
                display: "flex",
                flexDirection: "column",
                py: 3.5,
                px: 3,
                borderRadius: "10px",
                boxShadow: "rgb(161, 161, 172) 0px 2px 6px",
                border: "2px solid rgb(113, 113, 132)",
                mt: { md: 6, lg: 8 },
              }}
            >
              <FilterComponent />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
