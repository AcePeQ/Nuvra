import Search from "../../../features/search/components/search/Search";
import Logo from "../logo/Logo";
import MainNav from "../mainNav/MainNav";

import styles from "./BottomBar.module.css";

function BottomBar() {
  return (
    <div className={`container-padding ${styles.bottombar}`}>
      <div className={styles.bottombar__left}>
        <Logo />
        <MainNav />
      </div>
      <div className={styles.bottombar__right}>
        <Search />
      </div>
    </div>
  );
}

export default BottomBar;
