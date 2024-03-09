import styled from "@emotion/styled";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";

import ClearIcon from "@mui/icons-material/Clear";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { removeBusketItemEffect } from "../../store/effects/shopBusket/shopBusket.effect";

const InfoCustomTypo = styled(Typography)(() => ({
  fontFamily: "'Montserrat', sans-serif",
  // fontSize: fontSize,
}));

interface ItemCardProps {
  image: string;
  price: number;
  itemWidth: number;
  color: string;
  name: string;
  size: string;
  itemId: string;
  count: number;
  type: string
}

const ShopBasketCard = ({
  image,
  price,
  itemWidth,
  color,
  name,
  size,
  itemId,
  count,
  type

}: ItemCardProps) => {

  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  const removeBusketItem = (event: any) => {
    event.stopPropagation();
    dispatch(
      removeBusketItemEffect(itemId, type)
    );
  }

  return (
    <Card
      sx={{
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        borderRadius: 2,
        width: "fit-content",

        "&:hover": {
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
        },
      }}
      onClick={() => {
        navigate(`/rims/${itemId}`);
      }}
    >
      <CardActionArea
        disableRipple
        sx={{
          height: "250px",
          width: "400px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          padding: 1,
          overflow: "hidden",
        }}
      >
        <Box sx={{ overflow: "hidden", width: 530 }}>
          <CardMedia
            component="img"
            image={image}
            sx={{
              width: 230,
              height: 220,
              objectFit: "cover",
              marginRight: "auto",
              marginLeft: "auto",
              left: 0,
              right: 0,

              transformOrigin: "80% 100%",
              transition: "transform .25s, visibility .25s ease-in",
              "&:hover": {
                transform: "scale(2)",
              },
            }}
          />
        </Box>
        <CardContent
          sx={{
            width: "100%",
            padding: 0,
            zIndex: 1,
          }}
        >
          {/* name */}
          <Box sx={{ paddingBottom: 1 }}>
            <InfoCustomTypo
              sx={{
                fontWeight: "bold",
                fontSize: "18px !important",
                textAlign: "center",
              }}
            >
              {name}
            </InfoCustomTypo>
          </Box>

          {/* middle info */}
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <InfoCustomTypo>Taille: {size}</InfoCustomTypo>
              <InfoCustomTypo sx={{ textAlign: "center" }}>
                Largeur: {itemWidth}
              </InfoCustomTypo>
              <InfoCustomTypo
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
                      background: color,
                      marginLeft: 1,
                    }}
                  />
                </Tooltip>
              </InfoCustomTypo>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              textAlign: "end",
              paddingTop: 2,
            }}
          >
            <InfoCustomTypo
              sx={{
                color: "#4CBB17",
                fontSize: price.toString().length === 4 ? "244px" : "32px",
                textAlign: "center",
              }}
            >
              €{price}
            </InfoCustomTypo>
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                margin: 0,
                fontSize: 11,
                textAlign: "center",
              }}
            >
              pour {count} jantes
            </p>
          </Box>
        </CardContent>
        <Box
          sx={{
            position: "absolute",
            right: 1,
            top: 1,
          }}
        >
          <Button
            onClick={(event) => { removeBusketItem(event) }}
          >
            <ClearIcon />
          </Button>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default ShopBasketCard;
