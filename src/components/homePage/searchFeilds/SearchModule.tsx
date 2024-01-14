import { Box, Button, Divider, styled } from "@mui/material";
import { useCallback, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { AppDispatch, RootState, useAppSelector } from "../../../store";
import {
  getCarsEffect,
  getModelsByCarEffect,
  getModificationsByCarEffect,
  getYearsByCarEffect,
} from "../../../store/effects/car/car.effects";
import Field from "./Field";

const SearchModule = () => {
  const dispatch: AppDispatch = useDispatch();

  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = useMemo(() => new URLSearchParams(location.search), [
    location.search,
  ]);

  const makeValue = queryParams.get("make") ?? undefined;
  const modelValue = queryParams.get("model") ?? undefined;
  const yearValue = queryParams.get("year") ?? undefined;
  const modificationValue = queryParams.get("modification") ?? undefined;

  const [t] = useTranslation("home");

  useEffect(() => {
    dispatch(getCarsEffect());
  }, [dispatch]);

  // need to optimize this part
  useEffect(() => {
    if (makeValue) {
      dispatch(getModelsByCarEffect(makeValue));
    }
    if (makeValue && modelValue) {
      dispatch(getYearsByCarEffect(makeValue, modelValue));
    }
    if (makeValue && modelValue && yearValue) {
      dispatch(getModificationsByCarEffect(makeValue, modelValue, yearValue));
    }
  }, [makeValue, modelValue, yearValue, dispatch]);

  const {
    CarTypeList,
    ModelList,
    YearList,
    ModificationList,
  } = useAppSelector((state: RootState) => state.car);

  const onSelect = useCallback(
    (fieldName: string, selectedElement: any) => {
      queryParams.set(fieldName.toLowerCase(), selectedElement);
      navigate(`${location.pathname}?${queryParams.toString()}`, {
        replace: true,
      });
    },
    [navigate, queryParams, location.pathname]
  );

  const CustomDivider = styled(Divider)({
    display: "inline",
    height: 25,
    margin: "auto 0",
  });

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Field list={CarTypeList} fieldType={"Make"} onSelect={onSelect} value={makeValue} />
      <CustomDivider orientation="vertical" flexItem />
      <Field list={ModelList} fieldType={"Model"} onSelect={onSelect} value={modelValue} />
      <CustomDivider orientation="vertical" flexItem />
      <Field list={YearList} fieldType={"Year"} onSelect={onSelect} value={yearValue} />
      <CustomDivider orientation="vertical" flexItem />
      <Field
        list={ModificationList}
        fieldType={"Modification"}
        onSelect={onSelect}
        value={modificationValue}
      />
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
        onClick={() => { navigate(`/rims?make=${makeValue}&model=${modelValue}&year=${yearValue}&modification=${modificationValue}`) }}
      >
        {t("buttons.research")}
      </Button>
    </Box>
  );
};

export default SearchModule;
