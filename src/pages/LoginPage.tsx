import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../components/login/login";
import { RootState, useAppSelector } from "../store";
import MainContainer from "../hok/mainContainer/MainContainer";

const LoginPage = (): JSX.Element => {
  return (
    <MainContainer>
      <Login />
    </MainContainer>
  );
};
export default LoginPage;
