import Carousel from "react-material-ui-carousel";
import CarouselItem from "./CarouselItem";
import { Button, styled } from "@mui/material";

const CustomButton = styled(Button)(() => ({
  color: "gold",
  background: "white",
  borderRadius: 0,
  padding: "10px 30px",
}));

function HomeCarousel() {
  const items = [
    {
      id: 1,
      image:
        "https://wheelart.fr/cdn/shop/files/Jantesalu3.jpg?v=1681992593&width=2000",
      text: (
        <>
          <h2>Bienvenue chez Wheel Art</h2>
          <p>
            Une multitude de jantes alu, pour une multitude de véhicules.
            Agressivité, Stabilité et Élégance, faites de ces 3 mots votre
            devise.
          </p>
        </>
      ),
    },
    {
      id: 2,
      image:
        "https://wheelart.fr/cdn/shop/files/Jantesalu1.jpg?v=1681992601&width=2000",
      text: (
        <>
          <h2>Jantes Alu</h2>
          <p>Un choix multiple de jantes</p>
          <CustomButton>Cliquez ici</CustomButton>
        </>
      ),
    },
    {
      id: 3,
      image:
        "https://wheelart.fr/cdn/shop/files/Jantesalu2.jpg?v=1681992598&width=2000",
      text: (
        <>
          <h2>Accessoires</h2>
          <p>Retrouvez tous nos accessoires</p>
          <CustomButton>Découvrir ici</CustomButton>
        </>
      ),
    },
  ];

  return (
    <Carousel sx={{ width: "100%" }}>
      {items.map((item) => (
        <CarouselItem key={item.id} item={item} />
      ))}
    </Carousel>
  );
}

export default HomeCarousel;
