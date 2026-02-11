import { useQuery } from "@tanstack/react-query";
import getProductReviews from "../api/getProductReviews";

function useGetReviewProduct(id: string) {
  const {
    data,
    isError,
    error,
    isFetching: isLoading,
  } = useQuery({
    queryKey: ["review", id],
    queryFn: () => getProductReviews(id),
  });

  return { data, isError, error, isLoading };
}

export default useGetReviewProduct;
