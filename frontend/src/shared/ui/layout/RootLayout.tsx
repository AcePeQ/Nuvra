import React, { useEffect } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useTopbarHeaderHeight } from "../../stores/topbarStore";

export default function RootLayout() {
  const paddingTop = useTopbarHeaderHeight();

  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [pathname])

  return (
    <React.Fragment>
      <Header />
      <motion.main
        layout
        animate={{
          paddingTop,
          transition: { delay: 0.4 },
        }}
        className="main"
      >
        <Outlet />
      </motion.main>
      <Footer />
    </React.Fragment>
  );
}
