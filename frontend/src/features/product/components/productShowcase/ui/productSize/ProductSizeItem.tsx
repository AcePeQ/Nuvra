import styles from "./ProductSizeItem.module.css";

interface ProductSizeItemProps {
  item: string;
  selectedItem: string | null;
  handleChange: (size: string) => void;
}

function ProductSizeItem({
  item,
  selectedItem,
  handleChange,
}: ProductSizeItemProps) {
  return (
    <label htmlFor={item} className={styles.size__label}>
      <input
        checked={item === selectedItem}
        onChange={() => handleChange(item)}
        className={styles.size__input}
        id={item}
        type="radio"
        name="size"
        value={item}
      />
      {item}
    </label>
  );
}

export default ProductSizeItem;
