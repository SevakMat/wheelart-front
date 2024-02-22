import { Box, List } from "@mui/material";

import { RootState, useAppSelector } from "../../store";
import TireListCard from "./TireListCard";

const TiresList = () => {
  const fakeData = [
    {
      isPopular: false,
      image:
        "https://armstrongtire.com/app/themes/armstrongtire/assets/images/home/passenger/1510/tire.png",
      price: 180,
      tireWidth: 55,
      marka: "WheelArt",
      tireAspectRatio: 50,
      tireDiameter: 100,
      tireId: 3,
      color: "black",
    },
    {
      isPopular: false,
      image:
        "https://armstrongtire.com/app/themes/armstrongtire/assets/images/home/passenger/1510/tire.png",
      price: 180,
      tireWidth: 55,
      marka: "WheelArt",
      tireAspectRatio: 50,
      tireDiameter: 100,
      tireId: 3,
      color: "black",
    },
    {
      isPopular: false,
      image:
        "https://armstrongtire.com/app/themes/armstrongtire/assets/images/home/passenger/1510/tire.png",
      price: 180,
      tireWidth: 55,
      marka: "WheelArt",
      tireAspectRatio: 50,
      tireDiameter: 100,
      tireId: 3,
      color: "black",
    },
    {
      isPopular: false,
      image:
        "https://armstrongtire.com/app/themes/armstrongtire/assets/images/home/passenger/1510/tire.png",
      price: 180,
      tireWidth: 55,
      marka: "WheelArt",
      tireAspectRatio: 50,
      tireDiameter: 100,
      tireId: 3,
      color: "black",
    },
    {
      isPopular: false,
      image:
        "https://armstrongtire.com/app/themes/armstrongtire/assets/images/home/passenger/1510/tire.png",
      price: 180,
      tireWidth: 55,
      marka: "WheelArt",
      tireAspectRatio: 50,
      tireDiameter: 100,
      tireId: 3,
      color: "black",
    },
    {
      isPopular: false,
      image:
        "https://armstrongtire.com/app/themes/armstrongtire/assets/images/home/passenger/1510/tire.png",
      price: 180,
      tireWidth: 55,
      marka: "WheelArt",
      tireAspectRatio: 50,
      tireDiameter: 100,
      tireId: 3,
      color: "black",
    },
    {
      isPopular: false,
      image:
        "https://armstrongtire.com/app/themes/armstrongtire/assets/images/home/passenger/1510/tire.png",
      price: 180,
      tireWidth: 55,
      marka: "WheelArt",
      tireAspectRatio: 50,
      tireDiameter: 100,
      tireId: 3,
      color: "black",
    },
    {
      isPopular: false,
      image:
        "https://armstrongtire.com/app/themes/armstrongtire/assets/images/home/passenger/1510/tire.png",
      price: 180,
      tireWidth: 55,
      marka: "WheelArt",
      tireAspectRatio: 50,
      tireDiameter: 100,
      tireId: 3,
      color: "black",
    },
    {
      isPopular: false,
      image:
        "https://armstrongtire.com/app/themes/armstrongtire/assets/images/home/passenger/1510/tire.png",
      price: 180,
      tireWidth: 55,
      marka: "WheelArt",
      tireAspectRatio: 50,
      tireDiameter: 100,
      tireId: 3,
      color: "black",
    },
    {
      isPopular: false,
      image:
        "https://armstrongtire.com/app/themes/armstrongtire/assets/images/home/passenger/1510/tire.png",
      price: 180,
      tireWidth: 55,
      marka: "WheelArt",
      tireAspectRatio: 50,
      tireDiameter: 100,
      tireId: 3,
      color: "black",
    },
    {
      isPopular: false,
      image:
        "https://armstrongtire.com/app/themes/armstrongtire/assets/images/home/passenger/1510/tire.png",
      price: 180,
      tireWidth: 55,
      marka: "WheelArt",
      tireAspectRatio: 50,
      tireDiameter: 100,
      tireId: 3,
      color: "black",
    },
    {
      isPopular: false,
      image:
        "https://armstrongtire.com/app/themes/armstrongtire/assets/images/home/passenger/1510/tire.png",
      price: 180,
      tireWidth: 55,
      marka: "WheelArt",
      tireAspectRatio: 50,
      tireDiameter: 100,
      tireId: 3,
      color: "black",
    },
  ];

  // const { rimList } = useAppSelector((state: RootState) => state.rim)

  return (
    <Box>
      <Box sx={{ margin: "30px 10px" }}>
        <List
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
            justifyContent: "center",

            "@media(max-width: 1000px)": {
              gap: 1,
            },
          }}
        >
          {fakeData.map((tire: any) => {
            return (
              <li>
                <TireListCard
                  image={tire.image}
                  price={tire.price}
                  tireWidth={tire.tireWidth}
                  marka={tire.marka}
                  tireAspectRatio={tire.tireAspectRatio}
                  tireDiameter={tire.tireDiameter}
                  tireId={tire.tireId}
                  color={tire.color}
                />
              </li>
            );
          })}
        </List>
      </Box>
    </Box>
  );
};

export default TiresList;
