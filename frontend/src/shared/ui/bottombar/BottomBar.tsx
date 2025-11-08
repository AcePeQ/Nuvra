import Logo from "../logo/Logo";
import styles from "./BottomBar.module.css";

function BottomBar() {
  return (
    <div className={`container-padding ${styles.bottombar}`}>
      <Logo />
    </div>
  );
}

export default BottomBar;
