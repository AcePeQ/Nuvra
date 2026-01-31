import { useQuery } from "@tanstack/react-query";
import getShowcaseReviews from "../api/getShowcaseReviews";

function useGetShowcaseReviews() {
  const { data, isError, error, isLoading } = useQuery({
    queryKey: ["reviews", "showcase"],
    queryFn: getShowcaseReviews,
  });

  return { data, isError, error, isLoading };
}

export default useGetShowcaseReviews;
