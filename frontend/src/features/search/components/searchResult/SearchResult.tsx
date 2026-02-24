import { Link } from "react-router-dom";
import { ProductItem } from "../../../../shared/utils/types";
import styles from "./SearchResult.module.css";
import Rating from "../../../../shared/ui/raiting/Raiting";
import { IMAGE_URL } from "../../../../shared/utils/helpers";

function SearchResult({ product }: { product: ProductItem }) {
  const URL = `/shop/${product.details.style.toLowerCase()}/${product.subcategory.toLowerCase()}/${product.name.replaceAll(" ", "-").toLowerCase()}`;

  return (
    <li className={styles.searchResults__item}>
      <Link className={styles.searchResults__link} to={URL}>
        <img
          src={`${IMAGE_URL}${product.images.gallery[0]}`}
          className={styles.searchResults__image}
          alt=""
        />
        <div className={styles.searchResults__content}>
          <h3 className={styles.searchResults__title}>{product.name}</h3>
          <div className={styles.ratingWrapper}>
            <Rating rating={+product.rating} />
            <span aria-label={`Rating ${+product.rating} out of 5`}>
              {+product.rating} / 5
            </span>
          </div>

          <div className={styles.searchResults__pricing}>
            <p className={styles.searchResults__price_current}>
              ${+product.price}
            </p>
            {product.compare_at_price && (
              <p className={styles.searchResults__price_original}>
                ${+product.compare_at_price}
              </p>
            )}
            {product.discount_percent > 0 && (
              <span className={styles.searchResults__discount}>
                -{product.discount_percent}%
              </span>
            )}
          </div>
        </div>
      </Link>
    </li>
  );
}

export default SearchResult;
