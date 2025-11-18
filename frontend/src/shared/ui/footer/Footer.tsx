import Logo from "../logo/Logo";
import Newsletter from "../newsletter/Newsletter";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={`${styles.footer} container container-padding`}>
      <Newsletter />

      <div className={styles.footer__content}>
        <div className={styles.footer__col1}>
          <Logo />
          <p className={styles.footer__text}>
            We have clothes that suits your style and which you're proud to
            wear. From women to men
          </p>
        </div>
      </div>
    </footer>
  );
}
