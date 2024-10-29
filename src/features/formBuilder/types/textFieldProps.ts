import { SvgIconComponent } from "@mui/icons-material";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export type TextFieldProps = {
  label: string;
  ariaLabel: string;
  placeholder: string;
  startIcon: React.ReactElement<SvgIconComponent>;
  autoFocus?: boolean;
  value?: string | number;
  error: FieldError | undefined;
  formRegister: UseFormRegisterReturn;
};
