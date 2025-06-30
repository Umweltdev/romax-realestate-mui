import { List, ListItem, ListItemText, Stack, Typography } from "@mui/material";

const Description = ({ desc, features }) => {
  return (
    <Stack spacing={4} mt={4}>
      <Stack spacing={1}>
        <Typography variant="h5" fontWeight={600} gutterBottom>
          Description
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ lineHeight: 1.7 }}
        >
          {desc}
        </Typography>
      </Stack>

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
