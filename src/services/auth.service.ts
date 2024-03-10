import axios from "../config/axios"

import { LoginData, RefreshToken, SignInData } from "./types"

export const loginRequest = async (loginData: LoginData): Promise<any> => {
    return axios.post("api/auth/login", { ...loginData })
}
export const logOutRequest = async (): Promise<any> => {
    return axios.post("api/auth/logout", {})
}

export const SignUpRequest = async (signInData: SignInData): Promise<any> => {
    return axios.post("api/auth/register", { ...signInData })
}

export const SignInByRefreshTocenRequest = async (refreshToken: RefreshToken): Promise<any> => {
    return axios.post("api/v1/auth/sign-in-by-refresh-token", { ...refreshToken })
}

