import {
  Box,
  TextField,
  InputAdornment,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Send } from "@mui/icons-material";

const Newsletter = () => {
  const theme = useTheme();
  const isNonMobile = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      sx={{
        backgroundColor: "#f9f9f9",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 6 },
        textAlign: "center",
      }}
    >
      <Typography
        fontWeight={700}
        textTransform="uppercase"
        letterSpacing="2px"
        fontSize={{ xs: "26px", sm: "30px", md: "36px" }}
        mb={1}
      >
        Newsletter
      </Typography>

      <Typography
        color="#7d879c"
        textTransform="uppercase"
        letterSpacing="1px"
        fontSize={{ xs: "13px", sm: "14px", md: "16px" }}
        mb={3}
        maxWidth="600px"
      >
        Get updates on our latest properties.
      </Typography>

      <TextField
        placeholder="Enter your email address"
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button
                sx={{
                  textTransform: "none",
                  bgcolor: "primary.main",
                  color: "#fff",
                  px: { xs: 2.5, sm: 4 },
                  py: 1.2,
                  fontSize: { xs: "14px", sm: "16px" },
                  fontWeight: 600,
                  borderTopRightRadius: "1200px",
                  borderBottomRightRadius: "1200px",
                  height: "100%",
                  "&:hover": {
                    backgroundColor: "primary.dark",
                  },
                }}
              >
                <Send />
              </Button>
            </InputAdornment>
          ),
        }}
        sx={{
          width: { xs: "100%", sm: "90%", md: "60%" },
          "& .MuiOutlinedInput-root": {
            borderRadius: "1200px",
            pl: 2,
            py: 0.5,
            "& input": {
              fontSize: { xs: "14px", sm: "16px" },
            },
          },
        }}
      />
    </Box>
  );
};

export default Newsletter;
