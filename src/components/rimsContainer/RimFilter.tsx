import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Box, Typography } from "@mui/material";

import { AppDispatch, RootState, useAppSelector } from "../../store";
import { getFiltersEffect } from "../../store/effects/filter/filter.effects";
import { getRimsByCarDetailsEffect } from "../../store/effects/rim/rim.effect";

import { useParamsHook, useParamsHookArrays } from "../../hook/useParams";
import { useShowRimsBy } from "../../hook/showRimsBy";

import RimFilterField from "./RimFilterField";

import "../../fonts/monsterrat.css";
import { useSearchParams } from "react-router-dom";


const RimFilter = () => {

  const dispatch: AppDispatch = useDispatch();
  const { filters } = useAppSelector((state: RootState) => state.filter)
  const { sizeR, pcd, centerBore } = filters
  const [searchParams] = useSearchParams();

  const { make: makeValue, model: modelValue, year: yearValue, modification: modificationValue, page: pageValue } = useParamsHook()

  const rimsRequestDetection = useShowRimsBy()

  const urlParamsArray = useParamsHookArrays(searchParams)

  useEffect(() => {

    if (rimsRequestDetection === 'by-rim') {

      dispatch(getFiltersEffect({ ...urlParamsArray, pagination: pageValue ? + pageValue : 0 }))
    } else {
      dispatch(getRimsByCarDetailsEffect(makeValue, modelValue, yearValue, modificationValue))
    }

    // dispatch(getFiltersEffect({ ...selectedFilters, pagination: pageValue ? +pageValue : 1 }))

  }, [dispatch, pageValue, searchParams])



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
        <RimFilterField list={sizeR} fieldType="Taille" name='sizeR' />
        <RimFilterField list={pcd} fieldType="Entraxe" name='pcd' />
        <RimFilterField list={centerBore} fieldType="Alésage" name='centerBore' />
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
