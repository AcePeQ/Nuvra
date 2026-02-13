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
    data,
    error,
    isError,
    isPending,
  }: {
    data: { reviews: ReviewItem[]; totalReviews: number; totalPages: number };
    error: Error | null;
    isError: boolean;
    isPending: boolean;
  } = useGetReviewProduct(productId, page, pageSize);

  if (isPending) {
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

  const reviewsItems = data?.reviews ?? [];
  const totalReviews = data?.totalReviews ?? 0;
  const totalPages = data?.totalPages ?? 1;

  return (
    <section className={styles.reviews__section}>
      <div className={styles.reviews__header}>
        <h2 className={styles.title}>
          All Reviews <span className={styles.count}>({totalReviews})</span>
        </h2>

        <Button type="button">Write a Review</Button>
      </div>

      <div className={styles.reviews__container}>
        <ul className={styles.reviews__list}>
          {reviewsItems.map((review) => (
            <ProductReview key={review.id} review={review} />
          ))}
        </ul>
        <Pagination
          page={page}
          totalPages={totalPages}
          onNextPage={handleNextPage}
          onPreviousPage={handlePreviousPage}
          isButtonDisabled={isPending}
        />
      </div>
    </section>
  );
}

export default ProductReviews;
