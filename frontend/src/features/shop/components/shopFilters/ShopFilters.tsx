import Separator from "../../../../shared/ui/separator/Separator";
import styles from "./ShopFilters.module.css";

function ShopFilters() {
  return (
    <menu className={styles.filters}>
      <div className={styles.filters_header}>
        <h2>Filters</h2>
      </div>

      <Separator type="normal" />

      <div>Test</div>
    </menu>
  );
}

export default ShopFilters;
