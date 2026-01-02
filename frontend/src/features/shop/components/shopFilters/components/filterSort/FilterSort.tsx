import DropdownLink from "../../../../../../shared/ui/dropdownLink/DropdownLink";
import styles from "./FilterSort.module.css";

const ITEMS = [
  {
    label: "Most Popular",
    href: "/shop?=casual",
  },
  {
    label: "Lowest Price",
    href: "/shop?=formal",
  },
  {
    label: "Highest Price",
    href: "/shop?=party",
  },
  {
    label: "Best Discount",
    href: "/shop?=gym",
  },
];

function FilterSort() {
  return (
    <div className={styles.wrapper}>
      <p>Showing 1-10 of 100 Products</p>
      <div className={styles.sort}>
        Sort by:
        <ul className={styles.list}>
          <DropdownLink label="Most Popular" isLink={false} items={ITEMS} />
        </ul>
      </div>
    </div>
  );
}

export default FilterSort;
