import { Box, Typography, Stack, Grid, IconButton } from "@mui/material";
import HomeOutlined from "@mui/icons-material/HomeOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import Carousel from "./ProdListCarousel";
import { dateConverter } from "../user-dashboard/utils";
import { Link, useNavigate } from "react-router-dom";

const Card = ({ _id, title, desc, location, house, img, createdAt }) => {
  const navigate = useNavigate();

  return (
    <Box
      bgcolor="white"
      borderRadius={3}
      boxShadow="0px 3px 8px rgba(0, 0, 0, 0.1)"
      overflow="hidden"
    >
      <Grid container>
        {/* Image */}
        <Grid item xs={12} sm={6.5}>
          <Link to={`/estate/${_id}`} style={{ textDecoration: "none" }}>
            <Carousel images={img} />
          </Link>
        </Grid>

        {/* Content */}
        <Grid item xs={12} sm={5.5}>
          <Stack
            px={{ xs: 3, sm: 4 }}
            py={{ xs: 3, sm: 4 }}
            height="100%"
            justifyContent="space-between"
          >
            <Link
              to={`/estate/${_id}`}
              style={{ textDecoration: "none", color: "#2b3445" }}
            >
              {/* Title */}
              <Typography
                variant="h5"
                component="h2"
                fontWeight={700}
                gutterBottom
                sx={{ mb: 1 }}
              >
                {title}
              </Typography>

              {/* Location and House */}
              <Stack
                direction="row"
                spacing={4}
                alignItems="center"
                sx={{ mb: 2 }}
              >
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  sx={{ fontWeight: 600 }}
                >
                  {location}
                </Typography>
                <Stack direction="row" spacing={1} alignItems="center">
                  <HomeOutlined
                    fontSize="small"
                    sx={{ color: "text.secondary" }}
                  />
                  <Typography variant="subtitle2" color="text.secondary">
                    <span style={{ fontSize: "12px" }}>X</span> {house}
                  </Typography>
                </Stack>
              </Stack>

              {/* Description */}
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mb: 3, lineHeight: 1.7 }}
              >
                {desc?.length > 180 ? `${desc.substring(0, 180)}...` : desc}
              </Typography>

              {/* Date */}
              <Typography
                variant="caption"
                color="primary.main"
                sx={{ fontWeight: 600 }}
              >
                Added on {dateConverter(createdAt)}
              </Typography>
            </Link>

            {/* Contact Info */}
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              mt={4}
              pt={2}
              borderTop="1px solid #eb8510"
            >
              <Stack direction="row" spacing={1.5} alignItems="center">
                <a
                  href="tel:01612320345"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <PhoneOutlinedIcon
                    sx={{
                      color: "text.secondary",
                      fontSize: 22,
                      mr: 0.5,
                      cursor: "pointer",
                    }}
                  />
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ fontWeight: 600, cursor: "pointer" }}
                  >
                    0161 232 0345
                  </Typography>
                </a>
              </Stack>

              <IconButton
                onClick={() => navigate(`/bookings/${_id}`)}
                size="medium"
              >
                <EmailOutlinedIcon
                  sx={{ fontSize: 26, color: "text.secondary" }}
                />
              </IconButton>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Card;
