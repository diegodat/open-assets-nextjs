import { HttpClient } from "@/packages/api/httpClient";
import { JwtCookieToken } from "@/packages/constants/auth";
import { QueryKeys } from "@/packages/constants/queryKeys";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { FC, PropsWithChildren } from "react";

type AccountResponse = {
  id: number;
  email: string;
  userId: string;
  dateOfBirth: string;
  profileImage: string;
  nickname: string;
};

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
