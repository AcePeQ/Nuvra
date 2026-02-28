import { useQuery } from "@tanstack/react-query";
import getPromoDiscount from "../api/getPromoDiscount";

function useGetPromoDiscount(code: string) {
  const { data, isError, error, isFetching, isSuccess } = useQuery({
    queryKey: ["discount", code],
    queryFn: () => getPromoDiscount(code),
    enabled: !!code,
  });

  return { data, isError, error, isFetching, isSuccess };
}

export default useGetPromoDiscount;
