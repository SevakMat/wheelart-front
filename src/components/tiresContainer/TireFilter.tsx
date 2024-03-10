import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Box, Typography } from "@mui/material";
import { AppDispatch, RootState, useAppSelector } from "../../store";
import {  getTireFiltersEffect } from "../../store/effects/filter/filter.effects";
import { useParamsHook, useParamsHookArrays } from "../../hook/useParams";
import TireFilterField from "./TireFilterField";

import "../../fonts/monsterrat.css";

const TireFilter = () => {

  const dispatch: AppDispatch = useDispatch();
  const { tireFilters } = useAppSelector((state: RootState) => state.filter);
  const { marka, rimDiameter, stock, tireAspectRatio, tireWidth } = tireFilters;
  const [searchParams] = useSearchParams();

  const { page: pageValue } = useParamsHook();

  const urlParamsArray = useParamsHookArrays(searchParams);

  useEffect(() => {
    dispatch(
      getTireFiltersEffect({
        ...urlParamsArray,
        pagination: pageValue ? +pageValue : 0,
      })
    );

  }, [dispatch, pageValue, searchParams]);

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
        <TireFilterField list={tireWidth} fieldType="Size" name="tireWidth" />
        <TireFilterField list={marka} fieldType="Make" name="marka" />
        <TireFilterField
          list={tireAspectRatio}
          fieldType="Aspect Ratio"
          name="tireAspectRatio"
        />
        <TireFilterField list={rimDiameter} fieldType="Diameter" name="rimDiameter" />
        <TireFilterField list={stock} fieldType="stock" name="stock" />
      </Box>
    </Box>
  );
};

export default TireFilter;
