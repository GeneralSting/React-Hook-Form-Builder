import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { WelcomePaperProps } from "../types";
import { useTranslation } from "react-i18next";

const WelcomePaper: React.FC<WelcomePaperProps> = ({
  styleContent,
  iconContent,
  formContent,
}) => {
  const { t } = useTranslation();
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xl={6} lg={8} md={10}>
        <Paper className={`${styleContent}-mui-paper`}>
          <Grid container direction="row" justifyContent="space-between">
            <Grid
              item
              xs={5}
              display={{ md: "block", xs: "none" }}
              alignContent="center"
              className={`${styleContent}-paper-icon`}
            >
              {iconContent}
            </Grid>
            <Grid item md={7} xs={12}>
              <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Grid item xs={12}>
                  <Typography variant="h2" id={`${styleContent}-rooted-title`}>
                    {t("app.name")}
                  </Typography>
                </Grid>
                <Grid item xs={12} pl={2} pr={2}>
                  <Typography variant="h4" textAlign="center">
                    {t("app.motto")}
                  </Typography>
                </Grid>
              </Grid>
              {formContent}
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default WelcomePaper;
