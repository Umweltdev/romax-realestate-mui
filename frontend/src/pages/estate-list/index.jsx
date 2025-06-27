import React, { useState, useEffect, useRef } from "react";
import {
  Container,
  Box,
  Grid,
  Stack,
  Divider,
  styled,
  Drawer,
  MenuItem,
} from "@mui/material";
import { Link } from "react-router-dom";
import Sort from "./sort";
import Card from "./card";
import Navbar from "../../components/Navbar";
import Announcement from "../../components/Announcement";
import Newsletter from "../../components/Newsletter";
import Footer from "../../components/Footer";
import Loader from "../../components/Loader";
import { publicRequest } from "../../requestMethods";

export const CustomDivider = styled(Divider)`
  margin: 16px 0px 24px;
  border-width: 0px 0px thin;
  border-style: solid;
  border-color: rgb(243, 245, 249);
`;

const EstateListing = () => {
  const [drawer, setDrawer] = useState(false);
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState("newest");
  const [loading, setLoading] = useState(true);
  const containerRef = useRef(null);

  const openDrawer = () => setDrawer(true);
  const closeDrawer = () => setDrawer(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicRequest.get("/estate");
        const sortedProducts = res.data.sort((a, b) => {
          if (sort === "newest") return new Date(b.createdAt) - new Date(a.createdAt);
          if (sort === "oldest") return new Date(a.createdAt) - new Date(b.createdAt);
          return 0;
        });
        setProducts(sortedProducts);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, [sort]);

  return (
    <>
      <Announcement />
      <Navbar />
      {loading ? (
        <Loader />
      ) : (
        <Box bgcolor="#F6F9FC" py={5}>
          <Container maxWidth="lg">
            <Sort openDrawer={openDrawer} sort={sort} setSort={setSort} />
            <Grid container spacing={3} mt={4}>
              {/* Sidebar - Filter */}
              <Grid
                item
                xs={0}
                md={4}
                lg={3.5}
                display={{ xs: "none", md: "block" }}
              >
                <Box
                  bgcolor="white"
                  p={2}
                  borderRadius="5px"
                  sx={{
                    boxShadow: "0px 1px 3px rgba(3, 0, 71, 0.09)",
                  }}
                >
                  <Stack spacing={2}>
                    {products.map((prod) => (
                      <Link to={`/estate/${prod._id}`} key={prod._id} style={{ textDecoration: "none" }}>
                        <MenuItem
                          sx={{
                            display: "block",
                            padding: "8px",
                            color: "black",
                            fontSize: "16px",
                            transition: "background-color 0.3s",
                          }}
                        >
                          {prod.title}
                        </MenuItem>
                      </Link>
                    ))}
                  </Stack>
                </Box>
              </Grid>

              {/* Card Grid */}
              <Grid item xs={12} md={8} lg={8.5}>
                <Stack spacing={3} ref={containerRef}>
                  {products.map((prod) => (
                    <Card key={prod._id} {...prod} />
                  ))}
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Box>
      )}

      <Drawer
        open={drawer}
        onClose={closeDrawer}
        anchor="left"
        sx={{
          zIndex: 1200,
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
            width: 300,
            height: "100vh",
            overflowY: "scroll",
            "&::-webkit-scrollbar": {
              width: "5px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#ebeff7",
              borderRadius: "100px",
            },
          }}
        >
          {products.map((prod) => (
            <Link to={`/estate/${prod._id}`} key={prod._id}>
              <MenuItem
                sx={{
                  display: "block",
                  padding: "8px",
                  textDecoration: "none",
                  color: "black",
                  fontSize: "16px",
                  transition: "background-color 0.3s",
                }}
              >
                {prod.title}
              </MenuItem>
            </Link>
          ))}
        </Box>
      </Drawer>

      <Newsletter />
      <Footer />
    </>
  );
};

export default EstateListing;
