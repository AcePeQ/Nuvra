import { useQuery } from "@tanstack/react-query";
import getSearchProduct from "../api/getSearchProduct";

function useSearchProducts(query: string) {
  const { data, isError, error, isFetching } = useQuery({
    queryKey: ["product", query],
    queryFn: ({ signal }) => getSearchProduct(query, signal),
    enabled: !!query,
  });

  return { data, isError, error, isFetching };
}

export default useSearchProducts;
