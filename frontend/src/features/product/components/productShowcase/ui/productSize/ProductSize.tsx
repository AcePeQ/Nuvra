import styles from "./ProductSize.module.css";
import InputRadioList from "../../../../../../shared/ui/inputRadioList/InputRadioList";
import ProductSizeItem from "./ProductSizeItem";

const SIZES = ["Small", "Medium", "Large", "X-Large"];

function ProductSize() {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Choose Size</h3>
      <ul className={styles.sizes}>
        <InputRadioList items={SIZES} itemKeyFn={(item) => item}>
          {(item, selected, handleChange) => (
            <ProductSizeItem
              size={item}
              selectedSize={selected}
              handleChange={handleChange}
            />
          )}
        </InputRadioList>
      </ul>
    </div>
  );
}

export default ProductSize;
