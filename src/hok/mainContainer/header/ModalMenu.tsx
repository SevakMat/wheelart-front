import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";

import { Facebook, Instagram } from "@mui/icons-material";

import "../../../fonts/monsterrat.css";
import { Link } from "@mui/material";
import { useTranslation } from "react-i18next";

const drawerWidth = 240;

const TikTokIcon = ({ color = "#000000" }) => {
  return (
    <svg
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width="24px"
    >
      <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
    </svg>
  );
};

const SnapchatIcon = ({ color = "#000000" }) => {
  return (
    <svg
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      width="24px"
      viewBox="0 0 50 50"
    >
      <path d="M 24.5625 3.34375 C 23.578125 3.34375 21.488281 3.496094 19.21875 4.5 C 16.949219 5.503906 14.496094 7.417969 12.96875 10.84375 C 11.816406 13.425781 12.15625 17.183594 12.34375 20.1875 C 12.359375 20.410156 12.363281 20.601563 12.375 20.8125 C 12.28125 20.855469 12.363281 20.875 12.0625 20.875 C 11.609375 20.875 11.003906 20.726563 10.25 20.375 C 9.949219 20.234375 9.628906 20.1875 9.3125 20.1875 C 8.738281 20.1875 8.175781 20.359375 7.6875 20.65625 C 7.199219 20.953125 6.730469 21.414063 6.59375 22.125 C 6.511719 22.5625 6.605469 23.21875 7.03125 23.75 C 7.457031 24.28125 8.117188 24.714844 9.15625 25.125 C 9.382813 25.214844 9.613281 25.300781 9.84375 25.375 C 10.3125 25.523438 10.863281 25.683594 11.28125 25.90625 C 11.699219 26.128906 11.945313 26.390625 12.03125 26.59375 C 12.125 26.8125 12.152344 27.152344 11.84375 27.78125 C 11.832031 27.800781 11.820313 27.824219 11.8125 27.84375 C 11.808594 27.859375 11.792969 27.871094 11.78125 27.90625 C 11.65625 28.1875 8.917969 34.15625 3.21875 35.09375 C 2.484375 35.214844 1.960938 35.855469 2 36.59375 C 2.011719 36.808594 2.082031 37.039063 2.15625 37.21875 C 2.433594 37.871094 3.027344 38.351563 4 38.78125 C 4.898438 39.179688 6.296875 39.53125 8.15625 39.84375 C 8.203125 39.972656 8.265625 40.214844 8.34375 40.5625 C 8.34375 40.570313 8.339844 40.585938 8.34375 40.59375 C 8.414063 40.917969 8.480469 41.273438 8.59375 41.65625 C 8.707031 42.046875 8.996094 42.429688 9.34375 42.625 C 9.691406 42.820313 10.019531 42.84375 10.21875 42.84375 C 10.632813 42.84375 10.976563 42.757813 11.34375 42.6875 C 11.949219 42.570313 12.679688 42.4375 13.625 42.4375 C 14.148438 42.4375 14.695313 42.472656 15.25 42.5625 C 16.199219 42.71875 17.132813 43.335938 18.25 44.125 C 19.867188 45.269531 21.808594 46.65625 24.71875 46.65625 C 24.769531 46.65625 24.824219 46.628906 24.875 46.625 C 24.925781 46.628906 24.980469 46.625 25.03125 46.625 C 25.113281 46.628906 25.199219 46.65625 25.28125 46.65625 C 28.191406 46.65625 30.128906 45.269531 31.75 44.125 C 32.863281 43.335938 33.800781 42.71875 34.75 42.5625 C 35.304688 42.472656 35.851563 42.4375 36.375 42.4375 C 37.289063 42.4375 38.011719 42.554688 38.6875 42.6875 C 39.117188 42.773438 39.445313 42.8125 39.78125 42.8125 L 39.84375 42.8125 C 40.152344 42.8125 40.507813 42.726563 40.8125 42.5 C 41.117188 42.273438 41.320313 41.949219 41.40625 41.65625 C 41.519531 41.273438 41.582031 40.90625 41.65625 40.5625 C 41.738281 40.179688 41.800781 39.972656 41.84375 39.84375 C 43.703125 39.53125 45.101563 39.179688 46 38.78125 C 46.972656 38.351563 47.566406 37.867188 47.84375 37.21875 C 47.925781 37.03125 47.988281 36.808594 48 36.59375 C 48.039063 35.859375 47.511719 35.214844 46.78125 35.09375 C 43.90625 34.621094 41.796875 32.890625 40.375 31.21875 C 38.960938 29.554688 38.257813 27.964844 38.21875 27.875 C 38.21875 27.863281 38.21875 27.855469 38.21875 27.84375 C 38.210938 27.824219 38.199219 27.800781 38.1875 27.78125 C 37.875 27.152344 37.875 26.816406 37.96875 26.59375 C 38.054688 26.390625 38.300781 26.128906 38.71875 25.90625 C 39.136719 25.683594 39.683594 25.523438 40.15625 25.375 C 40.390625 25.300781 40.625 25.210938 40.84375 25.125 C 41.753906 24.765625 42.378906 24.390625 42.8125 23.9375 C 43.246094 23.484375 43.445313 22.921875 43.4375 22.4375 C 43.417969 21.414063 42.65625 20.734375 41.78125 20.40625 L 41.75 20.375 C 41.742188 20.371094 41.726563 20.378906 41.71875 20.375 C 41.359375 20.230469 40.980469 20.15625 40.59375 20.15625 C 40.332031 20.15625 39.96875 20.167969 39.53125 20.375 C 38.851563 20.695313 38.28125 20.851563 37.84375 20.875 C 37.816406 20.875 37.839844 20.875 37.8125 20.875 C 37.785156 20.875 37.804688 20.878906 37.78125 20.875 C 37.652344 20.859375 37.691406 20.835938 37.625 20.8125 C 37.636719 20.640625 37.644531 20.488281 37.65625 20.3125 L 37.65625 20.1875 C 37.847656 17.183594 38.183594 13.429688 37.03125 10.84375 C 35.503906 7.417969 33.054688 5.472656 30.78125 4.46875 C 28.507813 3.464844 26.425781 3.34375 25.4375 3.34375 L 25.34375 3.34375 C 25.332031 3.34375 25.324219 3.34375 25.3125 3.34375 Z M 24.5625 5.34375 L 25.4375 5.34375 C 26.238281 5.34375 28.054688 5.46875 29.96875 6.3125 C 31.882813 7.15625 33.898438 8.691406 35.21875 11.65625 C 35.96875 13.335938 35.847656 17.0625 35.65625 20.0625 L 35.65625 20.1875 C 35.628906 20.605469 35.582031 21.011719 35.5625 21.40625 C 35.554688 21.6875 35.667969 21.960938 35.875 22.15625 C 36.03125 22.316406 36.6875 22.832031 37.78125 22.875 C 37.792969 22.875 37.800781 22.875 37.8125 22.875 C 37.824219 22.875 37.832031 22.875 37.84375 22.875 C 38.652344 22.84375 39.5 22.597656 40.375 22.1875 C 40.398438 22.175781 40.507813 22.15625 40.59375 22.15625 C 40.71875 22.15625 40.882813 22.1875 40.96875 22.21875 C 40.976563 22.222656 40.992188 22.214844 41 22.21875 C 41.019531 22.230469 41.042969 22.242188 41.0625 22.25 C 41.296875 22.332031 41.40625 22.425781 41.4375 22.46875 C 41.445313 22.476563 41.433594 22.496094 41.4375 22.5 C 41.425781 22.519531 41.414063 22.519531 41.375 22.5625 C 41.230469 22.714844 40.832031 22.988281 40.09375 23.28125 C 39.972656 23.328125 39.789063 23.398438 39.5625 23.46875 C 39.089844 23.617188 38.417969 23.820313 37.78125 24.15625 C 37.144531 24.492188 36.472656 24.988281 36.125 25.8125 C 35.753906 26.683594 35.910156 27.640625 36.34375 28.5625 C 36.347656 28.578125 36.339844 28.582031 36.34375 28.59375 C 36.359375 28.636719 36.375 28.660156 36.375 28.65625 C 36.464844 28.863281 37.222656 30.628906 38.84375 32.53125 C 40.300781 34.242188 42.515625 36.011719 45.46875 36.78125 C 45.34375 36.863281 45.429688 36.859375 45.1875 36.96875 C 44.46875 37.285156 43.234375 37.625 41.21875 37.9375 C 40.648438 38.023438 40.222656 38.5625 40.0625 38.9375 C 39.902344 39.3125 39.820313 39.683594 39.71875 40.15625 C 39.671875 40.375 39.613281 40.574219 39.5625 40.78125 C 39.425781 40.769531 39.3125 40.769531 39.0625 40.71875 C 38.335938 40.578125 37.457031 40.4375 36.375 40.4375 C 35.734375 40.4375 35.09375 40.484375 34.4375 40.59375 C 32.902344 40.851563 31.707031 41.710938 30.59375 42.5 C 28.96875 43.644531 27.585938 44.65625 25.28125 44.65625 C 25.1875 44.65625 25.09375 44.660156 25 44.65625 C 24.957031 44.652344 24.917969 44.652344 24.875 44.65625 C 24.835938 44.660156 24.765625 44.65625 24.71875 44.65625 C 22.414063 44.65625 21.023438 43.644531 19.40625 42.5 C 18.289063 41.710938 17.097656 40.847656 15.5625 40.59375 C 14.90625 40.484375 14.265625 40.4375 13.625 40.4375 C 12.472656 40.4375 11.542969 40.601563 10.9375 40.71875 C 10.695313 40.765625 10.605469 40.792969 10.46875 40.8125 C 10.414063 40.59375 10.332031 40.386719 10.28125 40.15625 C 10.1875 39.726563 10.125 39.347656 9.96875 38.96875 C 9.890625 38.78125 9.78125 38.574219 9.59375 38.375 C 9.40625 38.175781 9.128906 38.015625 8.8125 37.96875 C 6.800781 37.65625 5.53125 37.285156 4.8125 36.96875 C 4.5625 36.859375 4.65625 36.867188 4.53125 36.78125 C 10.761719 35.171875 13.472656 29.007813 13.625 28.65625 C 13.636719 28.632813 13.644531 28.617188 13.65625 28.59375 C 13.660156 28.582031 13.652344 28.578125 13.65625 28.5625 C 14.089844 27.640625 14.246094 26.683594 13.875 25.8125 C 13.523438 24.988281 12.855469 24.492188 12.21875 24.15625 C 11.582031 23.820313 10.941406 23.617188 10.46875 23.46875 C 10.238281 23.394531 10.023438 23.328125 9.90625 23.28125 C 9.066406 22.949219 8.699219 22.632813 8.59375 22.5 C 8.59375 22.519531 8.570313 22.433594 8.71875 22.34375 C 8.882813 22.246094 9.171875 22.1875 9.3125 22.1875 C 9.390625 22.1875 9.386719 22.191406 9.375 22.1875 C 10.3125 22.625 11.203125 22.875 12.0625 22.875 C 13.25 22.875 13.960938 22.359375 14.15625 22.15625 C 14.351563 21.957031 14.453125 21.683594 14.4375 21.40625 C 14.414063 20.96875 14.371094 20.523438 14.34375 20.0625 C 14.15625 17.058594 14.03125 13.335938 14.78125 11.65625 C 16.101563 8.695313 18.089844 7.15625 20 6.3125 C 21.910156 5.46875 23.761719 5.34375 24.5625 5.34375 Z"></path>
    </svg>
  );
};

export default function ModalMenu() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [t] = useTranslation("global")

  const pageLinks = [
    {
      href: "/welcome",
      name: t("header.welcome"),
    },
    {
      href: "/rims",
      name: t("header.rims"),
    },
    {
      href: "/accessories",
      name: t("header.accessories"),
    },
    {
      href: "/blog",
      name: t("header.blog"),
    },
    {
      href: "/faq",
      name: t("header.faq"),
    },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Box
        sx={{
          color: "white",
          display: "flex",
          flexWrap: "nowrap",
          justifyContent: "flex-start",
          paddingLeft: 2,
          fontFamily: "'Montserrat', sans-serif",
          fontStyle: "italic",
          fontSize: 20,
        }}
      >
        <h3>WHEEL ART</h3>
      </Box>

      <Divider sx={{ bgcolor: "white" }} />
      <List>
        {pageLinks.map((link) => (
          <ListItem key={link.name} disablePadding>
            <ListItemButton href={link.href}>
              <ListItemText
                primary={link.name}
                sx={{
                  color: "white",
                  "& span": { fontFamily: "'Montserrat', sans-serif" },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ bgcolor: "white" }} />
      <p
        style={{
          color: "white",
          paddingLeft: 16,
          fontSize: 24,
          fontFamily: "'Montserrat', sans-serif",
          margin: "20px 0 30px 0",
        }}
      >
        Contact
      </p>
      <List
        sx={{
          paddingLeft: "16px",
          "& span": { fontFamily: "'Montserrat', sans-serif" },
        }}
      >
        <ListItemText sx={{ color: "white" }}>06 14 91 25 52</ListItemText>
        <ListItemText sx={{ color: "white" }}>01 77 05 34 13</ListItemText>
      </List>
      <List sx={{ paddingLeft: "16px" }}>
        <ListItem sx={{ padding: 0 }}>

          <Link href="https://www.facebook.com/" sx={{ paddingLeft: 0 }}>
            <Facebook style={{ fill: "white" }} />
          </Link>

          <Link href="https://www.instagram.com/">
            <Instagram style={{ fill: "white" }} />
          </Link>
          <Link href="https://www.twitter.com/">
            <TikTokIcon color="white" />
          </Link>
          <Link href="https://www.twitter.com/">
            <SnapchatIcon color="white" />
          </Link>
        </ListItem>
      </List>
    </div>
  );

  return (
    <>
      <Box
        color="inherit"
        onClick={handleDrawerToggle}
        sx={{ display: { md: "none", xs: "flex" }, padding: 0 }}
      >
        <MenuIcon />
      </Box>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            background: "rgba(0, 0, 0, 0.8)",
            overflow: "auto",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
            "&-ms-overflow-style:": {
              display: "none",
            },
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
