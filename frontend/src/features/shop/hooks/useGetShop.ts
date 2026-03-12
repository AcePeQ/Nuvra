import { useQuery } from "@tanstack/react-query";
import getShop from "../api/getShop";

function useGetShop() {
  const { data, isError, error, isFetching } = useQuery({
    queryKey: ["shop"],
    queryFn: getShop,
  });

  return { data, isError, error, isFetching };
}

export default useGetShop;
