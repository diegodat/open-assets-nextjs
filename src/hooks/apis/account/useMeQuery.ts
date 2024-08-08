import { HttpClient } from "@/packages/api/httpClient";
import { QueryKeys } from "@/packages/constants/queryKeys";
import { useQuery } from "@tanstack/react-query";

export const fetchMe = async () => {
  const response = await HttpClient.get<unknown>("/users/1", {
    withCredentials: true,
  });
  return response.data;
};

export const useMeQuery = () => {
  return useQuery({
    queryKey: [QueryKeys.Me],
    queryFn: fetchMe,
  });
};
