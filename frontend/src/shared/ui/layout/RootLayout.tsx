import React, { useEffect } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useTopbarHeaderHeight } from "../../stores/topbarStore";
import useVerifySession from "../../hooks/useVerifySession";
import { useUserActions } from "../../../features/account/stores/userStore";
import LoaderFull from "../loaders/loaderFull/LoaderFull";

export default function RootLayout() {
  const { data, isError, isPending } = useVerifySession()
  const { login, logout } = useUserActions()
  const { pathname } = useLocation()
  const paddingTop = useTopbarHeaderHeight();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [pathname])

  useEffect(() => {
    if (isPending) return;

    if (isError || data === null) {
      logout();
      return;
    }

    login(data.user)
  }, [data, isError, isPending, login, logout])

  if (isPending) {
    return <LoaderFull />
  }



  return (
    <React.Fragment>
      <Header />
      <motion.main
        initial={{ paddingTop }}
        animate={{ paddingTop }}
        className="main"
      >
        <Outlet />
      </motion.main>
      <Footer />
    </React.Fragment>
  );
}
