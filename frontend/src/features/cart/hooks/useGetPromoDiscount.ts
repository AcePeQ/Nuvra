import { useQuery } from "@tanstack/react-query";
import getPromoDiscount from "../api/getPromoDiscount";


function useGetPromoDiscount(code: string) {
  const {
    data,
    isError,
    error,
    isFetching: isLoading,
  } = useQuery({
    queryKey: ["product", code],
    queryFn: () => getPromoDiscount(code),
    enabled: !!code,
  });

  return { data, isError, error, isLoading };
}

export default useGetPromoDiscount;
