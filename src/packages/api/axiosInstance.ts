import axios, { AxiosResponse } from "axios";

export interface Response<T = any> {
  data: T;
  message?: string;
  status: number;
}

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  <T>(response: AxiosResponse<Response<T>>): AxiosResponse<Response<T>> => {
    return { ...response, data: response.data };
  },
  async (error) => {}
);

export { axiosInstance };
