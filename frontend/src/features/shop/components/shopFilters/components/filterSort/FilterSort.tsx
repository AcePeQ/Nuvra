import { useState } from "react";
import styles from "./FilterSort.module.css";
import DropdownSelect from "../../../../../../shared/ui/dropdownSelect/DropdownSelect";

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

function FilterSort() {
  const [filterSort, setFilterSort] = useState(ITEMS[0])

  function handleChangeFilter(value: string | number) {
    const item = ITEMS.find(item => item.value === value);

    setFilterSort(item as { label: string, value: string });
  }

  return (
    <div className={styles.wrapper}>
      <p>Showing 1-10 of 100 Products</p>
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
