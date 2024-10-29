import { Grid } from "@mui/material";
import LoginTreeSvg from "./svg/LoginTreeSvg";
import LoginTreeMotionSvg from "./svg/LoginTreeMotionSvg";

const LoginForestPresentation = () => {
  return (
    <Grid container direction="column" spacing={2}>
      {/* First Row */}
      <Grid item container>
        <Grid item xs={3}>
          <LoginTreeSvg percentageSize={25} />
        </Grid>
        <Grid item xs={3}>
          <LoginTreeSvg percentageSize={25} />
        </Grid>
        <Grid item xs={3}>
          <LoginTreeSvg percentageSize={25} />
        </Grid>
        <Grid item xs={3}>
          <LoginTreeSvg percentageSize={25} />
        </Grid>
      </Grid>
      {/* Second row  */}
      <Grid item container>
        <Grid item xs={4}>
          <LoginTreeSvg percentageSize={35} />
        </Grid>
        <Grid item xs={4}>
          <LoginTreeSvg percentageSize={35} />
        </Grid>
        <Grid item xs={4}>
          <LoginTreeSvg percentageSize={35} />
        </Grid>
      </Grid>
      {/* Third Row */}
      <Grid item container justifyContent="center">
        <Grid item xs={6}>
          <LoginTreeMotionSvg />
        </Grid>
      </Grid>
      {/* Fourth Row */}
      <Grid item container>
        <Grid item xs={6}>
          <LoginTreeSvg percentageSize={45} />
        </Grid>
        <Grid item xs={6}>
          <LoginTreeSvg percentageSize={45} />
        </Grid>
      </Grid>
      {/* Fifth Row */}
      <Grid item container>
        <Grid item xs={4}>
          <LoginTreeSvg percentageSize={35} />
        </Grid>
        <Grid item xs={4}>
          <LoginTreeSvg percentageSize={35} />
        </Grid>
        <Grid item xs={4}>
          <LoginTreeSvg percentageSize={35} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LoginForestPresentation;
