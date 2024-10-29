import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export type MonoFieldProps = {
  formRegister: UseFormRegisterReturn;
  error: FieldError | undefined
  autoFocus?: boolean;
};
