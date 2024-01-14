import { Box, Typography } from "@mui/material";

import FilterField from "./FilterField";

import "../../fonts/monsterrat.css";
import { AppDispatch, RootState, useAppSelector } from "../../store";
import { useDispatch } from "react-redux";
import { getFiltersEffect } from "../../store/effects/filter/filter.effects";
import { useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

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



const RimFilter = () => {

  const { filters, selectedFilters } = useAppSelector((state: RootState) => state.filter)
  const dispatch: AppDispatch = useDispatch();
  const location = useLocation();

  const queryParams = useMemo(() => new URLSearchParams(location.search), [
    location.search,
  ]);
  const pageValue = queryParams.get("page") ?? undefined;


  const { sizeR, pcd, centerBore, studHoles } = filters


  useEffect(() => {
    const sizeRValues = queryParams.getAll('sizeR').map(Number);

    const test = {
      centerBore: [],
      pcd: [],
      sizeR: sizeRValues,
      studHoles: [],
    }

    dispatch(getFiltersEffect({ ...test, pagination: pageValue ? +pageValue : 0 }))
    // dispatch(getFiltersEffect({ ...selectedFilters, pagination: pageValue ? +pageValue : 1 }))

  }, [dispatch, queryParams, pageValue])

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: 280,
        minWidth: 280,
        margin: "20px 10px",
        padding: 1,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center", marginBottom: 1 }}>
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 28,
            letterSpacing: 3,
            textTransform: "uppercase",
          }}
        >
          Filtres
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px 0",
          rowGap: 1,
          borderRadius: 10,
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 0px 20px 0px, rgba(0, 0, 0, 0.3) 0px 0px 20px 0px",
        }}
      >
        {/* Size */}
        <FilterField list={sizeR} fieldType="Taille" name='sizeR' />
        {/* Center distance */}
        {/* <FilterField list={pcd} fieldType="Entraxe" /> */}
        {/* Bore */}
        {/* <FilterField list={sizeList} fieldType="Alésage" /> */}
        {/* Width */}
        {/* <FilterField list={sizeList} fieldType="Largeur" /> */}
        {/* ET offset */}
        {/* <FilterField list={sizeList} fieldType="Déport ET" /> */}
        {/* Color */}
        {/* <FilterField list={sizeList} fieldType="Couleur" /> */}
        {/* <FilterField list={sizeList} fieldType="Style" /> */}
      </Box>
    </Box>
  );
};

export default RimFilter;
