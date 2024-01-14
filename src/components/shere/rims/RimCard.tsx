import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import styled from "@emotion/styled";
import Tooltip from "@mui/material/Tooltip";

import "../../../fonts/monsterrat.css";

const InfoCustomTypo = styled(Typography)(() => ({
  fontFamily: "'Montserrat', sans-serif",
  // fontSize: fontSize,
}));

export default function RimCard({ image, info, price, isPopular }: any) {
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

            transformOrigin: "70% 90%",
            transition: "transform .25s, visibility .25s ease-in",
            "&:hover": {
              transform: "scale(2)",
            },
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
              {info.name}
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
              <InfoCustomTypo>Taille: {info.size}</InfoCustomTypo>
              <InfoCustomTypo>Largeur: {info.width}</InfoCustomTypo>
              <InfoCustomTypo
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Couleur:
                {/* color round */}
                <Tooltip title={info.color} placement="right" arrow>
                  <Box
                    sx={{
                      width: "20px",
                      height: "20px",
                      lineHeight: "100px",
                      borderRadius: "50%",
                      background: info.color,
                      marginLeft: 1,
                    }}
                  />
                </Tooltip>
              </InfoCustomTypo>
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
                {price}
              </InfoCustomTypo>
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  margin: 0,
                  fontSize: 11,
                }}
              >
                pour 4 jantes
              </p>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
