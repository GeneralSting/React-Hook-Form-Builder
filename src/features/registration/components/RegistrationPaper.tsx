import { WelcomePaper } from "../../../components";
import RegistrationContent from "./RegistrationContent";
import RegistrationPresentation from "./RegistrationPresentation";

const RegistrationPaper = () => {
  return (
    <WelcomePaper
      styleContent="registration"
      iconContent={<RegistrationPresentation />}
      formContent={<RegistrationContent />}
    />
  );
};

export default RegistrationPaper;
