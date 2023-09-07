import { Container, Grid } from "@mui/material";

import Sort from "./sort";
import Navbar from "../../components/Navbar";
import Announcement from "../../components/Announcement";
import Newsletter from "../../components/Newsletter";
import Footer from "../../components/Footer";

const ProductListing = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <Container maxWidth="lg">
        <Sort />
        <Grid container spacing={3} marginTop={4}>
          <Grid item></Grid>
        </Grid>
      </Container>
      <Newsletter />
      <Footer />
    </>
  );
};

export default ProductListing;
