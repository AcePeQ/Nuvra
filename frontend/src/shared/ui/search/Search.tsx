import styles from "./Search.module.css";

import XIcon from "/src/assets/images/icons/XIcon.svg";

function Search() {
  return (
    <form className={styles.form}>
      <button className={`${styles.button} ${styles.button__search}`}>
        <img
          className={styles.icon}
          src="/src/assets/images/icons/SearchIcon.svg"
          alt="Search icon"
        />
      </button>
      <input
        className={styles.input}
        type="text"
        placeholder="Search for products..."
      />
      <button className={`${styles.button} ${styles.button__clear}`}>
        <img className={styles.icon} src={XIcon} alt="Clear icon" />
      </button>
    </form>
  );
}

export default Search;
