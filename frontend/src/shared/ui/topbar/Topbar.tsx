import styles from "./Topbar.module.css";
import XIcon from "assets/images/icons/XIcon.svg";

export default function Topbar() {
  return (
    <div className={styles.topbar}>
      <p className={styles.topbar__text}>
        Sign up and get 20% off to your first order
        <a href="#" className={styles.topbar__link}>
          Sign up Now
        </a>
      </p>
      <button className={styles.topbar__button}>
        <img className={styles.topbar__icon} src={XIcon} alt="X - Close icon" />
      </button>
    </div>
  );
}
