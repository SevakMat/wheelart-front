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
    <Box component="div" sx={{ width: "100%", fontFamily: "sans-serif" }}>
      <CustomLink href="/welcome">Accueli</CustomLink>
      <CustomLink href="/rims">Janets</CustomLink>
      <CustomLink href="/accessories">Accessoires</CustomLink>
      <CustomLink href="/faq">FAQ</CustomLink>

      <Box component="div" sx={{ display: "flex", float: "right", gap: 2 }}>
        <Link href="/search">
          <CiSearch color="white" size={30} />
        </Link>
        <Link href="/account">
          <CiUser color="white" size={30} />
        </Link>
        <Link href="card">
          <CiShoppingBasket color="white" size={30} />
        </Link>
      </Box>
    </Box>
  );
};

export default RenderPageList;
