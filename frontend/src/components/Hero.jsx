import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router";
import styled from "styled-components";
import {
  Container,
  Grid,
  Paper,
  Select,
  MenuItem,
  FormControl,
  Stack,
  InputLabel,
} from "@mui/material";
import { mobile, mobileXR, tablet } from "../responsive";
import { Button, Typography } from "@mui/material";
import { ChevronRight } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  heroContainer: {
    background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://i.ibb.co/0nQJv76/Whats-App-Image-2023-09-04-at-06-30-01.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: theme.palette.common.white,
    padding: theme.spacing(10, 0),
  },
  heroContent: {
    maxWidth: 600,
    margin: "0 auto",
  },
  ctaContainer: {
    background: "rgba(255, 255, 255, 0.9)", // Slightly transparent white background
    padding: theme.spacing(8),
    borderRadius: theme.spacing(3), // Increased border radius
    boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.3)", // More prominent shadow
  },
  ctaButton: {
    marginTop: theme.spacing(3),
    backgroundColor: "transparent", // Make the button transparent
    color: theme.palette.primary.main,
    border: `2px solid ${theme.palette.primary.main}`, // Add border
    borderRadius: theme.spacing(2), // Increase border radius
    transition: "background-color 0.3s ease, color 0.3s ease",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
  },
  ctaTextField: {
    marginBottom: theme.spacing(2),
  },
}));

const Title = styled.h1`
  font-size: 55px;
  ${mobile({ fontSize: "10px" })};
  ${mobileXR({ fontSize: "12px" })};
  ${tablet({ fontSize: "20px" })};
`;
const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  ${mobile({ display: "none" })};
  ${mobileXR({ display: "none" })};
  ${tablet({ fontSize: "9px" })};
`;

const Hero = () => {
  const [place, setPlace] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [bed, setBed] = useState("");

  const classes = useStyles();
  const navigate = useNavigate();

  const propertiesFiltered = () => {
    navigate(`/products?place=${place}&bed=${bed}&priceRange=${priceRange}`);
  };

  return (
    <div className={classes.heroContainer}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <div className={classes.heroContent}>
              <Title>Welcome to Romax Properties</Title>
              <Desc variant="h5" paragraph>
                Discover your dream home with us. Browse our listings and find
                the perfect property for you.
              </Desc>
              <Button
                onClick={() => navigate("/products")}
                sx={{
                  textTransform: "none",
                  bgcolor: "teal",
                  color: "white",
                  paddingX: "30px",
                  paddingY: "15px",
                  alignSelf: "start",
                  display: "flex",
                  gap: "5px",
                  borderRadius: "16px",
                  "&:hover": {
                    backgroundColor: "#119595",
                  },
                }}
              >
                <ChevronRight />
                <Typography variant="body2" fontSize="17px" letterSpacing="1px">
                  {" "}
                  Discover More
                </Typography>
              </Button>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                display: "flex",
                flexDirection: "column",
                paddingY: 5,
                paddingX: 5,
                borderRadius: "10px",
                boxShadow: "rgb(161, 161, 172) 0px 2px 6px",
                border: "2px solid rgb(113, 113, 132)",
              }}
            >
              <Typography
                variant="h5"
                mb={3}
                fontSize="30px"
                letterSpacing="3px"
              >
                Filter Properties
              </Typography>
              <Stack spacing={2.5}>
                <FormControl>
                  <InputLabel>Price</InputLabel>

                  <Select
                    onChange={(e) => {
                      setPriceRange(e.target.value);
                    }}
                    label={"Price"}
                    sx={{
                      borderRadius: "10px",
                    }}
                  >
                    <MenuItem value={10000000}>₦10,000,000</MenuItem>
                    <MenuItem value={20000000}>₦20,000,000</MenuItem>
                    <MenuItem value={30000000}>₦30,000,000</MenuItem>
                    <MenuItem value={40000000}>₦40,000,000</MenuItem>
                    <MenuItem value={50000000}>₦50,000,000</MenuItem>
                    <MenuItem value={60000000}>₦60,000,000</MenuItem>
                  </Select>
                </FormControl>
                <FormControl>
                  <InputLabel>Location</InputLabel>

                  <Select
                    onChange={(e) => {
                      setPlace(e.target.value);
                    }}
                    label="Location"
                    sx={{
                      borderRadius: "10px",
                    }}
                  >
                    <MenuItem value="yaba">Yaba</MenuItem>
                    <MenuItem value="lekki">Lekki</MenuItem>
                    <MenuItem value="ikeja">Ikeja</MenuItem>
                    <MenuItem value="abuja">Abuja</MenuItem>
                  </Select>
                </FormControl>
                <FormControl>
                  <InputLabel>Bed</InputLabel>

                  <Select
                    onChange={(e) => {
                      setBed(e.target.value);
                    }}
                    label="Bed"
                    sx={{
                      borderRadius: "10px",
                    }}
                  >
                    <MenuItem value={0}>0</MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                  </Select>
                </FormControl>
                <Button
                  onClick={propertiesFiltered}
                  sx={{
                    textTransform: "none",
                    bgcolor: "teal",
                    color: "white",
                    // fontSize: "18px",
                    paddingX: "20px",
                    // fontWeight: 600,
                    paddingY: "10px",
                    alignSelf: "start",
                    display: "flex",
                    gap: "5px",
                    borderRadius: "16px",
                    "&:hover": {
                      backgroundColor: "#119595",
                    },
                  }}
                >
                  <Typography variant="subtitle1" letterSpacing="1px">
                    {" "}
                    Quick Search
                  </Typography>
                </Button>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Hero;
