import Search from "../../../features/search/components/search/Search";
import Logo from "../logo/Logo";
import MainNav from "../mainNav/MainNav";
import NavigationCTA from "../navigationCTA/NavigationCTA";

import { motion } from "framer-motion";

import styles from "./BottomBar.module.css";
import useMediaQuery from "../../../features/products/hooks/useMediaQuery";
import SearchMobile from "../../../features/search/components/searchMobile/SearchMobile";
import MainNavMobile from "../mainNav/MainNavMobile";

function BottomBar() {
  const isTablet = useMediaQuery("(max-width: 1070px)");
  const isMobile = useMediaQuery("(max-width: 640px)");

  return (
    <motion.div
      layout
      className={`${styles.bottombar} container container-padding`}
    >
      <div className={styles.bottombar__left}>
        <Logo />
        {isMobile ? <MainNavMobile /> : <MainNav />}
      </div>
      <div className={styles.bottombar__right}>
        {!isTablet ? <Search /> : <SearchMobile />}
        <NavigationCTA />
      </div>
    </motion.div>
  );
}

export default BottomBar;
