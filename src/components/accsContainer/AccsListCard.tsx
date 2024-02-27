import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import styled from "@emotion/styled";
import Tooltip from "@mui/material/Tooltip";

import { useNavigate } from "react-router-dom";

interface AccsCardProps {
  image: string;
  length: number;
  color: string;
  gram: number;
  price: number;
  title: string;
  accsId: number;
}

export default function AccsListCard({
  image,
  price,
  title,
  accsId,
  gram,
  color,
  length,
}: AccsCardProps) {
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
        navigate(`/accessories/${accsId}`);
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
            height: 320,
            width: 170,
          },
        }}
      >
        <CardMedia
          component="img"
          image={image}
          sx={{
            objectFit: "cover",
            marginRight: "auto",
            marginLeft: "auto",
            left: 0,
            right: 0,
            borderRadius: 2,
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
              {title}
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
              <Typography>
                Length: {length}
                <p style={{ fontSize: 8, display: "inline" }}>mm</p>
              </Typography>
              <Typography>Gram: {gram}</Typography>
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
                pour 20x
              </p>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}