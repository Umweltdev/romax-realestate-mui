import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Select,
  MenuItem,
  Button,
  Typography,
  Container,
  Box,
} from "@material-ui/core";
import { AiOutlineSearch } from "react-icons/ai";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.default,
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  options: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(2),
  },
  select: {
    marginRight: theme.spacing(2),
    minWidth: 150,
  },
  searchBtn: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    borderRadius: "50%",
    width: 40,
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  titles: {
    marginTop: theme.spacing(4),
    textAlign: "center",
  },
  properties: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  noProperty: {
    textAlign: "center",
    marginTop: theme.spacing(4),
  },
  searchIcon: {
    fontSize: 20,
  },
}));

const Filtered = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    type: "",
    priceRange: "",
    continent: "",
  });

  const [filteredProperties, setFilteredProperties] = useState([]);

  const handleState = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const handleSearch = () => {
    // Implement your property filtering logic here and set the filteredProperties state accordingly.
  };

  return (
    <div className={classes.container}>
      <Container>
        <Box className={classes.wrapper}>
          <Box className={classes.options}>
            <Select
              className={classes.select}
              value={state.type}
              name="type"
              onChange={handleState}
              variant="outlined"
              displayEmpty
            >
              <MenuItem disabled>Select type</MenuItem>
              <MenuItem value="beach">Beach</MenuItem>
              <MenuItem value="mountain">Mountain</MenuItem>
              <MenuItem value="village">Village</MenuItem>
              <MenuItem value="island">Island</MenuItem>
            </Select>
            <Select
              className={classes.select}
              value={state.priceRange}
              name="priceRange"
              onChange={handleState}
              variant="outlined"
              displayEmpty
            >
              <MenuItem disabled>Select Price Range</MenuItem>
              <MenuItem value="0">0 - 25,000,000</MenuItem>
              <MenuItem value="1">25,000,000 - 50,000,000</MenuItem>
              <MenuItem value="2">50,000,000 - 75,000,000</MenuItem>
              <MenuItem value="3">75,000,000 - 100,000,000</MenuItem>
              <MenuItem value="4">100,000,000 and up</MenuItem>
            </Select>
            <Select
              className={classes.select}
              value={state.continent}
              name="continent"
              onChange={handleState}
              variant="outlined"
              displayEmpty
            >
              <MenuItem disabled>Select Continent</MenuItem>
              <MenuItem value="0">Africa</MenuItem>
              <MenuItem value="1">Asia</MenuItem>
              <MenuItem value="2">Europe</MenuItem>
              <MenuItem value="3">North America</MenuItem>
              <MenuItem value="4">South America</MenuItem>
              <MenuItem value="5">Australia</MenuItem>
              <MenuItem value="6">Antarctica</MenuItem>
            </Select>
            <Button className={classes.searchBtn} onClick={handleSearch}>
              <AiOutlineSearch className={classes.searchIcon} />
            </Button>
          </Box>
          {filteredProperties.length > 0 ? (
            <>
              <Box className={classes.titles}>
                <Typography variant="h5">Selected properties</Typography>
                <Typography variant="h4">Property you may like</Typography>
              </Box>
              <Box className={classes.properties}>
                {/* Render filtered properties */}
              </Box>
            </>
          ) : (
            <Typography variant="h4" className={classes.noProperty}>
              We have no properties with the specified options.
            </Typography>
          )}
        </Box>
      </Container>
    </div>
  );
};

export default Filtered;
