import { RegisterOptions, ValidationRule } from "react-hook-form";
import { FormFieldTypes } from "../types/formFieldsTypes";
import i18next from "i18next";

const setRegisterOptions = (
  name: FormFieldTypes,
  modifiedOptions: RegisterOptions
) => {
  const { t } = i18next;

  // Set required as default for all inputs
  modifiedOptions.required = t("main.form.required");

  switch (name) {
    case "email": {
      const emailPattern: ValidationRule<RegExp> = {
        value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
        message: t("main.form.emailError"),
      };
      modifiedOptions.pattern = emailPattern;
      return modifiedOptions;
    }

    case "password": {
      const passwordMinLength: ValidationRule<number> = {
        value: 6,
        message: t("main.form.passwordError"),
      };

      const passwordMaxLength: ValidationRule<number> = {
        value: 24,
        message: t("main.form.passwordErrorMax"),
      };

      modifiedOptions.minLength = passwordMinLength;
      modifiedOptions.maxLength = passwordMaxLength;

      return modifiedOptions;
    }

    case "userFullName": {
      const textMaxLength: ValidationRule<number> = {
        value: 48,
        message: "max",
      };

      modifiedOptions.maxLength = textMaxLength;
      return modifiedOptions;
    }
  }
};

export default setRegisterOptions;
