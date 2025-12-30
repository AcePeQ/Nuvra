import styles from "./ShowcaseProduct.module.css";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Rating from "../../../../shared/ui/raiting/Raiting";

export interface placeholderItem {
  id: number;
  name: string;
  img: string;
  rating: number;
  currentPrice: number;
  originalPrice: number;
  discount: number;
}

interface ShowcaseProductProps {
  index?: number;
  currentIndex?: number;
  item: placeholderItem;
  products?: placeholderItem[][];
  productsLength?: number;
}

const itemVariants = {
  initial: {
    opacity: 0,
    x: 25,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    y: 25,
  },
};

function ShowcaseProduct({
  item,
  index,
  products,
  currentIndex,
  productsLength,
}: ShowcaseProductProps) {
  return (
    <motion.li
      variants={itemVariants}
      key={item.id}
      className={styles.productsShowcase__item}
      aria-label={`Product ${(index as number) + 1} of ${
        products?.[currentIndex as number].length ?? productsLength
      }`}
    >
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
            <span aria-label={`Rating ${item.rating} out of 5`}>
              {item.rating}/5
            </span>
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
    </motion.li>
  );
}

export default ShowcaseProduct;
