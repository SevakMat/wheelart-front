import { Link, MenuItem, styled, Box } from "@mui/material";
import { CiSearch, CiUser, CiShoppingBasket } from "react-icons/ci";

const CustomLink = styled(Link)(() => ({
  color: "#fff",
  fontSize: 20,
  textDecoration: "none",
  padding: "0px 30px",
  "&:hover": {
    textDecoration: "underline",
  },
}));

const RenderPageList = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        fontFamily: "sans-serif",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
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
