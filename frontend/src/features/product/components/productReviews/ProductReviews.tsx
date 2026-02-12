import { useParams } from "react-router-dom";
import Button from "../../../../shared/ui/button/Button";
import { ProductItem, ReviewItem } from "../../../../shared/utils/types";
import useGetSingleProduct from "../../hooks/useGetSingleProduct";
import ProductReview from "./ProductReview";
import styles from "./ProductReviews.module.css";
import useGetReviewProduct from "../../hooks/useGetReviewProduct";
import LoaderContainer from "../../../../shared/ui/loaders/loaderContainer/LoaderContainer";
import ErrorContainer from "../../../../shared/ui/errors/errorContainer/ErrorContainer";

function ProductReviews() {
  const { productName } = useParams();
  const { data: product }: { data: ProductItem } =
    useGetSingleProduct(productName);

  const productId = product.id;

  const {
    data: reviews,
    error,
    isError,
    isLoading,
  }: {
    data: ReviewItem[];
    error: Error | null;
    isError: boolean;
    isLoading: boolean;
  } = useGetReviewProduct(productId);

  if (isLoading) {
    return <LoaderContainer />;
  }

  if (isError && error) {
    return <ErrorContainer message={error.message} />;
  }

  return (
    <section className={styles.reviews__section}>
      <div className={styles.reviews__header}>
        <h2 className={styles.title}>
          All Reviews <span className={styles.count}>({reviews.length})</span>
        </h2>

        <Button type="button">Write a Review</Button>
      </div>

      <div className={styles.reviews__container}>
        <ul className={styles.reviews__list}>
          {reviews.map((review) => (
            <ProductReview key={review.id} review={review} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ProductReviews;
