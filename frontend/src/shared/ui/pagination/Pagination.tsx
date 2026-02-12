import { MouseEventHandler } from "react";
import styles from "./Pagination.module.css";

type PaginationProps = {
  page: number;
  totalPages: number;
  onNextPage: MouseEventHandler;
  onPreviousPage: MouseEventHandler;
};

function Pagination({
  page,
  totalPages,
  onNextPage,
  onPreviousPage,
}: PaginationProps) {
  return (
    <div className={styles.paginationWrapper}>
      <button
        className={styles.btn}
        disabled={page <= 1}
        onClick={onPreviousPage}
      >
        Prev
      </button>
      <span className={styles.page}>
        Page {page} / {totalPages}
      </span>
      <button
        className={styles.btn}
        disabled={page >= totalPages}
        onClick={onNextPage}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
