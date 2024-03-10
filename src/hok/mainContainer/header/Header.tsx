import * as React from "react";
import { useTranslation } from "react-i18next";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocalMallIcon from "@mui/icons-material/LocalMall";

import RenderPageList from "./NavPageList";
import SearchBar from "./SearchBar";
import ModalSearchBar from "./ModalSearchBar";
import ModalMenu from "./ModalMenu";
import { customBreakpoints } from "../../../customBreakpoints";

import "../../../fonts/roboto.css";
import "../../../fonts/monsterrat.css";
import ChangeLanguage from "./ChangeLanguage";
import HeaderBusket from "./Busket";

const wheelArtLogo =
  "https://wheelart.fr/cdn/shop/files/WHEEL_ART_NEW_b3db3b01-cdd1-4add-9c2b-6637d01cc768.png?v=1642688076&width=500";

const styles = {
  appBarStyle: {
    background: "linear-gradient(to right, black 50%, grey)",
    height: 10,
    width: "100% !important",
    justifyContent: "center",
    display: "flex",
    paddingTop: 5,
  },

  logoStyle: {
    width: 55,
    height: 52,
    ":hover": { transform: "rotate(360deg)" },
    transition: "transform 1.2s",
    transitionDelay: "0.2s",
  },
};

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const navigate = useNavigate();

  // const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElNav(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <ThemeProvider theme={customBreakpoints}>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          height: 65,
          background: "#161616",
          userSelect: "none",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="xl" disableGutters sx={{ padding: "0 10px" }}>
          <Toolbar
            disableGutters
            sx={{
              display: "flex",
              justifyContent: "space-between",

              "@media (max-width: 1200px)": {
                paddingLeft: 0,
              },

              "@media (max-width: 470px)": {
                paddingLeft: 0,
                justifyContent: "space-between",
              },
            }}
          >
            <Link
              onClick={() => navigate("/home")}
              sx={{
                display: { xs: "none", md: "flex" },
                color: "white",
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
                fontSize: 30,
                textDecoration: "none",
                whiteSpace: "nowrap",
                fontStyle: "italic",
                fontFamily: "'Montserrat', sans-serif",

                "&:hover": {
                  "& img": {
                    transform: "rotate(360deg)",
                  },
                  "& span": {
                    transform: "rotate(360deg)",
                  },
                  cursor: "pointer",
                },
              }}
            >
              <Box
                component="img"
                alt="wheel-art-logo"
                src={wheelArtLogo}
                sx={styles.logoStyle}
              />
              WHEEL ART
            </Link>

            {/* respossive part */}
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                sx={{ padding: 0 }}
              >
                <ModalMenu />
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
                <RenderPageList />
              </Menu>
            </Box>
            <Link
              onClick={() => navigate("/home")}
              sx={{
                display: { xs: "flex", md: "none" },
                color: "white",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
                fontSize: 25,
                textDecoration: "none",
                whiteSpace: "nowrap",
                fontStyle: "italic",
                fontFamily: "'Montserrat', sans-serif",

                "&:hover": {
                  "& img": {
                    transform: "rotate(360deg)",
                  },
                  "& span": {
                    transform: "rotate(360deg)",
                  },
                },
              }}
            >
              <Box
                component="img"
                alt="wheel-art-logo"
                src={wheelArtLogo}
                sx={{
                  ...styles.logoStyle,
                  "@media (max-width: 420px)": { display: "none" },
                }}
              />
              <Box sx={{ "@media (max-width: 440px)": { fontSize: 20 } }}>
                WHEEL ART
              </Box>
            </Link>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <RenderPageList />

              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <SearchBar />
              </Box>

              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <ModalSearchBar />
              </Box>

              <Box sx={{ display: "flex", flexWrap: "nowrap" }}>
                <HeaderBusket/>
                <IconButton
                  onClick={() => navigate("/me")}
                  sx={{ paddingRight: 0 }}
                >
                  <AccountCircleIcon style={{ color: "white" }} />
                </IconButton>
              </Box>
              <Box sx={{ paddingLeft: 1.5 }}>
                <ChangeLanguage />
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
export default Header;
