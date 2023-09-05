import { useState } from "react";
import {
  Box,
  Stack,
  Avatar,
  Grid,
  Container,
  IconButton,
  FormControl,
  MenuItem,
  Select,
  Typography,
  Drawer,
} from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import ViewListIcon from "@mui/icons-material/ViewList";
import FilterListIcon from "@mui/icons-material/FilterList";
import useMediaQuery from "@mui/material/useMediaQuery";

const Sort = () => {
  return (
    <Box
      bgcolor="white"
      p={2}
      borderRadius="5px"
      sx={{
        boxShadow: "0px 1px 3px rgba(3, 0, 71, 0.09)",
      }}
    >
      {" "}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h6" >
          {" "}
          447 <span style={{
            fontSize:"14px",
            fontWeight: "400"

          }}>results</span>{" "}
        </Typography>

        <Stack direction="row" spacing={1} alignItems="center">
          <Typography>Sort By:</Typography>
          <FormControl
            size="small"
            sx={{
              flex: 1,
            }}
          >
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value="highest-price"
              
            >
              <MenuItem value={"highest-price"}>Highest Price</MenuItem>
              <MenuItem value={"lowest-price"}>Lowest Price</MenuItem>
              <MenuItem value={"newest-price"}>Newest Price</MenuItem>
              <MenuItem value={"oldest-price"}>Oldest Price</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Sort;
