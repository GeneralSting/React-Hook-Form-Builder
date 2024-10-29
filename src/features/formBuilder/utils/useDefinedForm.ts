import { RegisterOptions, useForm } from "react-hook-form";
import { FormFieldTypes } from "../types/formFieldsTypes";
import setRegisterOptions from "./setRegisterOptions";
import { FormFields } from "../types/formFields";

const useDefinedForm = () => {
  const { register: originalRegister, ...rest } = useForm<FormFields>();

  const register = (name: FormFieldTypes, options?: RegisterOptions) => {
    const modifiedOptions: RegisterOptions = options || {};

    // Set options for certain input type
    setRegisterOptions(name, modifiedOptions);

    // Register the field with the modified options
    return originalRegister(name, modifiedOptions);
  };

  return {
    register,
    ...rest,
  };
};

export default useDefinedForm;
