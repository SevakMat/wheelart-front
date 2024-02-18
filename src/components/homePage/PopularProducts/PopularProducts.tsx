import { useEffect, useState } from "react";
import { Box, Button, List, Typography } from "@mui/material";
import RimCard from "../../shere/rims/RimCard";
import { useTranslation } from "react-i18next";
import Link from "@mui/material/Link";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState, useAppSelector } from "../../../store";
import { getPopularRimsEffect } from "../../../store/effects/rim/rim.effect";
import { useNavigate } from "react-router-dom";

const PopularProducts = () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularRimsEffect());
  }, []);

  const { popularRims } = useAppSelector((state: RootState) => state.rim);

  const [t] = useTranslation("home");
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        left: 0,
        right: 0,
      }}
    >
      <Box
        sx={{
          position: "relative",
          height: "100%",
          width: "100%",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 1)",
          }}
        />
        <Box
          sx={{
            backgroundImage:
              "url(https://img.freepik.com/premium-photo/black-tire-with-red-light-background_7023-3335.jpg?w=900)",
            opacity: "0.8",
            height: "100%",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            textAlign: "center",
            width: "100%",
            padding: "100px 0",
            position: "relative",
          }}
        >
          <Typography
            variant="h3"
            textTransform="uppercase"
            sx={{ color: "white", fontWeight: "bold" }}
          >
            {t("content.popularProducts")}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          paddingTop: 4,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <List
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            rowGap: 3,
            maxWidth: 1100,
            overflow: "hidden",
            "@media (max-width: 1200px)": {
              alignItems: "flex-start",
              display: "flex",
              flexDirection: "row",
              flexWrap: "nowrap",
              listStyle: "none",
              margin: "1rem 0",
              overflowX: "scroll",

              scrollbarWidth: "thin",

              padding: "0 0 0 1rem",
              gap: 3,
            },
          }}
        >
          {popularRims.map((rim) => {
            return (
              <li>
                <RimCard
                  isPopular={true}
                  image={rim.imageUrl}
                  price={rim.price}
                  rimWidth={rim.width}
                  color={rim.color}
                  name={rim.rimModel}
                  size={rim.sizeR}
                  rimId={rim.id}
                />
              </li>
            );
          })}
        </List>
      </Box>
      <Box
        sx={{
          margin: "50px",
        }}
      >
        <Button
          size="large"
          variant="contained"
          onClick={() => navigate("/rims")}
          sx={{
            backgroundColor: "#00A70D",
            "&:hover": { background: "#00DE11", boxShadow: "none" },
            borderRadius: 2,
            textTransform: "none",
            boxShadow: "none",
            padding: "10px 50px",
          }}
        >
          {t("buttons.showAll")}
        </Button>
      </Box>
    </Box>
  );
};

export default PopularProducts;

// voshm senc, erb vor cherez car ekav, gnum berum enq by - cary, u berum enq select exac filtrery(cari)
// hajordy ete menq filtr enq ogtagorcum, antesum enq mashni detalnery u ashxatacnum enq erkrord effecty,
//   aysinqn erkrordum petqa stugenq u mashni tvyalnerty hanenq, u not select enq dnum pcd u tenc banerin
