import { Box, List } from "@mui/material";

import RimCard from "../shere/rims/RimCard";
import { RootState, useAppSelector } from "../../store";

const RimsList = () => {

  const { wheelList } = useAppSelector((state: RootState) => state.wheel)

  return (
    <Box>
      <Box sx={{ margin: "30px 10px" }}>
        <List
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
          }}
        >
          {wheelList.map((rim) => {
            return (
              <li>
                <RimCard
                  isPopular={false}
                  image={rim.imageUrl}
                  price={rim.price}
                  rimWidth={100}
                  color="Grey"
                  name={rim.rimModel}
                  size={rim.sizeR}
                  rimId={rim.id}

                />
              </li>
            );
          })}
        </List>
      </Box>
    </Box>
  );
};

export default RimsList;
