import { Box } from "@mui/system";

import Carousel from "./carousel/Carousel";
import ShortInfo from "./ShortInfo";
import Products from "./products/Products";
import About from "./About";
import BlogsHome from "./blogs/BlogsHome";
// import { useTranslation } from "react-i18next";

const wheelList = [
  {
    image: "https://wheelart.fr/cdn/shop/files/WHEEL_ART_NEW_b3db3b01-cdd1-4add-9c2b-6637d01cc768.png?v=1642688076&width=500",
    info: 'Set of 4 18" WheelArt special',
    price: `${850.0} EUR`,
  },
  {
    image: "https://wheelart.fr/cdn/shop/files/WHEEL_ART_NEW_b3db3b01-cdd1-4add-9c2b-6637d01cc768.png?v=1642688076&width=500",
    info: 'Set of 4 18" WheelArt special',
    price: `${850.0} EUR`,
  },
  {
    image: "https://wheelart.fr/cdn/shop/files/WHEEL_ART_NEW_b3db3b01-cdd1-4add-9c2b-6637d01cc768.png?v=1642688076&width=500",
    info: 'Set of 4 18" WheelArt special',
    price: `${850.0} EUR`,
  },
  {
    image: "https://wheelart.fr/cdn/shop/files/WHEEL_ART_NEW_b3db3b01-cdd1-4add-9c2b-6637d01cc768.png?v=1642688076&width=500",
    info: 'Set of 4 18" WheelArt special',
    price: `${850.0} EUR`,
  },
  {
    image:
      "https://wheelart.fr/cdn/shop/files/WHEEL_ART_NEW_b3db3b01-cdd1-4add-9c2b-6637d01cc768.png?v=1642688076&width=500",
    info: 'Set of 4 18" WheelArt special',
    price: `${850.0} EUR`,
  },
  {
    image: "https://wheelart.fr/cdn/shop/files/WHEEL_ART_NEW_b3db3b01-cdd1-4add-9c2b-6637d01cc768.png?v=1642688076&width=500",
    info: 'Set of 4 18" WheelArt special',
    price: `${850.0} EUR`,
  },
  {
    image: "https://wheelart.fr/cdn/shop/files/WHEEL_ART_NEW_b3db3b01-cdd1-4add-9c2b-6637d01cc768.png?v=1642688076&width=500",
    info: 'Set of 4 18" WheelArt special',
    price: `${850.0} EUR`,
  },
  {
    image: "https://wheelart.fr/cdn/shop/files/WHEEL_ART_NEW_b3db3b01-cdd1-4add-9c2b-6637d01cc768.png?v=1642688076&width=500",
    info: 'Set of 4 18" WheelArt special',
    price: `${850.0} EUR`,
  },
]
const HomePage = () => {

  // const [t, i18n] = useTranslation("global")

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        margin: "0px auto",
        width: "100%",

        maxWidth: "1920px",
        position: "relative",
      }}
    >
      <Box>
        <Carousel />
        <ShortInfo />
        <Products />
        <About />
        <BlogsHome />
      </Box>
    </Box>
  );
};

export default HomePage;
