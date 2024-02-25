import { Box, List } from "@mui/material";

import { RootState, useAppSelector } from "../../store";
import TireListCard from "./TireListCard";
import { TireType } from "../../store/types/tire/tire";

const TiresList = () => {

  const { tireList } = useAppSelector((state: RootState) => state.tire)
  
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
          {tireList.map((tire: TireType, index:number) => {
            return (
              <li key={index} >
                <TireListCard
                  image={tire.imageUrl}
                  price={100}
                  tireWidth={tire.tireWidth}
                  marka={tire.marka}
                  tireAspectRatio={tire.tireAspectRatio}
                  tireDiameter={tire.rimDiameter}
                  tireId={tire.id}
                  color={"tire."}
                />
              </li>
            );
          })}
        </List>
      </Box>
    </Box>
  );
};

export default TiresList;
