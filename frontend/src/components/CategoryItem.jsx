import React, { useState, useEffect } from "react";
import { Box, Stack, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setMaxBed } from "../redux/filter";

function CategoryItem({ img, title, cat, bed }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [bgImage, setBgImage] = useState(null);

  const handleSeeMoreClick = (maxBed) => {
    dispatch(setMaxBed(maxBed));
    navigate("/products");
  };

  useEffect(() => {
    if (!img) return;

    const preloadImage = new Image();
    preloadImage.src = img;

    preloadImage.onload = () => {
      setBgImage(img);
    };

    preloadImage.onerror = (err) => {
      console.error("Failed to load image:", img, err);
      setBgImage(null);
    };
  }, [img]);

  return (
    <Box
      sx={{
        backgroundImage: bgImage ? `url(${bgImage})` : "none",
        backgroundColor: bgImage ? "transparent" : "#ccc",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        padding: "20px",
        height: "300px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "rgb(161, 161, 172) 0px 2px 6px",
        borderRadius: "8px",
        cursor: "pointer",
        transition: "background-image 0.5s ease-in-out",
      }}
      onClick={() => handleSeeMoreClick(bed)}
    >
      <Stack spacing={1}>
        <Typography variant="h5" color="white" textAlign="center">
          {title}
        </Typography>
        <Button
          sx={{
            textTransform: "none",
            bgcolor: "primary.main",
            color: "white",
            fontSize: "14px",
            px: 2.5,
            py: 1,
            fontWeight: 600,
            alignSelf: "center",
            borderRadius: "16px",
            "&:hover": {
              backgroundColor: "#fc973f",
            },
          }}
          onClick={(e) => {
            e.stopPropagation();
            handleSeeMoreClick(3);
          }}
        >
          SEE NOW
        </Button>
      </Stack>
    </Box>
  );
}

export default CategoryItem;
