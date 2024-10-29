import { FormControl, InputAdornment, TextField } from "@mui/material";
import { FC } from "react";
import { MonoFieldProps } from "../../types/monoFieldProps";
import MailIcon from "@mui/icons-material/Mail";
import FadeAlertError from "../FadeAlertError";
import { useTranslation } from "react-i18next";

const EmailInput: FC<MonoFieldProps> = ({ formRegister, error, autoFocus }) => {
  const { t } = useTranslation();
  return (
    <FormControl variant="outlined" sx={{ width: "100%" }}>
      {error && <FadeAlertError message={error.message} />}
      <TextField
        variant="outlined"
        label={t("main.form.emailLabel")}
        aria-label={t("main.form.emailAriaLabel")}
        placeholder={t("main.form.emailPlaceholder")}
        {...(autoFocus ? { autoFocus: autoFocus } : {})}
        {...formRegister}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <MailIcon />
            </InputAdornment>
          ),
        }}
      />
    </FormControl>
  );
};

export default EmailInput;
