import React from "react";
import {
  Stack,
  Typography,
  Button,
  useMediaQuery,
  Box,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useSelector, useDispatch } from "react-redux";
import { resetState } from "../../redux/filter";

const Sort = ({ openDrawer, products }) => {
  const isMobile = useMediaQuery("(max-width:967px)");
  const dispatch = useDispatch();

  const {
    location,
    minPrice,
    maxPrice,
    minBed,
    maxBed,
    minCar,
    maxCar,
    type,
  } = useSelector((state) => state.filter);

  const isFilterActive =
    location || minPrice || maxPrice || minBed || maxBed || minCar || maxCar || type;

  return (
    <Box
      bgcolor="white"
      p={{ xs: 1.2, sm: 2 }}
      borderRadius="10px"
      sx={{
        boxShadow: "0px 1px 3px rgba(3, 0, 71, 0.09)",
        mt: { xs: 1, md: 0 },
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <Typography variant="h6">
          {products?.length}
          <span
            style={{
              fontSize: "14px",
              fontWeight: 400,
              marginLeft: 6,
            }}
          >
            results
          </span>
        </Typography>

        {/* Show only on mobile */}
        {isMobile && (
          <Button
            onClick={() => {
              if (isFilterActive) {
                dispatch(resetState());
              } else {
                openDrawer();
              }
            }}
            startIcon={<FilterListIcon />}
            sx={{
              bgcolor: isFilterActive ? "#eb8150" : "transparent",
              color: isFilterActive ? "white" : "inherit",
              borderRadius: "8px",
              border: isFilterActive ? "1px solid #eb8150" : "1px solid #ddd",
              textTransform: "none",
              px: 2,
              "&:hover": {
                backgroundColor: isFilterActive ? "#e4753f" : "#f9f9f9",
              },
            }}
          >
            {isFilterActive ? "Clear Filters" : "Filter"}
          </Button>
        )}
      </Stack>
    </Box>
  );
};

export default Sort;
