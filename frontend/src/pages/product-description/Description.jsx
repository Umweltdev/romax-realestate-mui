import { List, ListItem, ListItemText, Stack, Typography } from "@mui/material";

const Description = ({ desc, features }) => {
  return (
    <Stack spacing={4}>
      {/* Description Section */}
      <Stack spacing={1.2}>
        <Typography variant="h6" fontWeight={700}>
          Description
        </Typography>
        <Typography variant="body2" color="text.secondary" lineHeight={1.8}>
          {desc}
        </Typography>
      </Stack>

      {/* Features Section */}
      <Stack spacing={1.2}>
        <Typography variant="h6" fontWeight={700}>
          Features
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
