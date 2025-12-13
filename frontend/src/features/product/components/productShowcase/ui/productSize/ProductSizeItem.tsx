import styles from "./ProductSizeItem.module.css";

interface ProductSizeItemProps {
  size: string;
  selectedSize: string | null;
  handleChange: (size: string) => void;
}

function ProductSizeItem({
  size,
  selectedSize,
  handleChange,
}: ProductSizeItemProps) {
  return (
    <label htmlFor={size} className={styles.size__label}>
      <input
        checked={size === selectedSize}
        onChange={() => handleChange(size)}
        className={styles.size__input}
        id={size}
        type="radio"
        name="size"
        value={size}
      />
      {size}
    </label>
  );
}

export default ProductSizeItem;
