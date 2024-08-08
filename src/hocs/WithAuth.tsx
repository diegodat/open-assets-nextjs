import { HttpClient } from "@/packages/axios/httpClient";
import { JwtCookieToken } from "@/packages/constants/auth";
import { QueryKeys } from "@/packages/constants/query/queryKeys";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { cookies } from "next/headers";
import { FC, PropsWithChildren } from "react";

export const WithAuth: FC<PropsWithChildren> = async (props) => {
  const queryClient = new QueryClient();

  const fetchMe = async () => {
    const response = await HttpClient.get<unknown>("/users/1", {
      headers: {
        Cookie: `${JwtCookieToken}=${cookies().get(JwtCookieToken)};`,
      },
    });
    return response.data;
  };
  try {
    await queryClient.prefetchQuery({
      queryKey: [QueryKeys.Me],
      queryFn: fetchMe,
    });
  } catch (error) {}

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {props.children}
    </HydrationBoundary>
  );
};
