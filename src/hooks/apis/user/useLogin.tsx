import { HttpClient } from '@/packages/axios/httpClient';
import { validateResponse } from '@/packages/utils/zod/validateResponse';
import { LoginResponseSchema } from '@/schemas/auth';
import { LoginParameters, LoginResponse } from '@/schemas/auth/types';
import { useMutation } from '@tanstack/react-query';

const validateLoginResponse = validateResponse(LoginResponseSchema);

export const login = async (requestParameters: LoginParameters) => {
  // const response = await HttpClient.post<LoginResponse>(
  //   "/auth/login",
  //   requestParameters,
  //   {
  //     withCredentials: true,
  //   }
  // );
  // const data = validateLoginResponse(response.data);
  // return data;
  // try {
  const response = await HttpClient.get('/users/1');
  const data = validateLoginResponse(response.data);
  return data;
};

export const useLogin = () => {
  return useMutation({
    mutationFn: login,
  });
};
