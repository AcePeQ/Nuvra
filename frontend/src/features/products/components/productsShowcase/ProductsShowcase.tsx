import { Link } from "react-router-dom";
import styles from "./ProductsShowcase.module.css";

interface placeholderItem {
  id: number;
  name: string;
  img: string;
  rating: number;
  currentPrice: number;
  originalPrice: number;
  discount: number;
}

interface ProductsShowcaseProps {
  title: string;
  items: placeholderItem[];
}

function ProductsShowcase({ title, items }: ProductsShowcaseProps) {
  return (
    <section
      className={`container container-padding ${styles.productsShowcase}`}
    >
      <h2 className={styles.productsShowcase__title}>{title}</h2>
      <ul className={styles.productsShowcase__items}>
        {items.map((item) => (
          <li key={item.id} className={styles.productsShowcase__item}>
            <Link
              className={styles.productsShowcase__link}
              to={`/products/${item.id}`}
            >
              <img
                className={styles.productsShowcase__image}
                src={item.img}
                alt={item.name}
              />
              <div className={styles.content}>
                <h3 className={styles.content__title}>{item.name}</h3>
                <div className={styles.content__rating}>
                  <div>Rating</div>
                  <span>{item.rating}/5</span>
                </div>
                <div className={styles.content__price}>
                  <span className={styles.content__price__current}>
                    ${item.currentPrice}
                  </span>
                  <span className={styles.content__price__original}>
                    ${item.originalPrice}
                  </span>
                  <span className={styles.content__price__discount}>
                    -{item.discount}%
                  </span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProductsShowcase;
