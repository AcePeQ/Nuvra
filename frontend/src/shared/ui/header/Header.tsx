
import styles from "./Header.module.css";
import Topbar from "../topbar/Topbar";
import BottomBar from "../bottombar/BottomBar";
import { AnimatePresence, motion } from "framer-motion";
import {
  useTopbarActions,
  useTopbarHeaderHeight,
  useTopbarIsOpen,
} from "../../stores/topbarStore";
import { useIsLoggedIn } from "../../../features/account/stores/userStore";
import { useEffect } from "react";

function Header() {
  const isLoggedIn = useIsLoggedIn();
  const isTopbarVisible = useTopbarIsOpen();
  const height = useTopbarHeaderHeight();
  const { openTopbar, closeTopbar } = useTopbarActions();

  useEffect(() => {
    if (isLoggedIn) {
      closeTopbar();
    } else {
      openTopbar();
    }
  }, [isLoggedIn, openTopbar, closeTopbar])


  return (
    <motion.header layout="size" animate={{ height }} className={styles.header}>
      <AnimatePresence mode="wait">
        {isTopbarVisible && !isLoggedIn && <Topbar onClose={closeTopbar} />}
      </AnimatePresence>

      <BottomBar />
    </motion.header>
  );
}

export default Header;
