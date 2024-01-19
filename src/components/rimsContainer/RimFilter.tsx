import { useEffect, useMemo } from "react";
import { Box, Typography } from "@mui/material";

import FilterField from "./FilterField";

import "../../fonts/monsterrat.css";
import { AppDispatch, RootState, useAppSelector } from "../../store";
import { useDispatch } from "react-redux";
import { getFiltersEffect } from "../../store/effects/filter/filter.effects";
import { getWheelsListByCarDateEffect } from "../../store/effects/rim/rim.effect";
import { useParamsHook } from "../../hook/useParams";
import { useShowRimsBy } from "../../hook/showRimsBy";
import { useLocation } from "react-router-dom";

const RimFilter = () => {

  const dispatch: AppDispatch = useDispatch();
  const { filters } = useAppSelector((state: RootState) => state.filter)
  const { sizeR } = filters

  const { make: makeValue, model: modelValue, year: yearValue, modification: modificationValue, page: pageValue } = useParamsHook()

  const rimsRequestDetection = useShowRimsBy()
  const location = useLocation();

  const queryParams = useMemo(() => new URLSearchParams(location.search), [
    location.search,
  ]);

  useEffect(() => {
    const sizeRValues = queryParams.getAll('sizeR').map(Number);

    const test = {
      centerBore: [],
      pcd: [],
      sizeR: sizeRValues,
      studHoles: [],
    }

    if (rimsRequestDetection === 'by-rim') {

      dispatch(getFiltersEffect({ ...test, pagination: pageValue ? + pageValue : 0 }))
    } else {
      dispatch(getWheelsListByCarDateEffect(makeValue, modelValue, yearValue, modificationValue))
    }

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
