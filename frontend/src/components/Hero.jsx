import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router";
import { Button, Typography, Container, Grid, Paper, Select, MenuItem, FormControl, InputLabel } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  heroContainer: {
    background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://i.ibb.co/CWprmfb/island-house-removebg-preview.png')`,
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
    background: theme.palette.common.white,
    padding: theme.spacing(8),
  },
  ctaButton: {
    marginTop: theme.spacing(3),
  },
  ctaTextField: {
    marginBottom: theme.spacing(2),
  },
}));

const Hero = () => {
  const [place, setPlace] = useState("ikoyi");
  const [priceRange, setPriceRange] = useState("0");
  const [bed, setBed] = useState("0");

  const classes = useStyles();
  const navigate = useNavigate();

  const propertiesList = () => {
    navigate('/products/search')
  }

  const propertiesFiltered = () => {
    navigate(`/products?place=${place}&bed=${bed}&priceRange=${priceRange}`)
  }

  return (
    <div className={classes.heroContainer}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <div className={classes.heroContent}>
              <Typography variant="h2" component="h1" gutterBottom>
                Welcome to Romax Properties
              </Typography>
              <Typography variant="h5" paragraph>
                Discover your dream home with us. Browse our listings and find the perfect property for you.
              </Typography>
              <Button variant="contained" color="primary" className={classes.ctaButton} onClick={propertiesList}>
                View Properties
              </Button>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper className={classes.ctaContainer}>
              <Typography variant="h6" gutterBottom>
                Filter Properties
              </Typography>
              <FormControl fullWidth variant="outlined" className={classes.ctaTextField}>
                <InputLabel>Price Range</InputLabel>
                <Select onChange={(e) => setPriceRange(e.target.value)}>
                  <MenuItem value="0">₦0 - ₦20,000,000</MenuItem>
                  <MenuItem value="1">₦20,000,000 - ₦50,000,000</MenuItem>
                  <MenuItem value="2">₦50,000,000 - ₦70,000,000</MenuItem>
                  <MenuItem value="3">₦70,000,000 - ₦100,000,000</MenuItem>
                  <MenuItem value="4">₦100,000,000 and up</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth variant="outlined" className={classes.ctaTextField}>
                <InputLabel>Location</InputLabel>
                <Select onChange={(e) => setPlace(e.target.value)}>
                  <MenuItem value="ikoyi">Ikoyi</MenuItem>
                  <MenuItem value="ikeja">Ikeja</MenuItem>
                  <MenuItem value="london">London</MenuItem>
                  <MenuItem value="abuja">Abuja</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth variant="outlined" className={classes.ctaTextField}>
                <InputLabel>Number of Beds</InputLabel>
                <Select onChange={(e) => setBed(e.target.value)}>
                  <MenuItem value="0">1</MenuItem>
                  <MenuItem value="1">2</MenuItem>
                  <MenuItem value="2">3</MenuItem>
                  <MenuItem value="3">4</MenuItem>
                  <MenuItem value="4">5</MenuItem>
                  <MenuItem value="5">6</MenuItem>
                </Select>
              </FormControl>
              {/* <FormControl fullWidth variant="outlined" className={classes.ctaTextField}>
                <InputLabel>Date Added</InputLabel>
                <Select label="Date Added">
                  <MenuItem value="0">Last 7 Days</MenuItem>
                  <MenuItem value="1">Last 30 Days</MenuItem>
                  <MenuItem value="2">Last 60 Days</MenuItem>
                  <MenuItem value="3">Last 120 Days</MenuItem>
                  <MenuItem value="4">Past year</MenuItem>
                </Select>
              </FormControl> */}
              <Button variant="contained" color="primary" className={classes.ctaButton} onClick={propertiesFiltered}>
                Search
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Hero;
