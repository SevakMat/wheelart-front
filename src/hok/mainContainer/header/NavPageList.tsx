import { Link, styled, Box } from "@mui/material";
import { useTranslation } from "react-i18next";

import "../../../fonts/monsterrat.css";

const CustomLink = styled(Link)(() => ({
  color: "#fff",
  fontSize: 16,
  textDecoration: "none",
  height: "100%",
  display: "flex",
  alignItems: "center",
  transition: "background-color 0.3s",
  borderRadius: 2,
  padding: "0 5px",
  fontFamily: "'Montserrat', sans-serif",

  "&:hover": {
    background: "white",

    color: "black",
    textDecoration: "none", // Remove underline on hover
  },
}));

const RenderPageList = () => {
  const [t] = useTranslation("global");

  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        width: "100%",
        height: "100%",
        fontFamily: "sans-serif",
        alignItems: "center",
        margin: 0,
        paddingRight: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 1,
          alignItems: "center",
          height: "40px",
        }}
      >
        <CustomLink href="/welcome">{t("header.welcome")}</CustomLink>
        <CustomLink href="/rims">{t("header.rims")}</CustomLink>
        <CustomLink href="/tires">{t("header.tires")}</CustomLink>
        <CustomLink href="/accessories">{t("header.accessories")}</CustomLink>
        <CustomLink href="/blog">{t("header.blog")}</CustomLink>
        <CustomLink href="/faq">{t("header.faq")}</CustomLink>
      </Box>
    </Box>
  );
};

export default RenderPageList;
