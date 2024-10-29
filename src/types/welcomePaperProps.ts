import { ReactNode } from "react";
import { WelcomePaperStyles } from "./welcomePaperStyles";

export type WelcomePaperProps = {
  styleContent: WelcomePaperStyles
  iconContent: ReactNode;
  formContent: ReactNode;
};
