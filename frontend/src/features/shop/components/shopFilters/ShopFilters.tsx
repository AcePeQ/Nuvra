import Button from "../../../../shared/ui/button/Button";
import Separator from "../../../../shared/ui/separator/Separator";
import FilterCategory from "./components/filterCategory/FilterCategory";
import FilterColors from "./components/filterColors/FilterColors";
import FilterDressStyle from "./components/filterDressStyle/FilterDressStyle";
import FilterPrice from "./components/filterPrice/FilterPrice";
import FilterSize from "./components/filterSize/FilterSize";
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

      <FilterTab tabTitle="Price">
        <FilterPrice />
      </FilterTab>

      <Separator type="normal" />

      <FilterTab tabTitle="Colors">
        <FilterColors />
      </FilterTab>

      <Separator type="normal" />

      <FilterTab tabTitle="Sizes">
        <FilterSize />
      </FilterTab>

      <Separator type="normal" />

      <FilterTab tabTitle="Dress Style">
        <FilterDressStyle />
      </FilterTab>

      <Separator type="normal" />

      <Button>Apply Filter</Button>
    </menu>
  );
}

export default ShopFilters;
