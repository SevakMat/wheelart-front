import { Button, styled, Box } from "@mui/material";
import { useTranslation } from "react-i18next";

const CustomBox = styled(Box)(() => ({
  fontSize: 15,
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  alignItems: "center",
  rowGap: 10,

  "@media(max-width: 600px)": {
    fontSize: 13,
  },
}));

const CustomH3 = styled(Box)(() => ({
  margin: 0,
  padding: 0,
  fontWeight: "bold",
  fontSize: 20,

  "@media(max-width: 600px)": {
    fontSize: 18,
  },
}));

const CustomParagraph = styled(Box)(() => ({
  margin: 0,
  padding: 0,
}));

const CustomButton = styled(Button)(() => ({
  justifyContent: "center",
  color: "white",
  fontWeight: "bold",
  width: 150,
  height: 30,
  background:
    "radial-gradient(circle, rgba(77,81,99,1) 0%, rgba(176,159,159,1) 100%)",

  "@media(max-width: 600px)": {
    fontSize: 10,
    height: 20,
    width: 120,
  },
}));

export const CaruselItemInfoF = () => {
  const [t] = useTranslation("home");

  return [
    {
      label: (
        <CustomBox>
          <CustomH3>{t("slider.headers.welcomeToWheelArt")}</CustomH3>
          <CustomParagraph>{t("slider.infos.first")}</CustomParagraph>
        </CustomBox>
      ),
      imgPath:
        "https://images.pexels.com/photos/17060041/pexels-photo-17060041/free-photo-of-close-up-of-the-front-of-a-red-bmw-e36.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      label: (
        <CustomBox>
          <CustomH3>{t("slider.headers.alloyWheels")}</CustomH3>
          <CustomParagraph>{t("slider.infos.second")}</CustomParagraph>
          <CustomButton>{t("buttons.clickHere")}</CustomButton>
        </CustomBox>
      ),
      imgPath:
        "https://images.pexels.com/photos/13712008/pexels-photo-13712008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      label: (
        <CustomBox>
          <CustomH3>{t("slider.headers.accessories")}</CustomH3>
          <CustomParagraph>{t("slider.infos.three")}</CustomParagraph>
          <CustomButton>{t("buttons.discoverHere")}</CustomButton>
        </CustomBox>
      ),
      imgPath:
        "https://images.pexels.com/photos/2922140/pexels-photo-2922140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      label: (
        <CustomBox>
          <CustomH3>{t("slider.headers.tires")}</CustomH3>
          <CustomParagraph>{t("slider.infos.four")}</CustomParagraph>
          <CustomButton>{t("buttons.findHere")}</CustomButton>
        </CustomBox>
      ),
      imgPath:
        "https://img.freepik.com/free-photo/dark-storage-full-big-variety-new-tyres-busy-warehouse_613910-17116.jpg?w=900&t=st=1703277935~exp=1703278535~hmac=d14411d9038b0ae355e38be7839480df4b6c82af284d2933d3fd497257c174e8",
    },
  ];
};

// export const caruselItemInfo = [
//   {
//     label: (
//       <CustomBox>
//         <CustomH3 >Bienvenue chez Wheel Art</CustomH3>
//         <CustomParagraph>
//           Une multitude de jantes alu, pour une multitude de véhicules.
//           Agressivité, Stabilité et Élégance, faites de ces 3 mots votre devise.
//         </CustomParagraph>
//       </CustomBox>
//     ),
//     imgPath:
//       "https://images.pexels.com/photos/17060041/pexels-photo-17060041/free-photo-of-close-up-of-the-front-of-a-red-bmw-e36.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   },
//   {
//     label: (
//       <CustomBox>
//         <CustomH3>Jantes Alu</CustomH3>
//         <CustomParagraph>Un choix multiple de jantes</CustomParagraph>
//         <CustomButton>Cilquez ici</CustomButton>
//       </CustomBox>
//     ),
//     imgPath:
//       "https://images.pexels.com/photos/13712008/pexels-photo-13712008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   },
//   {
//     label: (
//       <CustomBox>
//         <CustomH3>Accessoires</CustomH3>
//         <CustomParagraph>Retrouvez tous nos accessoires</CustomParagraph>
//         <CustomButton>Découvrir ici</CustomButton>
//       </CustomBox>
//     ),
//     imgPath:
//       "https://images.pexels.com/photos/2922140/pexels-photo-2922140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   },
//   {
//     label: (
//       <CustomBox>
//         <CustomH3>Pneus</CustomH3>
//         <CustomParagraph>Choisissez votre pneu préféré</CustomParagraph>
//         <CustomButton>Trouver ici</CustomButton>
//       </CustomBox>
//     ),
//     imgPath:
//       "https://img.freepik.com/free-photo/dark-storage-full-big-variety-new-tyres-busy-warehouse_613910-17116.jpg?w=900&t=st=1703277935~exp=1703278535~hmac=d14411d9038b0ae355e38be7839480df4b6c82af284d2933d3fd497257c174e8",
//   },
// ];
