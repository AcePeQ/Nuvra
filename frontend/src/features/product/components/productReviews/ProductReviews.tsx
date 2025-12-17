import Button from "../../../../shared/ui/button/Button";
import ProductReview from "./ProductReview";
import styles from "./ProductReviews.module.css";

const REVIEWS = Array.from({ length: 5 }, (_, index) => index + 1);

function ProductReviews() {
  return (
    <section className={styles.reviews__section}>
      <div className={styles.reviews__header}>
        <h2 className={styles.title}>
          All Reviews <span className={styles.count}>(452)</span>
        </h2>

        <Button type="button">Write a Review</Button>
      </div>

      <div className={styles.reviews__container}>
        <ul className={styles.reviews__list}>
          {REVIEWS.map((review) => (
            <ProductReview key={review} review={review} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ProductReviews;
