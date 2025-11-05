import React from "react";
import QueryProvider from "./QueryProvider";
import { BrowserRouter } from "react-router-dom";
import ToastProvider from "./ToastProvider";

export default function AppProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryProvider>
      <BrowserRouter>
        {children}
        <ToastProvider />
      </BrowserRouter>
    </QueryProvider>
  );
}
