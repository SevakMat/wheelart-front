import { Box } from "@mui/system";

import MainCarousel from "./MainCarousel";
import Products from "./Products";
import BlogCards from "./BlogCards";

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

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        margin: "0px auto",
        width: "92%",

        maxWidth: "1100px",
        position: "relative",
      }}
    >
      <Box>
        <MainCarousel />
        <Products wheelList={wheelList} />
        <BlogCards />
      </Box>

      {/* <Box>1 mobile 2 mobile 3 mobile</Box> */}
    </Box>
  );
};

export default HomePage;
