import Logo from "../logo/Logo";
import MainNav from "../mainNav/MainNav";
import styles from "./BottomBar.module.css";

function BottomBar() {
  return (
    <div className={`container-padding ${styles.bottombar}`}>
      <Logo />
      <MainNav />
    </div>
  );
}

export default BottomBar;
