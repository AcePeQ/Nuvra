import { useQuery } from "@tanstack/react-query";
import getSingleProduct from "../api/getSingleProduct";

function useGetSingleProduct(name?: string) {
  const {
    data,
    isError,
    error,
    isFetching: isLoading,
  } = useQuery({
    queryKey: ["product", name],
    queryFn: () => getSingleProduct(name),
    enabled: !!name,
  });

  return { data, isError, error, isLoading };
}

export default useGetSingleProduct;
