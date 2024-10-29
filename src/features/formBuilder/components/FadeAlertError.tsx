import { Alert } from "@mui/material";

const FadeAlertError = ({ message }: { message: string | undefined }) => {
  return (
    <>
      {message && (
        <Alert severity="error" className="form-error-alert animation-fade-in">
          {message}
        </Alert>
      )}
    </>
  );
};

export default FadeAlertError;
