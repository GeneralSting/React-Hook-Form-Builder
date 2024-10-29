import { Grid } from "@mui/material";
import { WoodLands } from "../features/home/components";

const Home = () => {
  return (
    <>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item sm={10} xs={12}>
          <WoodLands />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
