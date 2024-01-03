import { Box, Button, List } from "@mui/material";
import { WheelType } from "../../../store/types/wheel/wheel";
import WheelCard from "./WheelCard";

interface ProductsProps {
  wheelList: WheelType[]
}

const WheelsContent = ({ wheelList }: ProductsProps) => {

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
          {wheelList?.map((wheel: WheelType, index: number) => {
            return (
              <li>
                <WheelCard
                  wheel={wheel}
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

export default WheelsContent;