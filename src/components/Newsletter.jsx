import {
  Box,
  TextField,
  InputAdornment,
  Button,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Send } from "@mui/icons-material";

const Newsletter = () => {
  const isNonMobile = useMediaQuery("(min-width:815px)");

  return (
    <Box
      sx={{
        height: "300px",
        backgroundColor: "#f9f9f9",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        px: 2,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontSize: { xs: "30px", md: "40px" },
          letterSpacing: "2px",
          textTransform: "uppercase",
        }}
      >
        Newsletter
      </Typography>

      <Typography
        variant="body2"
        color="#7d879c"
        textTransform="uppercase"
        textAlign="center"
        letterSpacing="1px"
        mt={1}
        mb={3}
        sx={{ fontSize: { xs: "13px", md: "14px" }, maxWidth: "90%" }}
      >
        Get updates on our latest properties.
      </Typography>

      <TextField
        placeholder="Enter Your Email Address"
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button
                sx={{
                  textTransform: "none",
                  bgcolor: "primary.main",
                  color: "white",
                  px: isNonMobile ? 4 : 2,
                  py: "8px",
                  fontSize: "16px",
                  fontWeight: 600,
                  letterSpacing: "1px",
                  borderTopRightRadius: "1200px",
                  borderBottomRightRadius: "1200px",
                  height: "100%",
                  "&:hover": {
                    bgcolor: "primary.dark",
                  },
                }}
              >
                <Send fontSize="small" />
              </Button>
            </InputAdornment>
          ),
        }}
        sx={{
          width: isNonMobile ? "60%" : "95%",
          "& .MuiOutlinedInput-root": {
            borderRadius: "1200px",
            pl: 2,
            pr: 0,
            height: "48px",
            "& input": {
              fontSize: "14px",
              padding: "10px 0",
            },
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "primary.main",
          },
        }}
      />
    </Box>
  );
};

export default Newsletter;
