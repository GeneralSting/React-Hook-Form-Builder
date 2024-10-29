import { Button, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { REGISTRATION_PATH } from "../../../data/routes";
import { LoginForm } from "../../formBuilder/components";

const LoginContent = () => {
  const { t } = useTranslation();

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={8}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          mt={4}
          mb={4}
        >
          <Grid item xs={12} mb={2}>
            <Typography variant="h5">{t("main.login.title")}</Typography>
          </Grid>
          <LoginForm />
          <Grid item xs={12}>
            <Button variant="text" className="secondary-link-btn" size="small">
              {t("main.login.forgotPass")}
            </Button>
          </Grid>
          <Grid item xs={12} mt={8}>
            <Link to={REGISTRATION_PATH}>
              <Button variant="outlined" className="secondary-link-btn">
                {t("main.login.registrationLink")}
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LoginContent;
