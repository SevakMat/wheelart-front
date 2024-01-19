import { Box, Button, Divider, styled } from "@mui/material";
import { useCallback, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { AppDispatch, RootState, useAppSelector } from "../../../store";
import {
  getCarsEffect, getCarDetailsEffect,
} from "../../../store/effects/car/car.effects";
import Field from "./Field";

const SearchCars = () => {
  const dispatch: AppDispatch = useDispatch();

  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = useMemo(() => new URLSearchParams(location.search), [
    location.search,
  ]);

  const make = queryParams.get("make") ?? undefined;
  const model = queryParams.get("model") ?? undefined;
  const year = queryParams.get("year") ?? undefined;
  const modification = queryParams.get("modification") ?? undefined;

  const [t] = useTranslation("home");

  useEffect(() => {
    dispatch(getCarsEffect());
  }, [dispatch]);

  useEffect(() => {
    if (make && model && year) {
      dispatch(getCarDetailsEffect(make, model, year));
    }
    else if (make && model) {
      dispatch(getCarDetailsEffect(make, model));
    }
    else if (make) {
      dispatch(getCarDetailsEffect(make));
    }
    else {
      console.log(123456);
    }
  }, [make, model, year, dispatch]);

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
      <Field list={CarTypeList} fieldType={"Make"} onSelect={onSelect} value={make} />
      <CustomDivider orientation="vertical" flexItem />
      <Field list={ModelList} fieldType={"Model"} onSelect={onSelect} value={model} />
      <CustomDivider orientation="vertical" flexItem />
      <Field list={YearList} fieldType={"Year"} onSelect={onSelect} value={year} />
      <CustomDivider orientation="vertical" flexItem />
      <Field
        list={ModificationList}
        fieldType={"Modification"}
        onSelect={onSelect}
        value={modification}
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
        onClick={() => { navigate(`/rims?make=${make}&model=${model}&year=${year}&modification=${modification}`) }}
      >
        {t("buttons.research")}
      </Button>
    </Box>
  );
};

export default SearchCars;
