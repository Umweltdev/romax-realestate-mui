import React, { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  CircularProgress,
  Box,
  useMediaQuery,
} from "@mui/material";
import axios from "axios";
import { publicRequest } from "../requestMethods";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const isNonMobile = useMediaQuery("(min-width:968px)");

  useEffect(() => {
    const source = axios.CancelToken.source();

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const timeout = setTimeout(() => {
          source.cancel("Request timed out");
        }, 10000);

        const res = await publicRequest.get("/category", {
          cancelToken: source.token,
        });

        clearTimeout(timeout);
        const data = res.data || [];

        // Show fallback if API is empty
        if (!Array.isArray(data) || data.length === 0) {
          console.warn("No categories found, using fallback");
          setCategories([
            {
              _id: "fallback1",
              title: "Sample Apartment",
              img: "https://via.placeholder.com/300x200",
              bed: 3,
              cat: "sample",
            },
          ]);
        } else {
          setCategories(data);
        }
      } catch (err) {
        console.error("Failed to fetch categories:", err.message || err);
        setError("Unable to load categories. Showing demo items.");

        // Fallback sample data
        setCategories([
          {
            _id: "fallback1",
            title: "Sample Apartment",
            img: "https://via.placeholder.com/300x200",
            bed: 3,
            cat: "sample",
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => source.cancel("Component unmounted");
  }, []);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="300px"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box>
      {error && (
        <Typography color="error" textAlign="center" mt={2}>
          {error}
        </Typography>
      )}
      <Grid
        container
        spacing={3}
        sx={{
          padding: isNonMobile ? 5 : 2,
          marginTop: "0 !important",
        }}
      >
        {categories.map((cat) => (
          <Grid item xs={12} sm={6} md={4} key={cat._id || cat.id}>
            <CategoryItem
              img={cat.img}
              title={cat.title}
              bed={cat.bed}
              cat={cat.cat}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Categories;
