import Rating from "../../../../shared/ui/raiting/Raiting";
import styles from "./ProductReview.module.css";

type ProductReviewProps = {
  review: any;
};

function ProductReview({ review }: ProductReviewProps) {
  return (
    <li className={styles.review__item}>
      <article className={styles.review}>
        <Rating rating={4} />
        <h3 className={styles.title}>Samantha D.</h3>
        <p className={styles.description}>
          I absolutely loved this t-shirt! It fit perfectly and was super soft.
          The design is very unique and creative, and the colors are perfect for
          any occasion. As a fellow fashion enthusiast, I can't wait to wear
          this t-shirt every day. It's a must-have in my wardrobe!
        </p>
        <p className={styles.date}>Posted on August 16, 2023</p>
      </article>
    </li>
  );
}

export default ProductReview;
