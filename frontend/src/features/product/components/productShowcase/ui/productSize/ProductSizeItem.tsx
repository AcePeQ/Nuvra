import { InputRadioListItemChildrenProps } from "../../../../../../shared/ui/inputRadioList/InputRadioList";
import { OnProductChangeState } from "../productContent/ProductContent";
import styles from "./ProductSizeItem.module.css";
import { motion } from "framer-motion";

function ProductSizeItem({
  item,
  selected,
  handleChange,
  onProductChangeState,
}: InputRadioListItemChildrenProps & {
  onProductChangeState: OnProductChangeState;
}) {
  const stringItem = String(item);

  function handleEvent(item: string | number) {
    onProductChangeState("size", stringItem);
    handleChange(item);
  }

  return (
    <label htmlFor={stringItem} className={styles.size__label}>
      <input
        checked={item === selected}
        onChange={() => handleEvent(item)}
        className={styles.size__input}
        id={stringItem}
        type="radio"
        name="size"
        value={item}
      />
      <div aria-hidden className={styles.firstBG}></div>
      <span className={styles.text}>{item}</span>

      {item === selected && (
        <motion.div
          id="sizeSelected"
          layoutId="sizeSelected"
          aria-hidden
          className={styles.size__selected}
        >
          <motion.span
            initial={{ opacity: 0.2, scale: 0.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring" }}
          >
            {item}
          </motion.span>
        </motion.div>
      )}
    </label>
  );
}

export default ProductSizeItem;
