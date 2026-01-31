import { useQuery } from "@tanstack/react-query";
import getShowcaseProducts from "../api/getShowcaseProducts";

function useGetShowcaseProducts() {
  const {
    data,
    isFetching: isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["products", "showcase"],
    queryFn: getShowcaseProducts,
  });

  return { data, isLoading, isError, error };
}

export default useGetShowcaseProducts;
