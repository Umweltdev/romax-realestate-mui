import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";
import { mobile, mobileXR, tablet } from "../responsive";
import { Grid, Box } from "@mui/material";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })};
  ${mobileXR({ padding: "0px", flexDirection: "column" })};
  ${tablet({ padding: "0px", flexDirection: "column" })};
`;

const Categories = () => {
  return (
    <Grid container spacing={3} sx={{
      padding: 5
    }}>
      {categories.map((cat) => (
        <Grid item sm={4}>
          <CategoryItem {...cat} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Categories;
