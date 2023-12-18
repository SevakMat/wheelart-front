import { Link, styled, Box } from "@mui/material";

import "../../fonts/monsterrat.css";
import "../../fonts/roboto.css";

const CustomLink = styled(Link)(() => ({
  color: "#fff",
  fontSize: 18,
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
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100%",
        fontFamily: "sans-serif",
        alignItems: "center",
        paddingRight: 2,
        margin: 0,
      }}
    >
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          gap: 1,
          alignItems: "center",
          height: "40px",
        }}
      >
        <CustomLink href="/welcome">Accueli</CustomLink>
        <CustomLink href="/rims">Janets</CustomLink>
        <CustomLink href="/accessories">Accessoires</CustomLink>
        <CustomLink href="/blog">Blog</CustomLink>
        <CustomLink href="/faq">FAQ</CustomLink>
      </Box>
    </Box>
  );
};

export default RenderPageList;
