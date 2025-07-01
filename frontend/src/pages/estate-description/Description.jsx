import { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
  Link as MuiLink,
} from "@mui/material";

const Description = ({ desc, features }) => {
  const [showFullDesc, setShowFullDesc] = useState(false);
  const isLong = desc?.length > 200;

  const displayedDesc =
    showFullDesc || !isLong ? desc : `${desc.slice(0, 300)}...`;

  return (
    <Stack spacing={4} mt={4}>
      {/* Description */}
      <Stack spacing={1}>
        <Typography variant="h5" fontWeight={600} gutterBottom>
          Description
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ lineHeight: 1.7 }}
        >
          {displayedDesc}
        </Typography>
        {isLong && (
          <MuiLink
            component="button"
            onClick={() => setShowFullDesc(!showFullDesc)}
            sx={{
              fontWeight: 600,
              alignSelf: "flex-start",
              mt: 0.5,
            }}
          >
            {showFullDesc ? "Show Less" : "Read More"}
          </MuiLink>
        )}
      </Stack>

      {/* Listing Features */}
      <Stack spacing={1}>
        <Typography variant="h5" fontWeight={700} gutterBottom>
          Listing
        </Typography>
        <List
          dense
          sx={{
            listStyleType: "disc",
            pl: 2,
            "& .MuiListItem-root": {
              display: "list-item",
              paddingLeft: 0,
            },
            "& .MuiListItemText-root .MuiTypography-root": {
              fontSize: "0.9rem",
              color: "text.secondary",
            },
          }}
        >
          {features?.map((f, index) => (
            <ListItem key={index} disableGutters disablePadding>
              <ListItemText primary={f} />
            </ListItem>
          ))}
        </List>
      </Stack>
    </Stack>
  );
};

export default Description;
