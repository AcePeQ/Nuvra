import styles from "./ProductSize.module.css";
import InputRadioList from "../../../../../../shared/ui/inputRadioList/InputRadioList";
import ProductSizeItem from "./ProductSizeItem";
import { OnProductChangeState } from "../productContent/ProductContent";

const SIZES = ["Small", "Medium", "Large", "X-Large"];

function ProductSize({ onChange }: { onChange: OnProductChangeState }) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Choose Size</h3>
      <InputRadioList items={SIZES} itemKeyFn={(item) => item as string}>
        {(item, selected, handleChange) => (
          <ProductSizeItem
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

export default ProductSize;
