import Newsletter from "../newsletter/Newsletter";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={`${styles.footer} container container-padding`}>
      <Newsletter />

      <div className={styles.footer__content}>Footer</div>
    </footer>
  );
}
