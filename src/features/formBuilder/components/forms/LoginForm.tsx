import { Box, Button, Grid } from "@mui/material";
import { SubmitHandler } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { FormFields } from "../../types/formFields";
import PasswordInput from "../inputs/PasswordInput";
import EmailInput from "../inputs/EmailInput";
import useDefinedForm from "../../utils/useDefinedForm";
import FadeAlertError from "../FadeAlertError";

const LoginForm = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useDefinedForm();

  const onSubmit: SubmitHandler<FormFields> = async (loginFormData) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(loginFormData);
      throw new Error();
    } catch (error) {
      setError("root", {
        message: t("main.form.responseError"),
      });
    }
  };
  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        gap={2}
        mb={1}
      >
        <Grid item xs={12} sx={{ minWidth: "100%" }}>
          <EmailInput
            formRegister={register("email")}
            error={errors.email}
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sx={{ minWidth: "100%" }}>
          <PasswordInput
            formRegister={register("password")}
            error={errors.password}
          />
        </Grid>
        <Grid item xs={12} sx={{ minWidth: "100%" }}>
          {errors.root && <FadeAlertError message={errors.root.message} />}
          <Button
            disabled={isSubmitting}
            type="submit"
            className="elipse-btn primary-bg"
            variant="contained"
          >
            {isSubmitting
              ? t("main.standard.loading")
              : t("main.login.confirmBtn")}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginForm;
