import { useId, useState } from "react";
import SearchResults from "../searchResults/SearchResults";
import styles from "./Search.module.css";
import { AnimatePresence } from "framer-motion";
import useMediaQuery from "../../../../shared/hooks/useMediaQuery";

function Search() {
  const [query, setQuery] = useState<string>("");
  const [showResults, setShowResults] = useState(false);
  const resultsId = useId();
  const isTablet = useMediaQuery("(max-width: 1070px)");

  return (
    <form
      className={styles.form}
      aria-haspopup="true"
      aria-expanded={showResults && query.length > 0}
      aria-controls={resultsId}
    >
      <button
        aria-label="Search for product"
        className={`${styles.button} ${styles.button__search}`}
        type="submit"
      >
        <svg
          className={styles.icon}
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            d="M19.9399 18.348L15.4877 13.8939C16.8226 12.1544 17.4458 9.97216 17.2309 7.78998C17.0161 5.60781 15.9792 3.58907 14.3306 2.14328C12.6821 0.697486 10.5453 -0.0670986 8.35376 0.00462578C6.16221 0.0763502 4.07999 0.979013 2.5295 2.5295C0.979013 4.07999 0.0763502 6.16221 0.00462578 8.35376C-0.0670986 10.5453 0.697486 12.6821 2.14328 14.3306C3.58907 15.9792 5.60781 17.0161 7.78998 17.2309C9.97216 17.4458 12.1544 16.8226 13.8939 15.4877L18.3499 19.9445C18.4545 20.0492 18.5787 20.1322 18.7155 20.1888C18.8522 20.2455 18.9987 20.2746 19.1467 20.2746C19.2947 20.2746 19.4413 20.2455 19.578 20.1888C19.7147 20.1322 19.839 20.0492 19.9436 19.9445C20.0482 19.8399 20.1313 19.7157 20.1879 19.5789C20.2445 19.4422 20.2737 19.2957 20.2737 19.1477C20.2737 18.9997 20.2445 18.8531 20.1879 18.7164C20.1313 18.5797 20.0482 18.4554 19.9436 18.3508L19.9399 18.348ZM2.26891 8.64392C2.26891 7.38306 2.6428 6.15052 3.3433 5.10215C4.04379 4.05379 5.03943 3.23669 6.20431 2.75418C7.36919 2.27167 8.65099 2.14543 9.88762 2.39141C11.1242 2.63739 12.2602 3.24455 13.1517 4.13611C14.0433 5.02767 14.6504 6.16359 14.8964 7.40021C15.1424 8.63684 15.0162 9.91864 14.5336 11.0835C14.0511 12.2484 13.234 13.244 12.1857 13.9445C11.1373 14.645 9.90477 15.0189 8.64392 15.0189C6.95369 15.0172 5.3332 14.345 4.13803 13.1498C2.94286 11.9546 2.27065 10.3341 2.26891 8.64392Z"
            fill="currentColor"
          />
        </svg>
      </button>
      <input
        className={styles.input}
        onFocus={() => setShowResults(true)}
        onBlur={() => setShowResults(false)}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="Search for products..."
      />

      {query?.length > 0 && (
        <button
          aria-label="Clear input"
          type="button"
          className={`${styles.button} ${styles.button__clear}`}
          onClick={() => setQuery("")}
        >
          <svg
            className={styles.icon}
            aria-hidden
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.8532 11.5274C13.0293 11.7035 13.1283 11.9424 13.1283 12.1915C13.1283 12.4405 13.0293 12.6794 12.8532 12.8555C12.6771 13.0317 12.4382 13.1306 12.1891 13.1306C11.9401 13.1306 11.7012 13.0317 11.5251 12.8555L6.56491 7.89381L1.60319 12.854C1.42707 13.0301 1.1882 13.129 0.939126 13.129C0.690054 13.129 0.451184 13.0301 0.275064 12.854C0.0989435 12.6778 3.71146e-09 12.439 0 12.1899C-3.71146e-09 11.9408 0.0989435 11.702 0.275064 11.5258L5.23678 6.56569L0.276626 1.60397C0.100506 1.42785 0.00156253 1.18898 0.00156254 0.939907C0.00156254 0.690836 0.100506 0.451965 0.276626 0.275845C0.452746 0.0997246 0.691617 0.000781121 0.940688 0.000781119C1.18976 0.000781116 1.42863 0.0997246 1.60475 0.275845L6.56491 5.23756L11.5266 0.275063C11.7027 0.0989432 11.9416 -4.14954e-09 12.1907 0C12.4398 4.14954e-09 12.6786 0.0989432 12.8547 0.275063C13.0309 0.451184 13.1298 0.690054 13.1298 0.939126C13.1298 1.1882 13.0309 1.42707 12.8547 1.60319L7.89303 6.56569L12.8532 11.5274Z"
              fill="currentColor"
            />
          </svg>
        </button>
      )}

      <AnimatePresence>
        {query?.length && showResults && !isTablet && (
          <SearchResults query={query} id={resultsId} />
        )}
      </AnimatePresence>
    </form>
  );
}

export default Search;
