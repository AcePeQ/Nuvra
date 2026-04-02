import { useQuery } from "@tanstack/react-query";
import getSearchData from "../api/getSearchData";

function useSearchData(query: string) {
  const { data, isError, error, isFetching } = useQuery({
    queryKey: ["search-page", query],
    queryFn: ({ signal }) => getSearchData(query, signal),
    enabled: !!query,
  });

  return { data, isError, error, isFetching };
}

export default useSearchData;
