import { Box, Button, Link, Typography } from "@mui/material";

import "../../fonts/monsterrat.css";

const blogs = [
  {
    image:
      "https://wheelart.fr/cdn/shop/articles/grossiste-pneus.jpg?v=1691422755&width=1500",
    info: "Au sein de cet article nous parlerons des différentes marques de pneu, leurs avantages, leurs coûts…",
  },
  {
    image:
      "https://wheelart.fr/cdn/shop/articles/iStock-876832210.jpg?v=1687439498&width=1500",
    info: "Dans cet article, nous allons explorer l'importance d'un alignement précis des roues, comprendre les effets négatifs d'un désalignement et découvrir comment le parallélisme et la géométrie des roues peuvent améliorer la performance de votre véhicule.",
  },
  {
    image:
      "https://wheelart.fr/cdn/shop/articles/cover-r4x3w1200-5dde68f3af019-dsc-0233-jpg.jpg?v=1686737676",
    info: "Dans cet article, nous plongerons dans le monde de XDrive, en explorant son fonctionnement, ses avantages et la manière dont il a redéfini la conduite sur route et hors route.",
  },
];

const BlogCards = () => {
  return (
    <Box sx={{ padding: "50px 100px" }}>
      <Typography
        variant="h2"
        sx={{
          fontFamily: "'Montserrat', sans-serif",
          textAlign: "center",
        }}
      >
        Notre blog
      </Typography>

      <Button
        size="large"
        variant="contained"
        sx={{
          backgroundColor: "#ffaa00",
          "&:hover": { background: "#a17f1a" },
          borderRadius: 1,
          textTransform: "none",
        }}
      >
        Tout afficher
      </Button>
    </Box>
  );
};

export default BlogCards;
