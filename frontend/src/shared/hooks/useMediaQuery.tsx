import { useEffect, useState } from "react";

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState<boolean>(
    () => window.matchMedia(query).matches
  );

  useEffect(() => {
    const mql = window.matchMedia(query);

    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);

    mql.addEventListener("change", listener);

    return () => mql.removeEventListener("change", listener);
  }, [query]);

  return matches;
}

export default useMediaQuery;
