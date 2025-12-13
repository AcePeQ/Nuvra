import { InputRadioListItemChildrenProps } from "../../../../../../shared/ui/inputRadioList/InputRadioList";
import styles from "./ProductSizeItem.module.css";

function ProductSizeItem({
  item,
  selected,
  handleChange,
}: InputRadioListItemChildrenProps) {
  const stringItem = String(item);

  return (
    <label htmlFor={stringItem} className={styles.size__label}>
      <input
        checked={item === selected}
        onChange={() => handleChange(item)}
        className={styles.size__input}
        id={stringItem}
        type="radio"
        name="size"
        value={item}
      />
      {item}
    </label>
  );
}

export default ProductSizeItem;
