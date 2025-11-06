import Topbar from "../topbar/Topbar";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <Topbar />
    </header>
  );
}

export default Header;
