import { useParams } from "react-router-dom";
import Button from "../../../../shared/ui/button/Button";
import { ProductItem, ReviewItem } from "../../../../shared/utils/types";
import useGetSingleProduct from "../../hooks/useGetSingleProduct";
import ProductReview from "./ProductReview";
import styles from "./ProductReviews.module.css";
import useGetReviewProduct from "../../hooks/useGetReviewProduct";
import LoaderContainer from "../../../../shared/ui/loaders/loaderContainer/LoaderContainer";
import ErrorContainer from "../../../../shared/ui/errors/errorContainer/ErrorContainer";
import { useState } from "react";
import Pagination from "../../../../shared/ui/pagination/Pagination";

function ProductReviews() {
  const [page, setPage] = useState<number>(1);

  const { productName } = useParams();
  const { data: product }: { data: ProductItem } =
    useGetSingleProduct(productName);

  const productId = product.id;
  const pageSize = 6;

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
  } = useGetReviewProduct(productId, page, pageSize);

  if (isLoading) {
    return <LoaderContainer />;
  }

  if (isError && error) {
    return <ErrorContainer message={error.message} />;
  }

  function handleNextPage() {
    setPage((prevPage) => prevPage + 1);
  }

  function handlePreviousPage() {
    setPage((prevPage) => prevPage - 1);
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
        <Pagination
          page={page}
          totalPages={pageSize}
          onNextPage={handleNextPage}
          onPreviousPage={handlePreviousPage}
        />
      </div>
    </section>
  );
}

export default ProductReviews;
