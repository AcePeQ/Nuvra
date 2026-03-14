import { useQuery } from "@tanstack/react-query"
import checkSession from "../api/checkSession"

function useVerifySession() {
  const { data, isError, isPending } = useQuery({
    queryKey: ["auth"],
    queryFn: checkSession,
    retry: false,
    staleTime: 60000,
    refetchOnReconnect: true,
    refetchOnWindowFocus: true,

  })

  return { data, isError, isPending }
}

export default useVerifySession