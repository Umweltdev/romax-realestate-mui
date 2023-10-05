import { categories } from "../data";
import CategoryItem from "./CategoryItem";
import { Grid } from "@mui/material";



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
