import styled from "@emotion/styled";
import { Box, Link, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

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
  const [t] = useTranslation("home")

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
          {t("about.header")}
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
            {t("about.firstBlog.1")}
            <Link
              href="https://www.google.fr/maps/place/WHEEL+ART/@48.6443899,2.3828517,15z/data=!4m5!3m4!1s0x47e5dfd96d8cbab9:0x9858f8dcde05b066!8m2!3d48.6474422!4d2.379192"
              sx={{
                textDecoration: "underline",
                color: "white",
                "&:hover": { color: "grey" },
              }}
            >
              {t("about.firstBlog.link")}
            </Link>
            {t("about.firstBlog.2")}
          </CustomTypo>
        </TypoWrapper>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <TypoWrapper>
          <CustomTypo>
            {t("about.secondBlog")}
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
            {t("about.threeBlog")}
          </CustomTypo>
        </TypoWrapper>
      </Box>
    </Box>
  );
};

export default About;
