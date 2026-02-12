import { keepPreviousData, useQuery } from "@tanstack/react-query";
import getProductReviews from "../api/getProductReviews";

function useGetReviewProduct(id: string, page: number, pageSize: number) {
  const { data, isError, error, isFetching, isPending } = useQuery({
    queryKey: ["review", id, page, pageSize],
    queryFn: () => getProductReviews(id, page, pageSize),
    placeholderData: keepPreviousData,
  });

  return { data, isError, error, isFetching, isPending };
}

export default useGetReviewProduct;
