import { Box, Button, List } from "@mui/material";
import ProductCard from "./ProductCard";


type WheelListType = {
  image: string,
  info: string,
  price: string,
}
interface ProductsProps {
  wheelList: WheelListType[]
}

const Products = ({ wheelList }: ProductsProps) => {


  return (
    <>
      <h2>Retrouvez nos produits les plus populaires ci-dessous</h2>
      <Box>
        <List
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            rowGap: 3,

            "@media (max-width: 1090px)": {
              alignItems: "flex-start",
              display: "flex",
              flexWrap: "nowrap",
              listStyle: "none",
              margin: "1rem 0",
              overflowX: "scroll",
              padding: "0 0 0 1rem",
              gap: 3,
            },
          }}
        >
          {wheelList?.map((wheel) => {
            return (
              <li>
                <ProductCard
                  image={wheel.image}
                  info={wheel.info}
                  price={wheel.price}
                />
              </li>
            );
          })}
        </List>
      </Box>
      <Box
        sx={{
          margin: "50px",
          textAlign: "center",
        }}
      >
        <Button
          size="large"
          variant="contained"
          sx={{
            backgroundColor: "black",
            "&:hover": { background: "grey" },
            borderRadius: 1,
            textTransform: "none",
          }}
        >
          Tout afficher
        </Button>
      </Box>
    </>
  );
};

export default Products;
