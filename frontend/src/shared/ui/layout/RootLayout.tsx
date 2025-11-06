import React from "react";
import Header from "../header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";

export default function RootLayout() {
  return (
    <React.Fragment>
      <Header />
      <main className="layout-main">
        <Outlet />
      </main>
      <Footer />
    </React.Fragment>
  );
}
