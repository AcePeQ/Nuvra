import { useEffect, useId, useState } from "react";
import ArrowIconElement from "../../../../shared/ui/arrowIconElement/ArrowIconElement";

import styles from "./SliderReviews.module.css";

import useMediaQuery from "../../../../shared/hooks/useMediaQuery";
import { splitItemsBySize } from "../../../../shared/utils/helpers";
import { AnimatePresence, motion, stagger } from "framer-motion";
import SliderReview from "../sliderReview/SliderReview";
import { ReviewItem } from "../../../../shared/utils/types";

interface SliderReviewsProps {
  label: string;
  items: ReviewItem[];
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

function SliderReviews({ label, items }: SliderReviewsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reviews, setReviews] = useState<ReviewItem[][] | null>(null);
  const listId = useId();

  const isDesktop = useMediaQuery("(min-width: 1315px)");
  const isSmallerDesktop = useMediaQuery(
    "(min-width: 1050px) and (max-width: 1315px)",
  );
  const isLaptop = useMediaQuery("(min-width: 820px) and (max-width: 1050px)");
  const isTablet = useMediaQuery("(min-width: 670px) and (max-width: 820px)");
  const isMobile = useMediaQuery("(max-width: 670px)");

  useEffect(() => {
    if (isDesktop) {
      setReviews(splitItemsBySize(items, 4) as ReviewItem[][]);
    }

    if (isSmallerDesktop) {
      setReviews(splitItemsBySize(items, 3) as ReviewItem[][]);
    }

    if (isLaptop) {
      setReviews(splitItemsBySize(items, 3) as ReviewItem[][]);
    }

    if (isTablet) {
      setReviews(splitItemsBySize(items, 2) as ReviewItem[][]);
    }

    if (isMobile) {
      setReviews(splitItemsBySize(items, 1) as ReviewItem[][]);
    }
  }, [isDesktop, isSmallerDesktop, isLaptop, isTablet, isMobile, items]);

  function handleChangeIndex(direction: number) {
    if (!reviews) return;

    if (direction === 1 && currentIndex === reviews.length - 1) {
      setCurrentIndex(reviews.length - 1);
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
      aria-label={label}
      aria-roledescription="carousel"
      className={`${styles.section} container container-padding`}
    >
      <div className={styles.section__header}>
        <h2 className={styles.section__title}>Our happy customers</h2>
        <div className={styles.section__actions}>
          <ArrowIconElement
            direction="left"
            className="button__reviews"
            isDisabled={currentIndex === 0}
            onClick={() => handleChangeIndex(-1)}
            aria-controls={listId}
            label="Show previous reviews"
          />
          <ArrowIconElement
            direction="right"
            className="button__reviews"
            isDisabled={
              reviews?.length ? currentIndex === reviews.length - 1 : false
            }
            onClick={() => handleChangeIndex(1)}
            aria-controls={listId}
            label="Show next reviews"
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        {reviews && reviews.length > 1 && (
          <motion.ul
            variants={listVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className={styles.reviews}
            id={listId}
            aria-live="polite"
            role="list"
            key={`${listId}-${currentIndex}-${isDesktop}-${isSmallerDesktop}-${isLaptop}-${isTablet}-${isMobile}-${reviews[currentIndex].length}`}
          >
            {reviews[currentIndex].map((review, index) => (
              <SliderReview
                key={review.id}
                item={review}
                index={index}
                currentIndex={currentIndex}
                reviews={reviews}
              />
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </section>
  );
}

export default SliderReviews;
