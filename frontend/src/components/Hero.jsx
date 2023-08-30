import React from "react";
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
  const classes = useStyles();
  const navigate = useNavigate();

  const propertiesList = () => {
    navigate('/products/search')
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
                <Select label="Price Range">
                  <MenuItem value={1}>₦0 - ₦20,000,000</MenuItem>
                  <MenuItem value={2}>₦20,000,000 - ₦50,000,000</MenuItem>
                  <MenuItem value={3}>₦50,000,000 - ₦70,000,000</MenuItem>
                  <MenuItem value={4}>₦70,000,000 - ₦100,000,000</MenuItem>
                  <MenuItem value={5}>₦100,000,000 and up</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth variant="outlined" className={classes.ctaTextField}>
                <InputLabel>Location</InputLabel>
                <Select label="Location">
                  <MenuItem value={1}>Ikoyi</MenuItem>
                  <MenuItem value={2}>Ikeja</MenuItem>
                  <MenuItem value={3}>London</MenuItem>
                  <MenuItem value={4}>Abuja</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth variant="outlined" className={classes.ctaTextField}>
                <InputLabel>Number of Beds</InputLabel>
                <Select label="Number of Beds">
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth variant="outlined" className={classes.ctaTextField}>
                <InputLabel>Date Added</InputLabel>
                <Select label="Date Added">
                  <MenuItem value={1}>Last 7 Days</MenuItem>
                  <MenuItem value={2}>Last 30 Days</MenuItem>
                  <MenuItem value={3}>Last 60 Days</MenuItem>
                  <MenuItem value={4}>Last 120 Days</MenuItem>
                  <MenuItem value={5}>Past year</MenuItem>
                </Select>
              </FormControl>
              <Button variant="contained" color="primary" className={classes.ctaButton} onClick={propertiesList}>
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
