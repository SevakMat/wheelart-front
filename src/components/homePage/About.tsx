import styled from "@emotion/styled";
import { Box, Link, Typography } from "@mui/material";

import "../../fonts/monsterrat.css";
// import HomeAbout from "../../images/HomeAbout.jpg";

const TypoWrapper = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  maxWidth: 600,
  paddingRight: 10,
}));

const CustomTypo = styled(Typography)(() => ({
  fontFamily: "'Montserrat', sans-serif",
  lineHeight: 2.5,
  color: "white",
}));

const About = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "50px 100px",
        rowGap: 5,
        background: "black",

        // background:
        //   "linear-gradient(90deg, rgba(184,166,166,0.35) 0%, rgba(182,143,143,0.55) 50%, rgba(186,122,122,0.7457107843137255) 100%)",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center", color: "white" }}>
        <Typography
          variant="h2"
          sx={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Qui Sommes Nous
        </Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Box
            component="img"
            src="https://img.freepik.com/free-photo/front-view-beautiful-mechanic-woman-shop_23-2148327556.jpg?w=360&t=st=1704361712~exp=1704362312~hmac=83008d1ec1bd5475ced30cc43b82e3a57853a2e74da31123516fd9d1d843fec7"
            sx={{
              height: 300,
              width: 250,
              objectFit: "cover",
              boxShadow:
                "rgba(255, 255, 255, 0.3) 0px 0px 300px -20px, rgba(255, 255, 255, 0.3) 0px 10px 500px -30px",
              borderRadius: 10,
            }}
          />
        </Box>

        <TypoWrapper>
          <CustomTypo>
            Bienvenue sur WHEELART.FR, où la passion pour l'automobile rencontre
            l'expertise technique! Établie à{" "}
            <Link
              href="https://www.google.fr/maps/place/WHEEL+ART/@48.6443899,2.3828517,15z/data=!4m5!3m4!1s0x47e5dfd96d8cbab9:0x9858f8dcde05b066!8m2!3d48.6474422!4d2.379192"
              sx={{
                textDecoration: "underline",
                color: "white",
                "&:hover": { color: "grey" },
              }}
            >
              Grigny
            </Link>{" "}
            (Essonne) depuis 2020, notre équipe répond à la demande croissante
            de jantes en aluminium en Île-de-France. Nous nous engageons à
            offrir une expérience d'achat personnalisée, rapide et efficace,
            proposant une gamme complète de pneus de qualité pour différents
            styles de conduite.
          </CustomTypo>
        </TypoWrapper>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <TypoWrapper>
          <CustomTypo>
            Avec une forte culture automobile et une vaste expérience
            commerciale, nous fournissons des produits et des services avec le
            meilleur rapport qualité/prix. Découvrez différentes tailles de
            jantes (de 17 à 22 pouces) et une variété de couleurs pour
            correspondre à vos préférences. Pour des demandes spécifiques,
            contactez-nous directement par téléphone ou via la section
            "contact".
          </CustomTypo>
        </TypoWrapper>

        <Box>
          <Box
            component="img"
            src="https://img.freepik.com/premium-photo/set-mounting-adjustment-tools-car-wheel_519304-164.jpg?w=360"
            sx={{
              height: 300,
              width: 250,
              objectFit: "cover",
              boxShadow:
                "rgba(255, 255, 255, 0.3) 0px 0px 300px -20px, rgba(255, 255, 255, 0.3) 0px 10px 500px -30px",
              borderRadius: 10,
            }}
          />
        </Box>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Box
            component="img"
            src="https://img.freepik.com/premium-photo/closeup-alloy-max-wheel_53876-142191.jpg?w=360"
            sx={{
              height: 300,
              width: 250,
              objectFit: "cover",
              boxShadow:
                "rgba(255, 255, 255, 0.3) 0px 0px 300px -20px, rgba(255, 255, 255, 0.3) 0px 10px 500px -30px",
              borderRadius: 10,
            }}
          />
        </Box>
        <TypoWrapper>
          <CustomTypo>
            Visitez notre salle d'exposition pour une expérience sans couture, y
            compris des services d'assemblage. Achetez des produits et effectuez
            l'assemblage et l'équilibrage sur place. Pour s'adapter à tous les
            budgets, nous proposons des facilités de paiement en 3 ou 4 fois.
            <br />
            L'équipe Wheel Art a hâte de vous accueillir!
          </CustomTypo>
        </TypoWrapper>
      </Box>
    </Box>
  );
};

export default About;
