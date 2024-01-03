import { Box, Button, Divider, styled } from "@mui/material";
import Field from "./Field";

const SearchModule = () => {
  const carList = [
    { name: "Bmw", image: "asdasdasdasd" },
    { name: "Mercedes", image: "asdasdasdasd" },
    { name: "Opel", image: "asdasdasdasd" },
  ];

  const modelList = [
    { name: "Series3", image: "asdasdasdasd" },
    { name: "Series5", image: "asdasdasdasd" },
    { name: "Series7", image: "asdasdasdasd" },
  ];

  const typeList = [
    { name: "E93", image: "asdasdasdasd" },
    { name: "E60", image: "asdasdasdasd" },
    { name: "E36", image: "asdasdasdasd" },
  ];

  const sizeList = [
    { name: "R16", image: "asdasdasdasd" },
    { name: "R17", image: "asdasdasdasd" },
    { name: "R18", image: "asdasdasdasd" },
  ];

  const CutsomDivider = styled(Divider)({
    display: "inline",
    height: 25,
    margin: "auto 0",
  });

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Field list={carList} fieldType="Marque" />
      <CutsomDivider orientation="vertical" flexItem />
      <Field list={modelList} fieldType="Modèle" />
      <CutsomDivider orientation="vertical" flexItem />
      <Field list={typeList} fieldType="Type" />
      <CutsomDivider orientation="vertical" flexItem />
      <Field list={sizeList} fieldType="Motorization" />
      <Button
        sx={{
          borderRadius: 20,
          background: "black",
          color: "white",
          padding: 1,

          "&:hover": {
            bgcolor: "#8b0000",
          },
        }}
      >
        Recherche
      </Button>
    </Box>
  );
};

export default SearchModule;
