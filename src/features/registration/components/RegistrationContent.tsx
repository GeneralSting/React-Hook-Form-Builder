import { Button, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { LOGIN_PATH } from "../../../data/routes";
import { Link } from "react-router-dom";
import { RegistrationForm } from "../../formBuilder/components";

const RegistrationContent = () => {
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
            <Typography variant="h5">{t("main.registration.title")}</Typography>
          </Grid>
          <RegistrationForm />
          <Grid item xs={12} mt={8}>
            <Link to={LOGIN_PATH}>
              <Button variant="outlined" className="primary-link-btn">
                {t("main.registration.loginLink")}
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RegistrationContent;
