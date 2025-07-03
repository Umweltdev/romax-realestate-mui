import React from "react";
import {
  Box,
  Paper,
  Typography,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  LocalParkingOutlined,
  LocalDrinkOutlined,
  WbIncandescentOutlined,
  HotelOutlined,
  LocalFloristOutlined,
  NatureOutlined,
  HomeWorkOutlined,
  WifiOutlined,
  LocationCityOutlined,
} from "@mui/icons-material";

const Facilities = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const data = [
    { Icon: LocalParkingOutlined, title: "Ample Parking", desc: "Plenty of parking space for your convenience." },
    { Icon: LocalDrinkOutlined, title: "24/7 Water Supply", desc: "Continuous water supply available 24/7." },
    { Icon: WbIncandescentOutlined, title: "Stable Electricity", desc: "Reliable and stable electricity supply." },
    { Icon: HotelOutlined, title: "Short-term Lets", desc: "Perfect for short-term stays and vacations." },
    { Icon: LocalFloristOutlined, title: "Gardens", desc: "Beautifully landscaped gardens to relax in." },
    { Icon: NatureOutlined, title: "Ambiance", desc: "A peaceful and pleasant atmosphere." },
    { Icon: HomeWorkOutlined, title: "Smart Houses", desc: "Modern homes with smart technology." },
    { Icon: WifiOutlined, title: "Wi-Fi", desc: "High-speed Wi-Fi for your connectivity needs." },
    { Icon: LocationCityOutlined, title: "Beautiful Properties", desc: "Stunning properties in picturesque locations." },
  ];

  return (
    <Box
      width="100%"
      px={{ xs: 2, sm: 4 }}
      py={2}
      mb={12}
      sx={{
        backgroundColor: "#FFF",
        overflow: "hidden",
       }}
    >
      <Stack spacing={4} maxWidth="1440px" mx="auto">
        <Typography
          variant="h4"
          textAlign="center"
          fontWeight={600}
          fontSize={{ xs: "24px", sm: "30px", md: "34px" }}
        >
          OUR FACILITIES
        </Typography>

        <Typography
          variant="subtitle1"
          textAlign="center"
          color="text.secondary"
          fontSize={{ xs: "14px", sm: "16px" }}
        >
          WE PROVIDE FULL SERVICES EVERY STEP OF THE WAY
        </Typography>

        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          rowGap={4}
          columnGap={4}
        >
          {data.map(({ Icon, title, desc }, idx) => (
            <Paper
              key={idx}
              elevation={3}
              sx={{
                flexBasis: isDesktop ? "30%" : isTablet ? "45%" : "100%",
                maxWidth: "100%",
                minWidth: "260px",
                height: 240,
                borderRadius: 2,
                border: "1px solid #dee2e6",
                padding: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                mx: "auto",
              }}
            >
              <Icon sx={{ fontSize: "2.8rem", color: "primary.main", mb: 1 }} />
              <Typography
                variant="h6"
                fontWeight={600}
                fontSize={{ xs: "16px", sm: "18px" }}
              >
                {title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                fontSize={{ xs: "13px", sm: "14px" }}
                mt={1}
              >
                {desc}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Stack>
    </Box>
  );
};

export default Facilities;
