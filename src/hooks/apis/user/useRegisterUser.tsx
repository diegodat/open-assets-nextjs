import { HttpClient } from "@/packages/axios/httpClient";
import { validateResponse } from "@/packages/utils/zod/validateResponse";
import { UserResponseSchema } from "@/schemas/user";
import { useMutation } from "@tanstack/react-query";

const validateUser = validateResponse(UserResponseSchema);

export const registerUser = async (requestParameters: any) => {
  const response = await HttpClient.post<unknown>(
    "/auth/register",
    requestParameters,
    {
      withCredentials: true,
    }
  );
  validateUser(response.data);
  return response.data;
};

export const useRegisterUser = () => {
  return useMutation({
    mutationFn: registerUser,
  });
};
