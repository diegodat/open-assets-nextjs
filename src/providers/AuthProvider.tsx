"use client";
import { useMeQuery } from "@/hooks/apis/account/useMeQuery";
import { useStore } from "@/stores/store";
import { FC, PropsWithChildren, useEffect } from "react";

export const AuthProvider: FC<PropsWithChildren> = (props) => {
  const meQuery = useMeQuery();
  const account = meQuery.data;

  const setUser = useStore((state) => state.setUser);
  // const ability = defineAbilityFor(account);

  useEffect(() => {
    if (account) {
      setUser(account);
    }
  }, [account, setUser]);

  if (meQuery.isLoading) return <div>Loading...</div>;

  return <>{props.children}</>;
};
