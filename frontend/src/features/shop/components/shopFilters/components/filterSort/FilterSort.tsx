import { useState } from "react";
import styles from "./FilterSort.module.css";
import DropdownSelect from "../../../../../../shared/ui/dropdownSelect/DropdownSelect";
import { useSearchParams } from "react-router-dom";

const ITEMS = [
  {
    label: "Most Popular",
    value: "most-popular"
  },
  {
    label: "Lowest Price",
    value: "lowest-price"
  },
  {
    label: "Highest Price",
    value: "highest-price",
  },
  {
    label: "Best Discount",
    value: "best-discount"
  },
];

type FilterSortProps = {
  totalProducts: number;
  totalSelectedProducts: number;
}

function FilterSort({ totalProducts, totalSelectedProducts }: FilterSortProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterSort, setFilterSort] = useState(() => {
    const searchParam = searchParams.get("sort")

    if (searchParam) {
      const item = ITEMS.find(item => item.value === searchParam);
      return item;
    }

    return ITEMS[0];
  })

  function handleChangeFilter(value: string | number) {
    const item = ITEMS.find(item => item.value === value);
    if (!item) return;

    setFilterSort(item as { label: string, value: string });

    setSearchParams((searchParams) => {
      searchParams.set("sort", item.value)
      return searchParams;
    })
  }

  if (!filterSort) return;

  return (
    <div className={styles.wrapper}>
      <p>Showing {totalSelectedProducts} of {totalProducts} Products</p>
      <div className={styles.sort}>
        Sort by:
        <ul className={styles.list}>
          <DropdownSelect label={filterSort.label} items={ITEMS} onClick={handleChangeFilter} />
        </ul>
      </div>
    </div>
  );
}

export default FilterSort;
