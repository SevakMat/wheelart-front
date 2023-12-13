import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import RenderPageList from "./RenderPageList";

// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { CiSearch, CiShoppingBasket, CiUser } from "react-icons/ci";
// import Box from "@mui/material/Box";

// import RenderPageList from "./RenderPageList";

const wheelArtLogo =
  "https://wheelart.fr/cdn/shop/files/WHEEL_ART_NEW_b3db3b01-cdd1-4add-9c2b-6637d01cc768.png?v=1642688076&width=500";

const styles = {
  appBarStyle: {
    background: "linear-gradient(to right, black 50%, grey)",
    height: 150,
    width: "100% !important",
    justifyContent: "center",
    display: "flex",
    paddingTop: 5,
  },

  logoStyle: {
    width: 190,
    height: 180,
    ":hover": { transform: "rotate(360deg)" },
    transition: "transform 1.2s",
    transitionDelay: "0.2s",
  },
};

// const pages = ["Accueli", "Janets", "Accessoires", "FAQ"];

// function Header() {
//   return (
//     <AppBar color="default" position="relative" sx={styles.appBarStyle}>
//       <Container
//         disableGutters
//         maxWidth={false}
//         fixed
//         sx={{ display: "flex", maxWidth: "100%", margin: 0 }}
//       >
//         <Toolbar variant="dense">
//           <Link href="/home">
//             <Box
//               component="img"
//               alt="wheel-art-logo"
//               src={wheelArtLogo}
//               sx={styles.logoStyle}
//             />
//           </Link>
//           <RenderPageList />
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }
// export default Header;

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ background: "linear-gradient(to bottom, #000000, #434343)" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-around" }}>
          <Link href="/home" sx={{ display: { xs: "none", md: "flex" } }}>
            <Box
              component="img"
              alt="wheel-art-logo"
              src={wheelArtLogo}
              sx={styles.logoStyle}
            />
          </Link>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))} */}
              <RenderPageList />
            </Menu>
          </Box>
          <Link href="/home" sx={{ display: { xs: "flex", md: "none" } }}>
            <Box
              component="img"
              alt="wheel-art-logo"
              src={wheelArtLogo}
              sx={styles.logoStyle}
            />
          </Link>
          <Box sx={{ display: "flex" }}>
            <RenderPageList />
          </Box>
          <Box sx={{ gap: 2, display: "flex" }}>
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
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
