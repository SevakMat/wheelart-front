import { FC } from "react";
import Box from "@mui/material/Box";
import { IMainContainer } from "../interfaces";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const MainContainer: FC<IMainContainer> = ({ children }) => {
  return (
    <Box>
      <Header />
      <Box sx={{ marginTop: "65px" }}>{children}</Box>
      <Footer />
    </Box>
  );
};

export default MainContainer;
