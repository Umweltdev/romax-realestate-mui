import {
  Box,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { Send } from "@mui/icons-material";
import { useState } from "react";

const Newsletter = () => {
  const [hasInput, setHasInput] = useState(false);

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
        mb={4}
        maxWidth="600px"
      >
        Get updates on our latest properties.
      </Typography>

      <Box
        component="form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
        sx={{
          display: "flex",
          width: { xs: "100%", sm: "90%", md: "60%" },
          borderRadius: "1200px",
          overflow: "hidden",
          border: "1px solid #ccc",
          backgroundColor: !hasInput ? "#fff" : "transparent",
        }}
      >
        <TextField
          fullWidth
          placeholder="Enter your email address"
          variant="outlined"
          onChange={(e) => setHasInput(e.target.value.length > 0)}
          sx={{
            "& fieldset": { border: "none" },
            "& .MuiOutlinedInput-root": {
              borderRadius: 0,
              px: 2,
              py: 0.5,
              height: "100%",
              backgroundColor: "transparent",
              "& input": {
                paddingY: 1.8,
                fontSize: { xs: "14px", sm: "16px" },
              },
              "&.Mui-focused": {
                backgroundColor: "transparent",
              },
            },
          }}
        />
        <Button
          type="submit"
          sx={{
            bgcolor: "primary.main",
            color: "#fff",
            px: { xs: 3, sm: 4 },
            fontSize: { xs: "14px", sm: "16px" },
            fontWeight: 600,
            borderRadius: 0,
            whiteSpace: "nowrap",
            "&:hover": {
              backgroundColor: "primary.dark",
            },
          }}
        >
          <Send sx={{ mr: 0 }} />
        </Button>
      </Box>
    </Box>
  );
};

export default Newsletter;
