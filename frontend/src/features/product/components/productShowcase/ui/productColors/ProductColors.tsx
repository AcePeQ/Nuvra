import styles from "./ProductColors.module.css";
import InputRadioList from "../../../../../../shared/ui/inputRadioList/InputRadioList";
import ProductColorsItem from "./ProductColorsItem";
import {
  InitialProductState,
  OnProductChangeState,
} from "../productContent/ProductContent";

const PLACEHOLDER_COLORS = [
  "#FF0000",
  "#00FF00",
  "#0000FF",
  "#FFFF00",
  "#FF00FF",
  "#00FFFF",
];

function ProductColors({
  productState,
  onChange,
}: {
  productState: InitialProductState;
  onChange: OnProductChangeState;
}) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Select Colors</h3>
      <InputRadioList
        items={PLACEHOLDER_COLORS}
        defaultValue={productState.color}
        itemKeyFn={(item) => item}
      >
        {(item, selected, handleChange) => (
          <ProductColorsItem
            item={item}
            selected={selected}
            handleChange={handleChange}
            onProductChangeState={onChange}
          />
        )}
      </InputRadioList>
    </div>
  );
}

export default ProductColors;
