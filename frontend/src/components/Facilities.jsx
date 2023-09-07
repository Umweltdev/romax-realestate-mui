import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Container, Grid, Paper, List, ListItem, ListItemIcon, ListItemText, Divider } from "@material-ui/core";
import { LocalParkingOutlined, LocalDrinkOutlined, WbIncandescentOutlined, HotelOutlined, LocalFloristOutlined, NatureOutlined, HomeWorkOutlined, WifiOutlined, LocationCityOutlined } from "@material-ui/icons";

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
          OUR FACILITIES
        </Typography>
        <Typography variant="h5" className={classes.facilitiesTitle}>
          WE PROVIDE FULL SERVICES EVERY STEP OF THE WAY
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
          <Grid item xs={12} sm={4}>
            <Paper elevation={3}>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <HotelOutlined />
                  </ListItemIcon>
                  <ListItemText primary="Short-term Lets" />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemIcon>
                    <LocalFloristOutlined />
                  </ListItemIcon>
                  <ListItemText primary="Gardens" />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemIcon>
                    <NatureOutlined />
                  </ListItemIcon>
                  <ListItemText primary="Ambiance" />
                </ListItem>
              </List>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper elevation={3}>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <HomeWorkOutlined />
                  </ListItemIcon>
                  <ListItemText primary="Smart Houses" />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemIcon>
                    <WifiOutlined />
                  </ListItemIcon>
                  <ListItemText primary="Wi-fi" />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemIcon>
                    <LocationCityOutlined />
                  </ListItemIcon>
                  <ListItemText primary="Beautiful Properties" />
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Facilities;
