import styles from "./ProductColors.module.css";
import InputRadioList from "../../../../../../shared/ui/inputRadioList/InputRadioList";
import ProductColorsItem from "./ProductColorsItem";

const PLACEHOLDER_COLORS = [
  "#FF0000",
  "#00FF00",
  "#0000FF",
  "#FFFF00",
  "#FF00FF",
  "#00FFFF",
];

function ProductColors() {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Select Colors</h3>
      <InputRadioList items={PLACEHOLDER_COLORS} itemKeyFn={(item) => item}>
        {(item, selected, handleChange) => (
          <ProductColorsItem
            item={item}
            selected={selected}
            handleChange={handleChange}
          />
        )}
      </InputRadioList>
    </div>
  );
}

export default ProductColors;
