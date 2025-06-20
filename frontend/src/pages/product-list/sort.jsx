import {
  Box,
  Stack,
  IconButton,
  FormControl,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

import FilterListIcon from "@mui/icons-material/FilterList";
import useMediaQuery from "@mui/material/useMediaQuery";
import { setSort, resetState } from "../../redux/filter";
import { useSelector, useDispatch } from "react-redux";

const Sort = ({ openDrawer, products }) => {
  const dispatch = useDispatch();
  const {
    sort,
    location,
    minPrice,
    maxPrice,
    minBed,
    maxBed,
    minCar,
    maxCar,
    type,
  } = useSelector((state) => state.filter);
  const isNonMobile = useMediaQuery("(min-width:968px)");

  // Check if any filter is active
  const isFilterActive =
    location ||
    minPrice ||
    maxPrice ||
    minBed ||
    maxBed ||
    minCar ||
    maxCar ||
    type;

  const handleFilterClick = () => {
    if (isFilterActive) {
      // Reset the filters
      dispatch(resetState());
    } else {
      // Open the drawer
      openDrawer();
    }
  };

  return (
    <Box
      bgcolor="white"
      p={{ xs: 1.2, sm: 2 }}
      borderRadius="10px"
      sx={{
        boxShadow: "0px 1px 3px rgba(3, 0, 71, 0.09)",
      }}
    >
      <Stack
        direction={"row"}
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h6">
          {products?.length}
          <span
            style={{
              fontSize: "14px",
              fontWeight: "400",
              marginLeft: 2,
            }}
          >
            results
          </span>
        </Typography>

        <Stack direction="row" spacing={1} alignItems="center">
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography display={{ xs: "none", sm: "block" }}>
              Sort By:
            </Typography>
            <FormControl
              size="small"
              sx={{
                flex: 1,
              }}
            >
              <Select
                value={sort}
                onChange={(e) => {
                  dispatch(setSort(e.target.value));
                }}
                sx={{
                  borderRadius: "10px",
                }}
              >
                <MenuItem value={"highest"}>Highest</MenuItem>
                <MenuItem value={"lowest"}>Lowest</MenuItem>
                <MenuItem value={"newest"}>Newest</MenuItem>
                <MenuItem value={"oldest"}>Oldest</MenuItem>
              </Select>
            </FormControl>
          </Stack>

          {/* Mobile Filter Icon Button */}
          <IconButton
            onClick={handleFilterClick}
            sx={{
              display: isNonMobile ? "none" : "inline-flex",
              bgcolor: isFilterActive ? "#eb8150" : "transparent",
              color: isFilterActive ? "white" : "inherit",
              borderRadius: "8px",
              transition: "all 0.3s ease",
              border: isFilterActive ? "1px solid #eb8150" : "1px solid #ddd",
              "&:hover": {
                backgroundColor: isFilterActive ? "#e4753f" : "#f9f9f9",
              },
            }}
          >
            <FilterListIcon />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Sort;
