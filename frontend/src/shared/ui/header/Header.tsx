import { useState } from "react";
import styles from "./Header.module.css";
import Topbar from "../topbar/Topbar";
import BottomBar from "../bottombar/BottomBar";
import { motion } from "framer-motion";
import {
  useTopbarActions,
  useTopbarHeaderHeight,
  useTopbarIsOpen,
} from "../../stores/topbarStore";

function Header() {
  const isTopbarVisible = useTopbarIsOpen();
  const height = useTopbarHeaderHeight();
  const { closeTopbar } = useTopbarActions();
  const [isLoggedIn] = useState(false);

  return (
    <motion.header layout="size" animate={{ height }} className={styles.header}>
      {isTopbarVisible && !isLoggedIn && <Topbar onClose={closeTopbar} />}

      <BottomBar />
    </motion.header>
  );
}

export default Header;
