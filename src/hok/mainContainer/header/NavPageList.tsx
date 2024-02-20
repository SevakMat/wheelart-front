import { Link, styled, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

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
    cursor: "pointer",
    color: "black",
    textDecoration: "none", // Remove underline on hover
  },
}));

const RenderPageList = () => {
  const [t] = useTranslation("global");

  const navigate = useNavigate();

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
        <CustomLink onClick={() => navigate("/home")}>
          {t("header.welcome")}
        </CustomLink>
        <CustomLink onClick={() => navigate("/rims")}>
          {t("header.rims")}
        </CustomLink>
        <CustomLink onClick={() => navigate("/tires")}>
          {t("header.tires")}
        </CustomLink>
        <CustomLink onClick={() => navigate("/accessories")}>
          {t("header.accessories")}
        </CustomLink>
        <CustomLink onClick={() => navigate("/blog")}>
          {t("header.blog")}
        </CustomLink>
        <CustomLink onClick={() => navigate("/faq")}>
          {t("header.faq")}
        </CustomLink>
      </Box>
    </Box>
  );
};

export default RenderPageList;
