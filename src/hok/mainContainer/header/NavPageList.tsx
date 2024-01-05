import { Link, styled, Box } from "@mui/material";

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
