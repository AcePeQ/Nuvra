import styles from "./ShowcaseProduct.module.css";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Rating from "../../../../shared/ui/raiting/Raiting";
import { ProductItem } from "../../../../shared/utils/types";
import { IMAGE_URL } from "../../../../shared/utils/helpers";

interface ShowcaseProductProps {
  index?: number;
  currentIndex?: number;
  item: ProductItem;
  products?: ProductItem[][];
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
  const URL = `/shop/${item.details.style.toLowerCase()}/${item.subcategory.toLowerCase()}/${item.name.replaceAll(" ", "-").toLowerCase()}`;

  return (
    <motion.li
      variants={itemVariants}
      className={styles.productsShowcase__item}
      aria-label={`Product ${(index as number) + 1} of ${
        products?.[currentIndex as number].length ?? productsLength
      }`}
    >
      <Link className={styles.productsShowcase__link} to={URL}>
        <img
          className={styles.productsShowcase__image}
          src={`${IMAGE_URL}${item.images.hero}`}
          alt={item.name}
        />
        <div className={styles.content}>
          <h3 className={styles.content__title}>{item.name}</h3>
          <div className={styles.content__rating}>
            <Rating rating={Number(item.rating)} />
            <span aria-label={`Rating ${item.rating} out of 5`}>
              {item.rating} / 5
            </span>
          </div>
          <div className={styles.content__price}>
            <span className={styles.content__price__current}>
              ${+item.price}
            </span>
            {item.compare_at_price && (
              <span className={styles.content__price__original}>
                ${+item.compare_at_price}
              </span>
            )}
            {item.discount_percent > 0 && (
              <span className={styles.content__price__discount}>
                -{item.discount_percent}%
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.li>
  );
}

export default ShowcaseProduct;
