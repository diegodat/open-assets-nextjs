import { HttpClient } from "@/packages/axios/httpClient";
import { QueryKeys } from "@/packages/constants/query/queryKeys";
import { validateResponse } from "@/packages/utils/zod/validateResponse";
import { UserResponseSchema } from "@/schemas/user";
import { useQuery } from "@tanstack/react-query";

const validateUser = validateResponse(UserResponseSchema);

export const fetchMe = async () => {
  const response = await HttpClient.get<unknown>("/users/1", {
    withCredentials: true,
  });
  validateUser(response.data);
  return response.data;
};

export const useMeQuery = () => {
  return useQuery({
    queryKey: [QueryKeys.Me],
    queryFn: fetchMe,
  });
};
