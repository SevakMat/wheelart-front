import { FC } from "react";
import Box from "@mui/material/Box";
import { IMainContainer } from "../interfaces";
import Header from "./header/Header";
import Footer from "./Footer";

const MainContainer: FC<IMainContainer> = ({ children }) => {
  return (
    <Box>
      <Header />
      {children}
      {/* <Footer /> */}
    </Box>
  );
};

export default MainContainer;
