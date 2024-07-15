import { FC, ReactNode } from "react";

import { QueryClientProvider } from "./QueryClientProvider";

type ProvidersProps = {
  children: ReactNode;
};

export const Providers: FC<ProvidersProps> = ({ children }) => (
  <QueryClientProvider>{children}</QueryClientProvider>
);
