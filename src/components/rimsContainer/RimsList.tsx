import { Box, List } from "@mui/material";

import { RootState, useAppSelector } from "../../store";
import RimListCard from "./RImListCard";

const RimsList = () => {
  const { rimList } = useAppSelector((state: RootState) => state.rim);

  return (
    <Box>
      <Box sx={{ margin: "30px 10px" }}>
        <List
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
            justifyContent: "center",

            "@media(max-width: 1000px)": {
              gap: 1,
            },
          }}
        >
          {rimList.map((rim: any) => {
            return (
              <li>
                <RimListCard
                  image={rim.imageUrl}
                  price={rim.price}
                  rimWidth={100}
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
    </Box>
  );
};

export default RimsList;
