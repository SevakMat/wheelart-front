import { Box, Typography } from "@mui/material";
import PaginationBlock from "../shere/pagination/PaginationBlock";
import AccsList from "./AccsList";
import AccsFilter from "./AccsFilter";

const AccsContainer = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage:
            "url(https://img.freepik.com/free-photo/man-fixing-wheel-bolts_23-2148321924.jpg?w=900&t=st=1706954930~exp=1706955530~hmac=8eaf37cc05743b7aa465c28e559c9faeeab9c506cc0fa62a8fbcfef3793f53ac)",

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
          Accessoires
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
          <AccsFilter />
          <AccsList />
        </Box>
        <Box sx={{ paddingLeft: 40, marginBottom: 5 }}>
          <PaginationBlock />
        </Box>
      </Box>
    </Box>
  );
};

export default AccsContainer;
