import { Box, Button, Typography } from "@mui/material";

import BlogCard from "./BlogCard";

import "../../../fonts/monsterrat.css";
import { useTranslation } from "react-i18next";

const blogs = [
  {
    image:
      "https://wheelart.fr/cdn/shop/articles/grossiste-pneus.jpg?v=1691422755&width=1500",
    title: "Quelle marque de pneus choisir?",
  },
  {
    image:
      "https://wheelart.fr/cdn/shop/articles/iStock-876832210.jpg?v=1687439498&width=1500",
    title: "Tout ce que vous devez savoir sur la géométrie...",
  },
  {
    image:
      "https://wheelart.fr/cdn/shop/articles/cover-r4x3w1200-5dde68f3af019-dsc-0233-jpg.jpg?v=1686737676",
    title: "Les BMW XDrive, qu'ont-elles de particuliers?",
  },
];

const HomeBlogs = () => {
  const [t] = useTranslation("home")

  return (
    <Box sx={{ padding: "50px 100px" }}>
      <Typography
        variant="h2"
        sx={{
          fontFamily: "'Montserrat', sans-serif",
          textAlign: "center",
        }}
      >
        {t("ourBlog.header")}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "30px 0",
        }}
      >
        {blogs.map((blog, index) => (
          <span key={index}>
            <BlogCard image={blog.image} title={blog.title} />
          </span>
        ))}
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", margin: "50px" }}>
        <Button
          size="large"
          variant="contained"
          sx={{
            backgroundColor: "#ffaa00",
            boxShadow: "none",
            "&:hover": { background: "#a17f1a", boxShadow: "none" },
            borderRadius: 2,
            textTransform: "none",
            padding: "10px 50px",
          }}
        >
          {t("buttons.learnMore")}
        </Button>
      </Box>
    </Box>
  );
};

export default HomeBlogs;
