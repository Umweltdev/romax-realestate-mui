import { Box, Stack, Typography } from "@mui/material";
import HotelOutlinedIcon from "@mui/icons-material/HotelOutlined";

const SavedCard = ({ title, location, price, img, bed }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        backgroundColor: "#fff",
        boxShadow: "0px 2px 6px rgba(161, 161, 172, 0.5)",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      {/* Image */}
      <Box sx={{ height: "200px", width: "100%" }}>
        <img
          src={img?.[0] || ""}
          alt={title}
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
        />
      </Box>

      {/* Price */}
      <Box bgcolor="#f4f4f5" p={2}>
        <Typography color="primary.main" variant="h6" fontSize="22px">
          ₦ {price?.toLocaleString()}
        </Typography>
      </Box>

      {/* Info */}
      <Box bgcolor="white" px={2} py={3}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="body2">
            {title.length > 20 ? `${title.substring(0, 20)}...` : title}
          </Typography>
          <Stack direction="row" spacing={1} alignItems="center">
            <HotelOutlinedIcon fontSize="small" />
            <Typography variant="body2">
              <span style={{ fontSize: "12px" }}>X</span>{bed}
            </Typography>
          </Stack>
        </Stack>

        <Typography mt={1} color="#7D879C" variant="subtitle2">
          {location}
        </Typography>
      </Box>
    </Box>
  );
};

export default SavedCard;
