import { useState } from "react";
import styles from "./Header.module.css";
import Topbar from "../topbar/Topbar";
import BottomBar from "../bottombar/BottomBar";
import { motion } from "framer-motion";
import { useTopbarActions, useTopbarIsOpen } from "../../stores/topbarStore";

let headerHeight = 0;

function Header() {
  const isTopbarVisible = useTopbarIsOpen();
  const { closeTopbar } = useTopbarActions();
  const [isLoggedIn] = useState(false);

  if (isTopbarVisible) {
    headerHeight = 126;
  } else {
    headerHeight = 88;
  }

  return (
    <motion.header
      layout
      animate={{ height: headerHeight }}
      className={styles.header}
    >
      {isTopbarVisible && !isLoggedIn && <Topbar onClose={closeTopbar} />}

      <BottomBar />
    </motion.header>
  );
}

export default Header;
