"use client";

import { FC, ReactNode } from "react";
import {
  QueryClient,
  QueryClientProvider as TSQueryClientProvider,
} from "@tanstack/react-query";

type QueryClientProviderProps = {
  children: ReactNode;
};

const queryClient = new QueryClient();

export const QueryClientProvider: FC<QueryClientProviderProps> = ({
  children,
}) => (
  <TSQueryClientProvider client={queryClient}>{children}</TSQueryClientProvider>
);
