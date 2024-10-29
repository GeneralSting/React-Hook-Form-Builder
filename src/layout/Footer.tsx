import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <Typography
      align="center"
      p={0.4}
      variant="h5"
      id="footer-text"
      sx={{ color: "#fff" }}
    >
      <a
        href={"https://github.com/GeneralSting/Rooted"}
        target="_blank"
        rel="noopener noreferrer"
        className="footer-link"
      >
        {t("footer.message")}
      </a>{" "}
    </Typography>
  );
};

export default Footer;
