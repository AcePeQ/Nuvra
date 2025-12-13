import { useState } from "react";
import styles from "./InputRadioList.module.css";

function InputRadioList({ items, itemKeyFn, children }) {
  const [selected, setSelected] = useState<string | number | null>(null);

  function handleChange(value: string | number) {
    setSelected(value);
  }

  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={itemKeyFn(item)} className={styles.list__item}>
          {children(item, selected, handleChange)}
        </li>
      ))}
    </ul>
  );
}

export default InputRadioList;
