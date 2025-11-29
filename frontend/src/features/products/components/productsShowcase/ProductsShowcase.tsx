import styles from "./ProductsShowcase.module.css";
import React, { useEffect, useId, useState } from "react";
import Button from "../../../../shared/ui/button/Button";
import { AnimatePresence, motion, stagger } from "framer-motion";
import useMediaQuery from "../../hooks/useMediaQuery";
import { splitItemsBySize } from "../../../../shared/utils/helpers";

import ArrowIconElement from "../../../../shared/ui/arrowIconElement/ArrowIconElement";
import ShowcaseProduct, {
  placeholderItem,
} from "../showcaseProduct/ShowcaseProduct";

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

      <AnimatePresence mode="wait">
        {products && products.length > 1 && (
          <motion.ul
            id={listId}
            aria-live="polite"
            className={styles.productsShowcase__items}
            variants={listVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            role="list"
            key={`${listId}-${currentIndex}-${isDesktop}-${isSmallerDesktop}-${isLaptop}-${isTablet}-${isMobile}-${products[currentIndex].length}`}
          >
            {products?.[currentIndex].map((item, index) => (
              <ShowcaseProduct
                key={item.id}
                item={item}
                index={index}
                currentIndex={currentIndex}
                products={products}
              />
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
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
