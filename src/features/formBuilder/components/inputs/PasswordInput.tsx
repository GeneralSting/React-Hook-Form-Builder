import {
  FormControl,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import React, { FC, useState } from "react";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useTranslation } from "react-i18next";
import { MonoFieldProps } from "../../types/monoFieldProps";
import FadeAlertError from "../FadeAlertError";

const PasswordInput: FC<MonoFieldProps> = ({ formRegister, error }) => {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handlePreventDefault = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <>
      {error && <FadeAlertError message={error.message} />}
      <FormControl variant="outlined" sx={{ width: "100%" }}>
        <TextField
          {...formRegister}
          label={t("main.form.passwordLabel")}
          aria-label={t("main.form.passwordAriaLabel")}
          placeholder={t("main.form.passwordPlaceholder")}
          type={showPassword ? "text" : "password"}
          inputProps={{ maxLength: 24 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label={t("main.form.passwordIconAria")}
                  onClick={handleShowPassword}
                  onMouseDown={handlePreventDefault}
                  onMouseUp={handlePreventDefault}
                  edge="end"
                >
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </FormControl>
    </>
  );
};

export default PasswordInput;
