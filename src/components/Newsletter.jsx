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
        height: "auto",
        backgroundColor: "#f9f9f9",
        py: 6,
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
          fontSize: { xs: "28px", md: "36px" },
          letterSpacing: "2px",
          textTransform: "uppercase",
          fontWeight: 600,
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
        mb={4}
        sx={{ fontSize: { xs: "13px", md: "14px" }, maxWidth: "90%" }}
      >
        Get updates on our latest properties.
      </Typography>

      <Box sx={{ width: isNonMobile ? "60%" : "95%" }}>
        <TextField
          fullWidth
          placeholder="Enter your email address"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" sx={{ mr: "-14px" }}>
                <Button
                  variant="contained"
                  sx={{
                    minWidth: "44px",
                    height: "40px",
                    borderRadius: "20px",
                    px: 2,
                    bgcolor: "primary.main",
                    "&:hover": {
                      bgcolor: "primary.dark",
                    },
                  }}
                >
                  <Send fontSize="small" sx={{ color: "#fff" }} />
                </Button>
              </InputAdornment>
            ),
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "24px",
              pr: 0,
              height: "48px",
              fontSize: "14px",
              "& input": {
                padding: "10px 14px",
              },
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default Newsletter;
