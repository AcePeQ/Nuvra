import { Link } from "react-router-dom";
import styles from "./ProductsShowcase.module.css";
import React, { useEffect, useId, useState } from "react";
import Button from "../../../../shared/ui/button/Button";
import { AnimatePresence, motion, stagger } from "framer-motion";
import Rating from "../../../../shared/ui/rating/Rating";
import useMediaQuery from "../../hooks/useMediaQuery";
import { splitItemsBySize } from "../../../../shared/utils/helpers";

import ArrowIconElement from "../../../../shared/ui/arrowIconElement/ArrowIconElement";

export interface placeholderItem {
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

const listVariants = {
  initial: {},
  animate: {
    transition: {
      delayChildren: stagger(0.1, { from: "first" }),
    },
  },
  exit: {
    transition: {
      delayChildren: stagger(0.1, { from: "last" }),
    },
  },
  hover: {},
};

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
  hover: {},
};

function ProductsShowcase({ title, items, onClick }: ProductsShowcaseProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [products, setProducts] = useState<placeholderItem[][] | null>(null);
  const isDesktop = useMediaQuery("(min-width: 1315px)");
  const isSmallerDesktop = useMediaQuery(
    "(min-width: 1050px) and (max-width: 1315px)"
  );
  const isLaptop = useMediaQuery("(min-width: 820px) and (max-width: 1050px)");
  const isTablet = useMediaQuery("(min-width: 670px) and (max-width: 820px)");
  const isMobile = useMediaQuery("(max-width: 670px)");
  const listId = useId();

  useEffect(() => {
    if (isDesktop) {
      setProducts(splitItemsBySize(items, 5) as placeholderItem[][]);
    }

    if (isSmallerDesktop) {
      setProducts(splitItemsBySize(items, 4) as placeholderItem[][]);
    }

    if (isLaptop) {
      setProducts(splitItemsBySize(items, 3) as placeholderItem[][]);
    }

    if (isTablet) {
      setProducts(splitItemsBySize(items, 2) as placeholderItem[][]);
    }

    if (isMobile) {
      setProducts(splitItemsBySize(items, 1) as placeholderItem[][]);
    }
  }, [isDesktop, isSmallerDesktop, isLaptop, isTablet, isMobile, items]);

  function handleChangeIndex(direction: number) {
    if (!products) return;

    if (direction === 1 && currentIndex === products.length - 1) {
      setCurrentIndex(products.length - 1);
      return;
    }

    if (direction === -1 && currentIndex === 0) {
      setCurrentIndex(0);
      return;
    }

    setCurrentIndex((prevIndex) => prevIndex + direction);
  }

  return (
    <section
      className={`container container-padding ${styles.productsShowcase}`}
      aria-label={title}
      aria-roledescription="carousel"
    >
      <div className={styles.header__container}>
        <ArrowIconElement
          direction="left"
          className="button__arrow__products"
          isDisabled={currentIndex === 0}
          onClick={() => handleChangeIndex(-1)}
          label="Show previous products"
          aria-controls={listId}
        />
        <h2 className={styles.productsShowcase__title}>{title}</h2>
        <ArrowIconElement
          direction="right"
          className="button__arrow__products"
          isDisabled={
            products?.length ? currentIndex === products.length - 1 : false
          }
          onClick={() => handleChangeIndex(1)}
          label="Show next products"
          aria-controls={listId}
        />
      </div>

      {products && products.length > 1 && (
        <AnimatePresence mode="wait">
          <motion.ul
            id={listId}
            aria-live="polite"
            className={styles.productsShowcase__items}
            variants={listVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            role="list"
            key={currentIndex}
          >
            <AnimatePresence mode="wait">
              {products?.[currentIndex].map((item, index) => (
                <motion.li
                  variants={itemVariants}
                  key={item.id}
                  custom={item.id}
                  className={styles.productsShowcase__item}
                  aria-label={`Product ${index + 1} of ${
                    products[currentIndex].length
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
              ))}
            </AnimatePresence>
          </motion.ul>
        </AnimatePresence>
      )}
      <div className={styles.productsShowcase__button}>
        <Button
          buttonType="button"
          buttonStyle="primary-outline"
          buttonSize="normal"
          onClick={onClick}
          label={`View all products from section ${title}`}
        >
          View All
        </Button>
      </div>
    </section>
  );
}

export default ProductsShowcase;
