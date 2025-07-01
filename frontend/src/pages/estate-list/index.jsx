import React, { useState, useEffect, useRef } from "react";
import {
  Container,
  Box,
  Stack,
  Typography,
  Divider,
  styled,
  Drawer,
  MenuItem,
  useMediaQuery,
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
  const isMobile = useMediaQuery("(max-width:900px)");

  const openDrawer = () => setDrawer(true);
  const closeDrawer = () => setDrawer(false);

  const getProducts = async () => {
    try {
      setLoading(true);
      const res = await publicRequest.get("/estate");
      const sortedProducts = res.data.sort((a, b) => {
        if (sort === "newest")
          return new Date(b.createdAt) - new Date(a.createdAt);
        if (sort === "oldest")
          return new Date(a.createdAt) - new Date(b.createdAt);
        return 0;
      });
      setProducts(sortedProducts);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, [sort]);

  return (
    <>
      <Announcement />
      <Navbar />
      <Box bgcolor="#f4f4f5" py={5} minHeight="100vh">
        <Container maxWidth="lg">
          {isMobile && (
            <Sort openDrawer={openDrawer} sort={sort} setSort={setSort} />
          )}

          <Box sx={{ display: "flex", flexDirection: "row", mt: 4, gap: 3 }}>
            {!isMobile && (
              <Box sx={{ width: { md: "35%", lg: "32%" } }}>
                <Box
                  bgcolor="white"
                  py={2}
                  px={2}
                  borderRadius="10px"
                  sx={{
                    boxShadow: "0px 1px 3px rgba(3, 0, 71, 0.09)",
                    height: "100%",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ textAlign: "center", fontWeight: 600, mb: 2 }}
                  >
                    {products.length} result{products.length !== 1 && "s"} found
                  </Typography>

                  <CustomDivider />

                  <Stack spacing={2}>
                    {products.map((prod) => (
                      <Link
                        to={`/estate/${prod._id}`}
                        key={prod._id}
                        style={{ textDecoration: "none" }}
                      >
                        <MenuItem
                          sx={{
                            display: "block",
                            padding: "8px",
                            color: "black",
                            fontSize: "16px",
                            transition: "background-color 0.3s",
                            borderRadius: "6px",
                            "&:hover": {
                              backgroundColor: "#eb8510",
                              color: "white",
                            },
                          }}
                        >
                          {prod.title}
                        </MenuItem>
                      </Link>
                    ))}
                  </Stack>
                </Box>
              </Box>
            )}

            <Box sx={{ width: { xs: "100%", md: "65%", lg: "68%" } }}>
              {loading ? (
                <Loader />
              ) : (
                <Stack spacing={3} ref={containerRef}>
                  {products.map((prod) => (
                    <Card key={prod._id} {...prod} />
                  ))}
                </Stack>
              )}
            </Box>
          </Box>
          {/* Drawer filter (Mobile only) */}
          <Drawer
            open={drawer}
            onClose={closeDrawer}
            anchor="left"
            sx={{
              zIndex: 1200,
              display: { xs: "block", md: "none" },
              "& .MuiPaper-root": {
                backgroundColor: "white",
                width: 280,
                padding: 2,
              },
            }}
          >
            <Typography
              variant="h6"
              sx={{ textAlign: "center", fontWeight: 600, mb: 2 }}
            >
              {products.length} result{products.length !== 1 && "s"} found
            </Typography>

            <CustomDivider />

            <Stack spacing={2}>
              {products.map((prod) => (
                <Link
                  to={`/estate/${prod._id}`}
                  key={prod._id}
                  style={{ textDecoration: "none" }}
                >
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
          </Drawer>
        </Container>
      </Box>
      <Newsletter />
      <Footer />
    </>
  );
};

export default EstateListing;
