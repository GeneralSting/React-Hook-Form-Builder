import { Grid } from "@mui/material";
import GrowingTreeSvg from "./svg/GrowingTreeSvg";

const RegistrationPresentation = () => {
  return (
    <Grid container>
      {/* First Row */}
      <Grid item container>
        <Grid item xs={3}>
          <GrowingTreeSvg stage={1} />
        </Grid>
        <Grid item xs={3}>
          <GrowingTreeSvg stage={2} />
        </Grid>
        <Grid item xs={3}>
          <GrowingTreeSvg stage={3} />
        </Grid>
        <Grid item xs={3}>
          <GrowingTreeSvg stage={4} />
        </Grid>
      </Grid>
      {/* Second row  */}
      <Grid item container>
        <Grid item xs={4}>
          <GrowingTreeSvg stage={5} />
        </Grid>
        <Grid item xs={4}>
          <GrowingTreeSvg stage={5} />
        </Grid>
        <Grid item xs={4}>
          <GrowingTreeSvg stage={5} />
        </Grid>
      </Grid>
      {/* Third Row */}
      <Grid item container justifyContent="center">
        <Grid item xs={6}>
          <GrowingTreeSvg stage={6} />
        </Grid>
      </Grid>
      {/* Fourth Row */}
      <Grid item container>
        <Grid item xs={6}>
          <GrowingTreeSvg stage={7} />
        </Grid>
        <Grid item xs={6}>
          <GrowingTreeSvg stage={7} />
        </Grid>
      </Grid>
      {/* Fifth Row */}
      <Grid item container>
        <Grid item xs={4}>
          <GrowingTreeSvg stage={7} />
        </Grid>
        <Grid item xs={4}>
          <GrowingTreeSvg stage={7} />
        </Grid>
        <Grid item xs={4}>
          <GrowingTreeSvg stage={7} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RegistrationPresentation;
