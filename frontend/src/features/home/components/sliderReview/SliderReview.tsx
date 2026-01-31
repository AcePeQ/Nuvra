import Rating from "../../../../shared/ui/raiting/Raiting";
import { ReviewItem } from "../../../../shared/utils/types";
import styles from "./SliderReview.module.css";

import CheckmarkIcon from "/src/assets/images/icons/checkmarkIcon.svg";
import { motion } from "framer-motion";

interface SliderReviewProps {
  currentIndex: number;
  index: number;
  item: ReviewItem;
  reviews: ReviewItem[][] | null;
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
  return (
    <motion.li
      variants={itemVariants}
      className={styles.review}
      aria-label={`Review ${index + 1} of ${reviews?.[currentIndex].length}`}
    >
      <Rating rating={+item.rating} />
      <div className={styles.review__nameWrapper}>
        <p className={styles.review__name}>{item.author_name}</p>
        <img
          className={styles.review__checkmark}
          src={CheckmarkIcon}
          alt="Checkmark icon"
        />
      </div>
      <p className={styles.review__description}>{item.body}</p>
    </motion.li>
  );
}

export default SliderReview;
