import { FC, ReactNode } from "react";

import { QueryClientProvider } from "./QueryClientProvider";
import { ToastProvider } from "./ToastProvider";

type ProvidersProps = {
  children: ReactNode;
};

export const Providers: FC<ProvidersProps> = ({ children }) => (
  <>
    <QueryClientProvider>{children}</QueryClientProvider>
    <ToastProvider />
  </>
);
