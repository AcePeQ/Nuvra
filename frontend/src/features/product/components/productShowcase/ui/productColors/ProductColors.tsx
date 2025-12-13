import { useState } from "react";
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
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Select Colors</h3>
      <ul className={styles.colors}>
        <InputRadioList items={PLACEHOLDER_COLORS} itemKeyFn={(item) => item}>
          {(item, selected, handleChange) => (
            <ProductColorsItem
              color={item}
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
            />
          )}
        </InputRadioList>
      </ul>
    </div>
  );
}

export default ProductColors;
