import styles from "./SearchResults.module.css";
import { HTMLMotionProps, motion } from "framer-motion";

import useSearchProducts from "../../hooks/useSearchProducts";
import LoaderContainer from "../../../../shared/ui/loaders/loaderContainer/LoaderContainer";
import ErrorContainer from "../../../../shared/ui/errors/errorContainer/ErrorContainer";
import { ProductItem } from "../../../../shared/utils/types";
import SearchResult from "../searchResult/SearchResult";

type Props = HTMLMotionProps<"div"> & {
  query: string;
};

function SearchResults({ query, ...props }: Props) {
  const {
    data,
    isError,
    isFetching,
    error,
  }: {
    data: ProductItem[];
    isError: boolean;
    isFetching: boolean;
    error: Error | null;
  } = useSearchProducts(query);

  return (
    <motion.div
      {...props}
      initial={{ opacity: 0, scale: 0, y: -30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0, y: -30 }}
      className={styles.searchResults}
    >
      <ul className={styles.searchResults__list}>
        {isFetching && <LoaderContainer />}
        {isError && error && <ErrorContainer message={error.message} />}
        {!isFetching &&
          !isError &&
          data.length >= 1 &&
          data.map((product) => (
            <SearchResult key={product.id} product={product} />
          ))}
        {!isFetching && !isError && data.length === 0 && (
          <li className={styles.empty}>
            No products found for "{query}". Try a different search term.
          </li>
        )}
      </ul>
    </motion.div>
  );
}

export default SearchResults;
