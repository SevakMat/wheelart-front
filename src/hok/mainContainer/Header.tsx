import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

import RenderPageList from "./RenderPageList";

const wheelArtLogo =
  "https://wheelart.fr/cdn/shop/files/WHEEL_ART_NEW_b3db3b01-cdd1-4add-9c2b-6637d01cc768.png?v=1642688076&width=500";

const styles = {
  appBarStyle: {
    background: "linear-gradient(to right, black 50%, grey)",
    height: 150,
    width: "100%",
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

const pages = ["Accueli", "Janets", "Accessoires", "FAQ"];

function Header() {
  return (
    <AppBar color="default" position="relative" sx={styles.appBarStyle}>
      <Container disableGutters maxWidth={false} fixed>
        <Toolbar variant="dense">
          <Link href="./home">
            <Box
              component="img"
              alt="wheel-art-logo"
              src={wheelArtLogo}
              sx={styles.logoStyle}
            />
          </Link>
          <RenderPageList />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
