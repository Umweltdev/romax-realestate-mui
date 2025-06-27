import {
  Box,
  Typography,
  Stack,
  Grid,
  IconButton,
} from "@mui/material";
import HomeOutlined from "@mui/icons-material/HomeOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Carousel from "./ProdListCarousel";
import { dateConverter } from "../user-dashboard/utils";
import { Link, useNavigate } from "react-router-dom";

const Card = ({ _id, title, desc, location, house, img, createdAt }) => {
  const navigate = useNavigate();

  return (
    <Box
      bgcolor="white"
      borderRadius="10px"
      boxShadow="0px 1px 3px rgba(3, 0, 71, 0.09)"
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6.5} sx={{ p: 0 }}>
          <Link to={`/estate/${_id}`} style={{ textDecoration: "none", color: "#2b3445" }}>
            <Box height="100%">
              <Box height="75%">
                <Carousel images={img} />
              </Box>
            </Box>
          </Link>
        </Grid>

        <Grid item xs={12} sm={5.5} sx={{ p: 0 }}>
          <Stack px={2} py={2.5} height="100%" justifyContent="space-between">
            <Link to={`/estate/${_id}`} style={{ textDecoration: "none", color: "#2b3445" }}>
              <Typography variant="body2" fontWeight={600}>{title}</Typography>

              <Stack direction="row" spacing={3} mt={1}>
                <Typography variant="body1" color="text.secondary">
                  {location}
                </Typography>

                <Stack direction="row" spacing={1} alignItems="center">
                  <HomeOutlined fontSize="small" />
                  <Typography variant="body2">
                    <span style={{ fontSize: "12px" }}>X</span>{house}
                  </Typography>
                </Stack>
              </Stack>

              <Typography variant="subtitle2" color="#7D879C" mt={1.5}>
                {`${desc?.substring(0, 200)}...`}
              </Typography>

              <Typography variant="subtitle1" color="primary.main" mt={3}>
                {`Added on ${dateConverter(createdAt)}`}
              </Typography>
            </Link>

            <Stack direction="row" justifyContent="space-between" mt={3}>
              <Stack spacing={2} direction="row" alignItems="center">
                <Stack color="#7D879C">
                  <Typography variant="subtitle1">0161 232 0345</Typography>
                  <Typography variant="subtitle2">Hotline</Typography>
                </Stack>
                <IconButton onClick={() => navigate(`/bookings/${_id}`)}>
                  <EmailOutlinedIcon sx={{ fontSize: "25px" }} />
                </IconButton>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Card;
