import { InputRadioListItemChildrenProps } from "../../../../../../shared/ui/inputRadioList/InputRadioList";
import styles from "./ProductSizeItem.module.css";
import { motion } from "framer-motion";

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
            initial={{ opacity: 0, scale: 0 }}
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
