import { Link } from "react-router-dom";
import styles from "./SearchResults.module.css";

function SearchResults() {
  return (
    <div className={styles.searchResults}>
      <ul className={styles.searchResults__list}>
        <li className={styles.searchResults__item}>
          <Link className={styles.searchResults__link} to="/products/1">
            <img
              src="/src/assets/images/placeholders/searchPlaceholder.png"
              className={styles.searchResults__image}
              alt=""
            />
            <div className={styles.searchResults__content}>
              <h3 className={styles.searchResults__title}>
                One life graphic t-shirt
              </h3>
              <div className={styles.rating}>Rating</div>
              <p className={styles.searchResults__description}>
                This graphic t-shirt which is perfect for any occasion. Crafted
                from a soft and breathable fabric, it offers superior comfort
                and style.
              </p>
              <div className={styles.searchResults__pricing}>
                <p className={styles.searchResults__price_current}>$260</p>
                <p className={styles.searchResults__price_original}>$300</p>
                <span className={styles.searchResults__discount}>-40%</span>
              </div>
            </div>
          </Link>
        </li>

        <li className={styles.searchResults__item}>
          <Link className={styles.searchResults__link} to="/products/1">
            <img
              src="/src/assets/images/placeholders/searchPlaceholder.png"
              className={styles.searchResults__image}
              alt=""
            />
            <div className={styles.searchResults__content}>
              <h3 className={styles.searchResults__title}>
                One life graphic t-shirt
              </h3>
              <div className={styles.rating}>Rating</div>
              <p className={styles.searchResults__description}>
                This graphic t-shirt which is perfect for any occasion. Crafted
                from a soft and breathable fabric, it offers superior comfort
                and style.
              </p>
              <div className={styles.searchResults__pricing}>
                <p className={styles.searchResults__price_current}>$260</p>
                <p className={styles.searchResults__price_original}>$300</p>
                <span className={styles.searchResults__discount}>-40%</span>
              </div>
            </div>
          </Link>
        </li>

        <li className={styles.searchResults__item}>
          <Link className={styles.searchResults__link} to="/products/1">
            <img
              src="/src/assets/images/placeholders/searchPlaceholder.png"
              className={styles.searchResults__image}
              alt=""
            />
            <div className={styles.searchResults__content}>
              <h3 className={styles.searchResults__title}>
                One life graphic t-shirt
              </h3>
              <div className={styles.rating}>Rating</div>
              <p className={styles.searchResults__description}>
                This graphic t-shirt which is perfect for any occasion. Crafted
                from a soft and breathable fabric, it offers superior comfort
                and style.
              </p>
              <div className={styles.searchResults__pricing}>
                <p className={styles.searchResults__price_current}>$260</p>
                <p className={styles.searchResults__price_original}>$300</p>
                <span className={styles.searchResults__discount}>-40%</span>
              </div>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SearchResults;
