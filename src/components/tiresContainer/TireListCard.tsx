import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import styled from "@emotion/styled";
import Tooltip from "@mui/material/Tooltip";

import { useNavigate } from "react-router-dom";

interface TireListCardProps {
  image: string;
  price: number;
  tireWidth: number;
  marka: string;
  tireAspectRatio: number;
  tireDiameter: number;
  tireId: number;
  color: string;
}

export default function TireListCard({
  image,
  price,
  tireWidth,
  marka,
  tireAspectRatio,
  tireDiameter,
  tireId,
  color,
}: TireListCardProps) {
  const navigate = useNavigate();

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
        navigate(`/tires/${tireId}`);
      }}
    >
      <CardActionArea
        sx={{
          height: 340,
          width: 210,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          padding: 1,
          overflow: "hidden",

          "@media(max-width: 600px)": {
            height: 320,
            width: 190,
          },

          "@media(max-width: 410px)": {
            height: 300,
            width: 170,
          },
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
            <Typography
              sx={{ fontWeight: "bold", fontSize: "18px !important" }}
            >
              {marka}
            </Typography>
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
              <Typography>AR: {tireAspectRatio}</Typography>
              <Typography>Largeur: {tireWidth}</Typography>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Couleur:
                {/* color round */}
                <Tooltip title={color} placement="right" arrow>
                  <Box
                    sx={{
                      width: "20px",
                      height: "20px",
                      lineHeight: "100px",
                      borderRadius: "50%",
                      background: color !== "test" ? color : "black",
                      marginLeft: 1,
                    }}
                  />
                </Tooltip>
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                textAlign: "end",
              }}
            >
              <Typography
                sx={{
                  color: "#4CBB17",
                  fontSize: price.toString().length === 4 ? "24px" : "22px",
                }}
              >
                €{price}
              </Typography>
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  margin: 0,
                  fontSize: 11,
                }}
              >
                pour 4 pneus
              </p>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
