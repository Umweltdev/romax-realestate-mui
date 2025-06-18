import {
  Grid,
  Paper,
  Typography,
  Stack,
  useMediaQuery,
} from "@mui/material";

import LocalParkingOutlinedIcon from "@mui/icons-material/LocalParkingOutlined";
import LocalDrinkOutlinedIcon from "@mui/icons-material/LocalDrinkOutlined";
import WbIncandescentOutlinedIcon from "@mui/icons-material/WbIncandescentOutlined";
import HotelOutlinedIcon from "@mui/icons-material/HotelOutlined";
import LocalFloristOutlinedIcon from "@mui/icons-material/LocalFloristOutlined";
import NatureOutlinedIcon from "@mui/icons-material/NatureOutlined";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import WifiOutlinedIcon from "@mui/icons-material/WifiOutlined";
import LocationCityOutlinedIcon from "@mui/icons-material/LocationCityOutlined";

const Facilities = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const data = [
    {
      Icon: LocalParkingOutlinedIcon,
      title: "Ample Parking",
      desc: "Plenty of parking space for your convenience.",
    },
    {
      Icon: LocalDrinkOutlinedIcon,
      title: "24/7 Water Supply",
      desc: "Continuous water supply available 24/7.",
    },
    {
      Icon: WbIncandescentOutlinedIcon,
      title: "Stable Electricity",
      desc: "Reliable and stable electricity supply.",
    },
    {
      Icon: HotelOutlinedIcon,
      title: "Short-term Lets",
      desc: "Perfect for short-term stays and vacations.",
    },
    {
      Icon: LocalFloristOutlinedIcon,
      title: "Gardens",
      desc: "Beautifully landscaped gardens to relax in.",
    },
    {
      Icon: NatureOutlinedIcon,
      title: "Ambiance",
      desc: "A peaceful and pleasant atmosphere.",
    },
    {
      Icon: HomeWorkOutlinedIcon,
      title: "Smart Houses",
      desc: "Modern homes with smart technology.",
    },
    {
      Icon: WifiOutlinedIcon,
      title: "Wi-fi",
      desc: "High-speed Wi-Fi for your connectivity needs.",
    },
    {
      Icon: LocationCityOutlinedIcon,
      title: "Beautiful Properties",
      desc: "Stunning properties in picturesque locations.",
    },
  ];

  return (
    <Stack width={{ xs: "95%", md: "75%", lg: "65%" }} margin="0 auto" pb={6} spacing={2}>
      <Typography variant="h5" textAlign="center" fontSize="28px">
        OUR FACILITIES
      </Typography>
      <Typography variant="h6" textAlign="center" color="text.secondary">
        WE PROVIDE FULL SERVICES EVERY STEP OF THE WAY
      </Typography>
      <Grid container spacing={3} sx={{ marginLeft: "-24px !important" }}>
        {data.map(({ Icon, title, desc }, index) => (
          <Grid item xs={12} sm={6} lg={4} key={index}>
            <Paper
              elevation={3}
              sx={{
                display: "flex",
                gap: "10px",
                border: "1px solid #dee2e6",
                borderRadius: "10px",
                flexDirection: isNonMobile ? "row" : "column",
                alignItems: isNonMobile ? "start" : "center",
                paddingX: 2.5,
                paddingY: 3.5,
                height: "140px",
                color: "primary.main",
              }}
            >
              <Icon sx={{ fontSize: "2.4rem" }} />
              <Stack spacing={0.5}>
                <Typography
                  variant="h6"
                  fontSize={{ xs: "15px", sm: "18px" }}
                  textAlign={{ xs: "center", sm: "left" }}
                >
                  {title}
                </Typography>
                <Typography
                  variant="subtitle2"
                  textAlign={{ xs: "center", sm: "left" }}
                  fontSize={{ xs: "12px", sm: "14px" }}
                  color="text.secondary"
                >
                  {desc}
                </Typography>
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default Facilities;
