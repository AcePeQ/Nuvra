import { Link } from "react-router-dom";
import styles from "./ProductsShowcase.module.css";
import React from "react";
import Button from "../../../../shared/ui/button/Button";
import { motion } from "framer-motion";
import Rating from "../../../../shared/ui/rating/Rating";
import useMediaQuery from "../../hooks/useMediaQuery";

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
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function ProductsShowcase({ title, items, onClick }: ProductsShowcaseProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [products, setProducts] = React.useState(items);
  const isLarge = useMediaQuery("(min-width: 1024px)");

  console.log(isLarge);

  return (
    <section
      className={`container container-padding ${styles.productsShowcase}`}
    >
      <h2 className={styles.productsShowcase__title}>{title}</h2>

      <motion.ul drag="x" className={styles.productsShowcase__items}>
        {products.map((item) => (
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
                  <Rating rating={item.rating} />
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
      </motion.ul>
      <div className={styles.productsShowcase__button}>
        <Button
          buttonType="button"
          buttonStyle="primary-outline"
          buttonSize="normal"
          onClick={onClick}
        >
          View All
        </Button>
      </div>
    </section>
  );
}

export default ProductsShowcase;
