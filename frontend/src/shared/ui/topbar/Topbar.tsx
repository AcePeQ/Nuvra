import styles from "./Topbar.module.css";
import XIcon from "/src/assets/images/icons/XIcon.svg";

interface TopbarProps {
  onClose: React.MouseEventHandler<HTMLButtonElement>;
}

function handleLinkClick(e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
}

export default function Topbar({ onClose }: TopbarProps) {
  return (
    <div className={styles.topbar}>
      <p className={styles.topbar__text}>
        Sign up and get 20% off to your first order{" "}
        <a
          href="/signup"
          onClick={handleLinkClick}
          className={styles.topbar__link}
        >
          Sign up Now
        </a>
      </p>
      <button onClick={onClose} className={styles.topbar__button}>
        <img className={styles.topbar__icon} src={XIcon} alt="X - Close icon" />
      </button>
    </div>
  );
}
