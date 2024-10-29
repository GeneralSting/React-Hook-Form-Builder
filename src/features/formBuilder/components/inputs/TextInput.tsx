import { FormControl, InputAdornment, TextField } from "@mui/material";
import { FC } from "react";
import { TextFieldProps } from "../../types/textFieldProps";
import FadeAlertError from "../FadeAlertError";

const TextInput: FC<TextFieldProps> = ({
  formRegister,
  label,
  ariaLabel,
  placeholder,
  startIcon,
  autoFocus,
  value,
  error,
}) => {
  return (
    <FormControl variant="outlined" sx={{ width: "100%" }}>
      {error && <FadeAlertError message={error.message} />}
      <TextField
      type="text"
        variant="outlined"
        label={label}
        aria-label={ariaLabel}
        placeholder={placeholder}
        {...(autoFocus ? { autoFocus: autoFocus } : {})}
        {...(value ? { value: value } : {})}
        {...formRegister}
        inputProps={{ maxLength: 48 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">{startIcon}</InputAdornment>
          ),
        }}
      />
    </FormControl>
  );
};

export default TextInput;
