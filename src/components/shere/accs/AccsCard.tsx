import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import styled from "@emotion/styled";
import Tooltip from "@mui/material/Tooltip";

import "../../../fonts/monsterrat.css";
import { useNavigate } from "react-router-dom";

const InfoCustomTypo = styled(Typography)(() => ({
  fontFamily: "'Montserrat', sans-serif",
  // fontSize: fontSize,
}));

interface AccsCardProps {
  isPopular: boolean;
  image: string;
  length: number;
  color: string;
  gram: number;
  price: number;
  make: string;
  accsId: number;
}

export default function AccsCard({
  isPopular,
  image,
  price,
  make,
  accsId,
  gram,
  color,
  length,
}: AccsCardProps) {
  const navigate = useNavigate();

  let width, height, fontSize: number;

  if (isPopular) {
    width = 250;
    height = 380;
    fontSize = 24;
  } else {
    width = 210;
    height = 340;
    fontSize = 14;
  }

  return (
    <Card
      sx={{
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        borderRadius: 2,

        "&:hover": {
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
        },
      }}
      onClick={() => {
        navigate(`/accessories/${accsId}`);
      }}
    >
      <CardActionArea
        sx={{
          height: height, //380
          width: width, //250
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          padding: 1,
          overflow: "hidden",
        }}
      >
        <CardMedia
          component="img"
          image={image}
          sx={{
            // width: 230,
            // height: 220,
            objectFit: "cover",
            marginRight: "auto",
            marginLeft: "auto",
            left: 0,
            right: 0,

            // transformOrigin: "70% 90%",
            // transition: "transform .25s, visibility .25s ease-in",
            // "&:hover": {
            //   transform: "scale(2)",
            // },
          }}
        />

        <CardContent
          sx={{
            marginTop: 3,
            width: "100%",
            padding: 0,
            zIndex: 1,
          }}
        >
          {/* name */}
          <Box sx={{ paddingBottom: 1 }}>
            <InfoCustomTypo
              sx={{ fontWeight: "bold", fontSize: "18px !important" }}
            >
              {make}
            </InfoCustomTypo>
          </Box>

          {/* middle info */}
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
              }}
            >
              <InfoCustomTypo>Length: {length}</InfoCustomTypo>
              <InfoCustomTypo>Gram: {gram}</InfoCustomTypo>
              <InfoCustomTypo>Color: {color}</InfoCustomTypo>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                textAlign: "end",
              }}
            >
              <InfoCustomTypo
                sx={{
                  color: "#4CBB17",
                  fontSize: price.toString().length === 4 ? "24px" : "22px",
                }}
              >
                €{price}
              </InfoCustomTypo>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
