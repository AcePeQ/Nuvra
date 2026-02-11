import Rating from "../../../../shared/ui/raiting/Raiting";
import { getFormattedDate } from "../../../../shared/utils/helpers";
import { ReviewItem } from "../../../../shared/utils/types";
import styles from "./ProductReview.module.css";

type ProductReviewProps = {
  review: ReviewItem;
};

function ProductReview({ review }: ProductReviewProps) {
  const formattedDate = getFormattedDate(review.created_at);

  return (
    <li className={styles.review__item}>
      <article className={styles.review}>
        <Rating rating={+review.rating} />
        <h3 className={styles.title}>{review.author_name}</h3>
        <p className={styles.description}>{review.body}</p>
        <p className={styles.date}>Posted on {formattedDate}</p>
      </article>
    </li>
  );
}

export default ProductReview;
