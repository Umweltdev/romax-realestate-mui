import styled from "styled-components";
import {
  Box,
  TextField,
  InputAdornment,
  Button,
  Typography,
} from "@mui/material";

const Newsletter = () => {
  return (
    <Box
      sx={{
        height: "50vh",
        backgroundColor: "rgb(252, 245, 245)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h5"
        fontSize="40px"
        letterSpacing="2px"
        textTransform="uppercase"
      >
        Newsletter
      </Typography>
      <Typography
        variant="body2"
        color="#7d879c"
        textTransform="uppercase"
        letterSpacing="2px"
        mt={1}
        mb={3}
      >
        Get updates on our latest properties.{" "}
      </Typography>

      <TextField
        placeholder="Enter Your Email Address"
        variant="outlined"
        // fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button
                sx={{
                  textTransform: "none",
                  bgcolor: "teal",
                  color: "white",
                  paddingX: "40px",
                  fontSize: "16px",
                  fontWeight: "600",
                  letterSpacing: "1px",
                  paddingY: "8px",
                  borderLeft: "1px solid #7D879C",
                  justifyContent: "space-between",
                  borderTopRightRadius: "1200px",
                  borderBottomRightRadius: "1200px",
                  height: "100%",
                  "&:hover": {
                    backgroundColor: "#119595",
                  },
                }}
              >
                SEND
              </Button>
            </InputAdornment>
          ),
        }}
        sx={{
          width: "60%",
          paddingRight: 0,
          "& .MuiOutlinedInput-root": {
            borderRadius: "1200px",
            padding: "0px 0px 0px 20px !important",
            "& .MuiAutocomplete-input": {
              padding: "1px !important",
              fontSize: "14px",
            },
            "& .MuiInputAdornment-positionEnd": {
              height: "100%",
              maxHeight: "100%",
            },
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "teal",
          },
        }}
      />
    </Box>
  );
};

export default Newsletter;
