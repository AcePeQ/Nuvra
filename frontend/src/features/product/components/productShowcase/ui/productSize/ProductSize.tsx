import { useState } from "react";
import styles from "./ProductSize.module.css";
import { motion } from "framer-motion";

const SIZES = ["Small", "Medium", "Large", "X-Large"];

function ProductSize() {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Choose Size</h3>
      <ul className={styles.sizes}>
        {SIZES.map((size) => (
          <li key={size} className={styles.size}>
            <label htmlFor={size} className={styles.size__label}>
              <input
                checked={size === selectedSize}
                onChange={() => setSelectedSize(size)}
                className={styles.size__input}
                id={size}
                type="radio"
                name="size"
                value={size}
              />
              {size}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductSize;
