import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Container, Grid, Paper, List, ListItem, ListItemIcon, ListItemText, Divider } from "@material-ui/core";
import { LocalParkingOutlined, LocalDrinkOutlined, WbIncandescentOutlined } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  facilitiesContainer: {
    background: theme.palette.grey[200],
    padding: theme.spacing(8, 0),
  },
  facilitiesTitle: {
    marginBottom: theme.spacing(4),
    textAlign: "center",
  },
  facilitiesList: {
    maxWidth: 800,
    margin: "0 auto",
  },
}));

const Facilities = () => {
  const classes = useStyles();

  return (
    <div className={classes.facilitiesContainer}>
      <Container>
        <Typography variant="h4" className={classes.facilitiesTitle}>
          Our Facilities
        </Typography>
        <Grid container spacing={4} className={classes.facilitiesList}>
          <Grid item xs={12} sm={4}>
            <Paper elevation={3}>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <LocalParkingOutlined />
                  </ListItemIcon>
                  <ListItemText primary="Ample Parking" />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemIcon>
                    <LocalDrinkOutlined />
                  </ListItemIcon>
                  <ListItemText primary="24/7 Water Supply" />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemIcon>
                    <WbIncandescentOutlined />
                  </ListItemIcon>
                  <ListItemText primary="Stable Electricity" />
                </ListItem>
              </List>
            </Paper>
          </Grid>
          {/* Add more Grid items for additional facilities */}
        </Grid>
      </Container>
    </div>
  );
};

export default Facilities;
