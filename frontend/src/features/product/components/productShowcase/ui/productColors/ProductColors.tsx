import styles from "./ProductColors.module.css";
import InputRadioList from "../../../../../../shared/ui/inputRadioList/InputRadioList";
import ProductColorsItem from "./ProductColorsItem";
import {
  InitialProductState,
  OnProductChangeState,
} from "../productContent/ProductContent";

function ProductColors({
  productState,
  onChange,
  productColors,
}: {
  productState: InitialProductState;
  onChange: OnProductChangeState;
  productColors: string[];
}) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Select Colors</h3>
      <InputRadioList
        items={productColors}
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
