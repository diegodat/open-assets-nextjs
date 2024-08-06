"use client";

import { FC, PropsWithChildren, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

export const Provider: FC<PropsWithChildren> = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
