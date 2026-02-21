import React from "react";
import QueryProvider from "./QueryProvider";
import ToastProvider from "./ToastProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";


export default function AppProviders({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <QueryProvider>
      {children}
      <ToastProvider />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryProvider>
  );
}
