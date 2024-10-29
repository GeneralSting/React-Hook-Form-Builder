import { WelcomePaper } from "../../../components";
import LoginContent from "./LoginContent";
import LoginForestPresentation from "./LoginForestPresentation";

const LoginPaper = () => {
  return (
    <WelcomePaper
      styleContent="login"
      iconContent={<LoginForestPresentation />}
      formContent={<LoginContent />}
    />
  );
};

export default LoginPaper;
