import { Box, Button, List } from "@mui/material";
import { TireType } from "../../../store/types/tire/tire";
import TyreCard from "./TireCard";

interface TyresListProps {
  tiresList: TireType[]
}

const TiresContent = ({ tiresList }: TyresListProps) => {

  return (
    <>
      <h2>Tires !!!</h2>
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
          {tiresList?.map((tire: TireType, index: number) => {
            return (
              <li>
                <TyreCard
                  tire={tire}
                />
              </li>
            );
          })}
        </List>
      </Box>

    </>
  );
};

export default TiresContent;