import { Box, Typography, styled } from "@mui/material";

import HighQualityIcon from "@mui/icons-material/HighQuality";
import LightModeIcon from "@mui/icons-material/LightMode";
import RecyclingIcon from "@mui/icons-material/Recycling";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

import "../../fonts/monsterrat.css";
import { useTranslation } from "react-i18next";

const CustomBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const CustomTypo = styled(Typography)(() => ({
  fontFamily: "'Montserrat', sans-serif",
  fontWeight: "bold",
}));

const ShortInfo = () => {
  const [t] = useTranslation("home")

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 20,
        padding: "10px 0",
      }}
    >
      <CustomBox sx={{ display: "flex", flexDirection: "column" }}>
        <HighQualityIcon sx={{ fontSize: 80, color: "#2C2C2C" }} />
        <CustomTypo>{t("content.highQuality")}</CustomTypo>
      </CustomBox>

      <CustomBox>
        <LightModeIcon sx={{ fontSize: 80, color: "#FFC300" }} />
        <CustomTypo>{t("content.climateNeutral")}</CustomTypo>
      </CustomBox>

      <CustomBox>
        <RecyclingIcon sx={{ fontSize: 80, color: "green" }} />
        <CustomTypo>{t("content.recyclableMaterials")}</CustomTypo>
      </CustomBox>

      <CustomBox>
        <AutoAwesomeIcon sx={{ fontSize: 80, color: "#FFDF00" }} />
        <CustomTypo>{t("content.innovativeDesign")}</CustomTypo>
      </CustomBox>
    </Box>
  );
};

export default ShortInfo;
