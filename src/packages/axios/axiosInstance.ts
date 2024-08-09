import axios, { AxiosError, AxiosResponse } from "axios";
import { ErrorResponse, Response } from "./types";
import { REQUEST_TIMEOUT } from "../constants/axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  timeout: REQUEST_TIMEOUT,
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

let refreshTokenPromise: null | Promise<any> = null;
axiosInstance.interceptors.response.use(
  <T>(response: AxiosResponse<Response<T>>): AxiosResponse<Response<T>> => {
    return { ...response, data: response.data };
  },
  async (error: AxiosError<ErrorResponse>) => {
    // const originalRequest = error.config;
    // if (error.response.status !== 401 || originalRequest._retry) {
    //   return Promise.reject(error.response);
    // }
    // originalRequest._retry = true;
    // if (!refreshTokenPromise) {
    //   refreshTokenPromise = refreshToken().finally(() => {
    //     refreshTokenPromise = null;
    //   });
    // }

    // try {
    //   await refreshTokenPromise;
    //   return axiosInstance(originalRequest);
    // } catch (refreshError) {
    //   return Promise.reject(refreshError);
    // }
    return Promise.reject(error.response);
  },
);

const refreshToken = async () => {
  try {
    const response = await axios.post(
      "/auth/refresh",
      {},
      { withCredentials: true },
    );
    return response.data.access_token;
  } catch (error) {
    throw error;
  }
};

export { axiosInstance };
