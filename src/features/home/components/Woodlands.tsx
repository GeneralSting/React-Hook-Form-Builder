import { Grid } from "@mui/material";
import SvgRectangle from "./SvgRectangle";

const WoodLands = () => {
  return (
    <Grid container spacing={2} alignItems="center" justifyContent="center">
      <Grid item xs={4}>
        <SvgRectangle />
      </Grid>
      <Grid item xs={8}>
        <SvgRectangle />
      </Grid>
      <Grid item xs={4}>
        <SvgRectangle />
      </Grid>
    </Grid>
  );
};

export default WoodLands;
