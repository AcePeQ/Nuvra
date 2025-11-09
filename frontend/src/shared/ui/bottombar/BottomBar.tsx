import Search from "../../../features/search/components/search/Search";
import Logo from "../logo/Logo";
import MainNav from "../mainNav/MainNav";
import NavigationCTA from "../navigationCTA/NavigationCTA";

import styles from "./BottomBar.module.css";

function BottomBar() {
  return (
    <div className={`${styles.bottombar} container container-padding`}>
      <div className={styles.bottombar__left}>
        <Logo />
        <MainNav />
      </div>
      <div className={styles.bottombar__right}>
        <Search />
        <NavigationCTA />
      </div>
    </div>
  );
}

export default BottomBar;
