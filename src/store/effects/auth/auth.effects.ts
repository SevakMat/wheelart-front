import { NavigateFunction } from "react-router-dom";
import { toast } from "react-toastify";
import { AppDispatch } from "../..";
import {
  loginRequest,
  logOutRequest,
  SignUpRequest,
  UpdatedUserInfoRequest,
} from "../../../services/auth.service";
import { LoginData, SignInData } from "../../../services/types";
import {
  loginRequestSuccess,
  logOutRequestSuccess,
  registerRequestSuccess,
  setLoading,
} from "../../actions/auth/auth.actions";

export const loginEffect = (
  loginData: LoginData,
  navigate: NavigateFunction
): any => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoadingEffect(true));
      // Get user
      const result = await loginRequest(loginData);
      const {
        data: { access_token, user },
      } = result;

      await localStorage.setItem("accessToken", access_token);
      dispatch(loginRequestSuccess(user));

      toast.success("Successfully logged in");
      navigate("/home");

      dispatch(setLoadingEffect(false));
    } catch (error: any) {
      dispatch(setLoadingEffect(false));
      toast.error("Logined faild");
    } finally {
      dispatch(setLoadingEffect(false));
    }
  };
};
export const setLoadingEffect = (loading: boolean): any => {
  return async (dispatch: AppDispatch) => {
    dispatch(setLoading(loading));
  };
};

export const logOutEffect = (): any => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoadingEffect(true));
      // Get user
      await logOutRequest();

      await localStorage.clear();

      dispatch(logOutRequestSuccess());

      toast.success("Successfully logout");
      // navigate("/login");
      dispatch(setLoadingEffect(false));
    } catch (error: any) {
      dispatch(setLoadingEffect(false));
      toast.error("Logaut faild");
    } finally {
      dispatch(setLoadingEffect(false));
    }
  };
};
export const signUpEffect = (
  signInData: SignInData,
  navigate: NavigateFunction
): any => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoadingEffect(true));
      // Get user
      const user = await SignUpRequest(signInData);

      registerRequestSuccess(user);

      toast.success("Successfully sign Up");
      navigate("/home");

      dispatch(setLoadingEffect(false));
    } catch (error: any) {
      dispatch(setLoadingEffect(false));
      toast.error("Logined faild");
    } finally {
      dispatch(setLoadingEffect(false));
    }
  };
};

export const updateUserInfoEffect = (updatedUserInfo: any): any => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoadingEffect(true));
      // Get user
      const user = await UpdatedUserInfoRequest(updatedUserInfo);

      // registerRequestSuccess(user);

      toast.success("Updated successfully");

      dispatch(setLoadingEffect(false));
    } catch (error: any) {
      dispatch(setLoadingEffect(false));
      toast.error("Failed to update");
    } finally {
      dispatch(setLoadingEffect(false));
    }
  };
};
