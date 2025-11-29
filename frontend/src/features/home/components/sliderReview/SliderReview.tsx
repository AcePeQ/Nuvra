import Rating from "../../../../shared/ui/rating/Rating";
import styles from "./SliderReview.module.css";

import CheckmarkIcon from "/src/assets/images/icons/checkmarkIcon.svg";
import { motion } from "framer-motion";

interface placeholderItemReview {
  id: number;
  name: string;
  rating: number;
  description: string;
}

interface SliderReviewProps {
  currentIndex: number;
  index: number;
  item: placeholderItemReview;
  reviews: placeholderItemReview[][] | null;
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

function SliderReview({
  currentIndex,
  index,
  item,
  reviews,
}: SliderReviewProps) {
  const { rating, name, description } = item;
  return (
    <motion.li
      variants={itemVariants}
      className={styles.review}
      aria-label={`Review ${index + 1} of ${reviews?.[currentIndex].length}`}
    >
      <Rating rating={rating} />
      <div className={styles.review__nameWrapper}>
        <p className={styles.review__name}>{name}</p>
        <img
          className={styles.review__checkmark}
          src={CheckmarkIcon}
          alt="Checkmark icon"
        />
      </div>
      <p className={styles.review__description}>{description}</p>
    </motion.li>
  );
}

export default SliderReview;
