import { CardMedia } from "@mui/material";
import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { useLocation, useParams } from 'react-router-dom';
import { SHA1 } from 'crypto-js';

import { AppDispatch, RootState, useAppSelector } from "../../store";
import { getWheelEffect } from "../../store/effects/wheel/wheel.effect";
import TiresContent from "../shere/tires/TiresContent";

const WheelContainer = () => {
  const dispatch: AppDispatch = useDispatch();
  const { id } = useParams();


  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const makeValue = queryParams.get("make");
  const modelValue = queryParams.get("model");
  const yearValue = queryParams.get("year");
  const modificationValue = queryParams.get("modification");


  const { wheel } = useAppSelector((state: RootState) => state.wheel);
  const { tireList } = useAppSelector((state: RootState) => state.tire);


  useEffect(() => {
    dispatch(getWheelEffect(id, makeValue, modelValue, yearValue, modificationValue));
  }, []);

  return (
    <div>
      <div>
        price-{wheel?.price}
        centerBore-{wheel?.centerBore}
        pcd- {wheel?.pcd}
        sizeR-{wheel?.sizeR}
        studHoles-{wheel?.studHoles}
        rimModel-{wheel?.rimModel}
        <CardMedia
          component="img"
          sx={{
            width: wheel?.price === "" ? "100%" : "250px",
            height: wheel?.price === "" ? "200px" : "250px",
            objectFit: wheel?.price === "" ? "cover" : "contain",
            marginLeft: "auto",
            marginRight: "auto",

            "@media (max-width: 1090px)": {
              width: "180px",
              height: "180px",
              marginLeft: "auto",
              marginRight: "auto",
              objectFit: "cover",
            },
          }}
          image={wheel?.imageUrl}
        />
      </div>
      {tireList?.length > 0 && <TiresContent tiresList={tireList} />}

    </div>
  )
}

export default WheelContainer