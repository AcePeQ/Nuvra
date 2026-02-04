import styles from "./ProductSize.module.css";
import InputRadioList from "../../../../../../shared/ui/inputRadioList/InputRadioList";
import ProductSizeItem from "./ProductSizeItem";
import {
  InitialProductState,
  OnProductChangeState,
} from "../productContent/ProductContent";

function ProductSize({
  productSizes,
  productState,
  onChange,
}: {
  productState: InitialProductState;
  onChange: OnProductChangeState;
  productSizes: string[];
}) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Choose Size</h3>
      <InputRadioList
        items={productSizes}
        defaultValue={productState.size}
        itemKeyFn={(item) => item as string}
      >
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
