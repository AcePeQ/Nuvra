import Button from "../../../../shared/ui/button/Button";
import Separator from "../../../../shared/ui/separator/Separator";
import FilterCategory from "./components/filterCategory/FilterCategory";
import FilterTab from "./components/filterTab/FilterTab";
import styles from "./ShopFilters.module.css";

function ShopFilters() {
  return (
    <menu className={styles.filters}>
      <div className={styles.filters_header}>
        <h2>Filters</h2>
      </div>

      <Separator type="normal" />

      <FilterCategory />

      <Separator type="normal" />

      <FilterTab tabTitle="Dress Style">
        <div>Test</div>
      </FilterTab>

      <Separator type="normal" />

      <Button>Apply Filter</Button>
    </menu>
  );
}

export default ShopFilters;
