import { useState, useEffect, useCallback } from "react";
import {
  Container,
  Box,
  Stack,
  Typography,
  Divider,
  styled,
  Drawer,
  CircularProgress,
  Button,
  Select,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import Sort from "./sort";
import Card from "./card";
import Navbar from "../../components/Navbar";
import Announcement from "../../components/Announcement";
import Newsletter from "../../components/Newsletter";
import Footer from "../../components/Footer";
import Range from "./range";
import { publicRequest } from "../../requestMethods";
import { useNavigate } from "react-router";
import { SentimentVeryDissatisfied } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { resetState, setSort } from "../../redux/filter";

export const CustomDivider = styled(Divider)`
  margin: 16px 0px 24px;
  border-width: 0px 0px thin;
  border-style: solid;
  border-color: rgb(243, 245, 249);
`;

const ProductListing = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    location,
    minPrice,
    maxPrice,
    minBed,
    maxBed,
    minCar,
    maxCar,
    type,
    sort,
  } = useSelector((state) => state.filter);

  const [loading, setLoading] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [products, setProducts] = useState([]);
  const isMobile = useMediaQuery("(max-width: 900px)");

  const openDrawer = () => setDrawer(true);
  const closeDrawer = () => setDrawer(false);

  const handleRefresh = () => {
    navigate("/products");
    dispatch(resetState());
  };

  const getProducts = useCallback(async () => {
    setLoading(true);

    const params = new URLSearchParams();

    if (sort) params.append("sort", sort);
    if (minPrice) params.append("minPrice", minPrice);
    if (maxPrice) params.append("maxPrice", maxPrice);
    if (minBed) params.append("minBed", minBed);
    if (maxBed) params.append("maxBed", maxBed);
    if (minCar) params.append("minCar", minCar);
    if (maxCar) params.append("maxCar", maxCar);
    if (type) params.append("propertyType", type);
    if (location) params.append("location", location);

    try {
      const res = await publicRequest.get(`/products?${params.toString()}`);
      setProducts(res.data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setLoading(false);
    }
  }, [
    sort,
    minPrice,
    maxPrice,
    minBed,
    maxBed,
    minCar,
    maxCar,
    type,
    location,
  ]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <>
      <Announcement />
      <Navbar />
      <Box bgcolor="#f4f4f5" py={5} minHeight="100vh">
        <Container maxWidth="lg">
          {isMobile && <Sort openDrawer={openDrawer} products={products} />}

          <Box sx={{ display: "flex", flexDirection: "row", mt: 4, gap: 3 }}>
            {!isMobile && (
              <Box sx={{ width: { md: "35%", lg: "32%" } }}>
                <Box
                  bgcolor="white"
                  py={2}
                  px={2}
                  borderRadius="10px"
                  sx={{ boxShadow: "0px 1px 3px rgba(3, 0, 71, 0.09)" }}
                >
                  {/* Desktop result count */}
                  <Typography
                    variant="h6"
                    sx={{
                      textAlign: "center",
                      fontWeight: 600,
                      mb: 2,
                    }}
                  >
                    {products.length} result{products.length !== 1 && "s"} found
                  </Typography>

                  <Range textAlign="center" />
                  <CustomDivider />

                  <Select
                    value={sort}
                    onChange={(e) => dispatch(setSort(e.target.value))}
                    fullWidth
                    size="small"
                    displayEmpty
                    variant="outlined"
                    sx={{
                      borderRadius: "8px",
                      backgroundColor: "#f9f9f9",
                      mb: 2,
                    }}
                  >
                    <MenuItem disabled value="">
                      Sort by
                    </MenuItem>
                    <MenuItem value="newest">Newest</MenuItem>
                    <MenuItem value="oldest">Oldest</MenuItem>
                    <MenuItem value="highest">Price: High to Low</MenuItem>
                    <MenuItem value="lowest">Price: Low to High</MenuItem>
                  </Select>

                  <Stack direction="row" spacing={1}>
                    <Button
                      onClick={getProducts}
                      disabled={loading}
                      fullWidth
                      sx={{
                        textTransform: "none",
                        backgroundColor: "#eb8150",
                        color: "white",
                        fontWeight: 600,
                        mt: 1,
                        borderRadius: "10px",
                        py: 1.2,
                      }}
                    >
                      Search
                    </Button>
                    <Button
                      onClick={() => {
                        dispatch(resetState());
                        getProducts();
                      }}
                      fullWidth
                      sx={{
                        textTransform: "none",
                        border: "1px solid #eb8150",
                        color: "#eb8150",
                        fontWeight: 600,
                        mt: 1,
                        borderRadius: "10px",
                        py: 1.2,
                      }}
                    >
                      Clear
                    </Button>
                  </Stack>
                </Box>
              </Box>
            )}

            <Box sx={{ width: { xs: "100%", md: "65%", lg: "68%" } }}>
              {loading ? (
                <Box
                  sx={{
                    height: "500px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CircularProgress />
                </Box>
              ) : products.length === 0 ? (
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    alignItems: "center",
                    flexDirection: "column",
                    width: "100%",
                    height: "500px",
                    textAlign: "center",
                  }}
                >
                  <SentimentVeryDissatisfied sx={{ fontSize: "40px" }} />
                  <Typography variant="h6">
                    Sorry, we couldn't find the property you are looking for.
                  </Typography>
                  <Typography variant="h6">
                    Please explore our other exciting Properties!
                  </Typography>
                  <Button
                    onClick={handleRefresh}
                    sx={{
                      textTransform: "none",
                      bgcolor: "primary.main",
                      color: "white",
                      px: 4,
                      py: 1.5,
                      borderRadius: "16px",
                      "&:hover": { backgroundColor: "#119595" },
                    }}
                  >
                    <Typography fontSize="17px" letterSpacing="1px">
                      Discover More
                    </Typography>
                  </Button>
                </Box>
              ) : (
                <Stack spacing={3}>
                  {products.map((prod) => (
                    <Card key={prod._id} {...prod} />
                  ))}
                </Stack>
              )}
            </Box>
          </Box>

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
            <Range textAlign="center" />
            <CustomDivider />

            <Select
              value={sort}
              onChange={(e) => dispatch(setSort(e.target.value))}
              fullWidth
              size="small"
              displayEmpty
              variant="outlined"
              sx={{
                borderRadius: "8px",
                backgroundColor: "#f9f9f9",
                mb: 2,
              }}
            >
              <MenuItem disabled value="">
                Sort by
              </MenuItem>
              <MenuItem value="newest">Newest</MenuItem>
              <MenuItem value="oldest">Oldest</MenuItem>
              <MenuItem value="highest">Price: High to Low</MenuItem>
              <MenuItem value="lowest">Price: Low to High</MenuItem>
            </Select>

            <Stack direction="row" spacing={1}>
              <Button
                onClick={getProducts}
                disabled={loading}
                fullWidth
                variant="contained"
                sx={{
                  textTransform: "none",
                  backgroundColor: "#eb8510", // Your brand color
                  color: "white",
                  fontWeight: 600,
                  mt: 1,
                  borderRadius: "10px",
                  py: 1.2,
                  transition: "all 0.2s ease",
                  boxShadow: "0 2px 4px rgba(235, 133, 16, 0.3)",
                  "&:hover": {
                    backgroundColor: "#c4690e", // Noticeably darker
                    boxShadow: "0 4px 8px rgba(235, 133, 16, 0.4)",
                    transform: "translateY(-1px)",
                  },
                  "&:active": {
                    transform: "translateY(0)",
                    boxShadow: "0 2px 4px rgba(235, 133, 16, 0.3)",
                  },
                  "&:disabled": {
                    backgroundColor: "#e0e0e0",
                    color: "#a8a8a8",
                    boxShadow: "none",
                  },
                }}
              >
                {loading ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  "Search"
                )}
              </Button>
              <Button
                onClick={() => {
                  dispatch(resetState());
                  getProducts();
                }}
                fullWidth
                variant="outlined"
                sx={{
                  textTransform: "none",
                  borderColor: "#eb8510",
                  color: "#eb8510",
                  fontWeight: 600,
                  mt: 1,
                  borderRadius: "10px",
                  py: 1.2,
                  transition: "all 0.2s ease",
                  "&:hover": {
                    backgroundColor: "rgba(235, 133, 16, 0.1)",
                    borderColor: "#c4690e",
                    color: "#c4690e",
                    boxShadow: "0 2px 4px rgba(235, 133, 16, 0.2)",
                  },
                }}
              >
                Clear
              </Button>
            </Stack>
          </Drawer>
        </Container>
      </Box>

      <Newsletter />
      <Footer />
    </>
  );
};

export default ProductListing;
