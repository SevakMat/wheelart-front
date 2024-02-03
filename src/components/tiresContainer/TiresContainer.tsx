import { Box, Typography } from "@mui/material";
import PaginationBlock from "../shere/pagination/PaginationBlock";
import TiresList from "./TiresList";
import TireFilter from "./TireFilter";

const TiresContainer = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage:
            "url(https://img.freepik.com/premium-photo/auto-repair-tires-sale_118124-97488.jpg?w=1060)",

          height: "100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          textAlign: "center",
          width: "100%",
          padding: "80px 0",
        }}
      >
        <Typography
          variant="h3"
          textTransform="uppercase"
          sx={{
            color: "white",
            fontWeight: "bold",
            textAlign: "left",
            paddingLeft: 15,
            letterSpacing: 30,
            fontFamily: "'Montserrat', sans-serif",
          }}
        >
          Pneus
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <TireFilter />
          <TiresList />
        </Box>
        <Box sx={{ paddingLeft: 40, marginBottom: 5 }}>
          <PaginationBlock />
        </Box>
      </Box>
    </Box>
  );
};

export default TiresContainer;
