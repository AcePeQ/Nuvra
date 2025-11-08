import Topbar from "../topbar/Topbar";
import { useState } from "react";
import styles from "./Header.module.css";
import BottomBar from "../bottombar/BottomBar";

function Header() {
  const [isTopbarVisible, setIsTopbarVisible] = useState(true);
  const [isLoggedIn] = useState(false);

  function handleCloseTopbar() {
    setIsTopbarVisible(false);
  }

  return (
    <header className={styles.header}>
      {isTopbarVisible && !isLoggedIn && <Topbar onClose={handleCloseTopbar} />}
      <BottomBar />
    </header>
  );
}

export default Header;
