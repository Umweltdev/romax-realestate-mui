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
    showFullDesc || !isLong ? desc : `${desc.slice(0, 200)}...`;

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
            sx={{ fontWeight: 600 }}
          >
            {showFullDesc ? "Show Less" : "Read More"}
          </MuiLink>
        )}
      </Stack>

      {/* Listing Features */}
      <Stack spacing={1}>
        <Typography variant="h5" fontWeight={600} gutterBottom>
          Listing
        </Typography>
        <Stack spacing={1.5} pl={1}>
          {features?.map((f, index) => (
            <Typography
              key={index}
              variant="body2"
              color="text.secondary"
              sx={{ display: "block" }}
            >
              • {f}
            </Typography>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Description;
