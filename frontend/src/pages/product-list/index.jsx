import { useState, useEffect } from "react";
import { Container, Box, Grid, Stack, Typography, Drawer } from "@mui/material";
import Sort from "./sort";
import Filter from "./filter";
import Card from "./card";
import Navbar from "../../components/Navbar";
import Announcement from "../../components/Announcement";
import Newsletter from "../../components/Newsletter";
import Footer from "../../components/Footer";
import { publicRequest } from "../../requestMethods";
import { features } from "../../data";

const ProductListing = () => {
  const [drawer, setDrawer] = useState(false);
  const [products, setProducts] = useState([]);

  const openDrawer = () => {
    setDrawer(true);
  };

  const closeDrawer = () => {
    setDrawer(false);
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicRequest.get("/products");
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);
  return (
    <>
      <Announcement />
      <Navbar />
      <Box bgcolor="#F6F9FC" py={5}>
        <Container maxWidth="lg">
          <Sort openDrawer={openDrawer} />
          <Grid container spacing={3} marginTop={4}>
            <Grid item md={3} display={{ xs: "none", md: "block" }}>
              <Box
                bgcolor="white"
                py={3}
                px={2}
                borderRadius="5px"
                sx={{
                  boxShadow: "0px 1px 3px rgba(3, 0, 71, 0.09)",
                }}
              >
                <Filter />
              </Box>
            </Grid>
            <Grid item xs={12} md={9}>
              <Stack spacing={3}>
                {products.map((prod) => (
                  <Card {...prod} />
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Newsletter />

      <Drawer
        open={drawer}
        onClose={closeDrawer}
        anchor="left"
        bgcolor="white"
        sx={{
          zIndex: "1200",
          "& .MuiPaper-root": {
            backgroundColor: "white",
          },
        }}
      >
        <Box
          bgcolor="white"
          py={3}
          px={2.2}
          borderRadius="5px"
          sx={{
            width: "300px",
            height: "100vh",

            overflowY: "scroll",
            "&::-webkit-scrollbar": {
              width: "5px",
            },
            "&::-webkit-scrollbar-track": {
              background: "transparent",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#ebeff7",
              borderRadius: "100px",
            },
          }}
        >
          <Filter />
        </Box>
      </Drawer>
      <Footer />
    </>
  );
};

export default ProductListing;
