import axios, { AxiosResponse } from "axios";
import { Response } from "./types";
import { REQUEST_TIMEOUT } from "../constants/axios";

const axiosInstance = axios.create({
  // baseURL: process.env.NEXT_PUBLIC_API_URL,
  baseURL: "https://jsonplaceholder.typicode.com",
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
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status !== 401 || originalRequest._retry) {
      return Promise.reject(error);
    }
    originalRequest._retry = true;
    if (!refreshTokenPromise) {
      refreshTokenPromise = refreshToken().finally(() => {
        refreshTokenPromise = null;
      });
    }

    try {
      await refreshTokenPromise;
      return axiosInstance(originalRequest);
    } catch (refreshError) {
      return Promise.reject(refreshError);
    }
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
