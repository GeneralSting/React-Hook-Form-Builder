import { useTranslation } from "react-i18next";
import useDefinedForm from "../../utils/useDefinedForm";
import { SubmitHandler } from "react-hook-form";
import { FormFields } from "../../types/formFields";
import { Box, Button, Grid } from "@mui/material";
import EmailInput from "../inputs/EmailInput";
import PasswordInput from "../inputs/PasswordInput";
import FadeAlertError from "../FadeAlertError";
import TextInput from "../inputs/TextInput";
import PersonIcon from "@mui/icons-material/Person";

const RegistrationForm = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useDefinedForm();

  const onSubmit: SubmitHandler<FormFields> = async (registrationFormData) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(registrationFormData);
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
          <TextInput
            label={t("main.form.fullNameLabel")}
            ariaLabel={t("main.form.fullNameAriaLabel")}
            placeholder={t("main.form.fullNamePlaceholder")}
            formRegister={register("userFullName")}
            error={errors.userFullName}
            autoFocus
            startIcon={<PersonIcon />}
          />
        </Grid>

        <Grid item xs={12} sx={{ minWidth: "100%" }}>
          <EmailInput formRegister={register("email")} error={errors.email} />
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
            className="elipse-btn secondary-bg"
            variant="contained"
          >
            {isSubmitting
              ? t("main.standard.loading")
              : t("main.registration.confirmBtn")}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RegistrationForm;
