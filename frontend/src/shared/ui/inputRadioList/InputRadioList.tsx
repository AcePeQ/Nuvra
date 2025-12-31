import React, { useState } from "react";
import styles from "./InputRadioList.module.css";

export interface InputRadioListItemChildrenProps {
  item: string | number;
  selected: string | number | null;
  handleChange: (value: string | number) => void;
}

interface InputRadioListItemProps {
  items: Array<string | number>;
  itemKeyFn: (item: string | number) => React.Key;
  defaultValue?: string | number | null;
  children: (
    item: string | number,
    selected: string | number | null,
    handleChange: (value: string | number) => void
  ) => React.ReactNode;
}

function InputRadioList({
  items,
  itemKeyFn,
  defaultValue = null,
  children,
}: InputRadioListItemProps) {
  const [selected, setSelected] = useState<string | number | null>(
    defaultValue
  );

  function handleChange(value: string | number) {
    setSelected((prev) => (prev === value ? null : value));
  }

  return (
    <ol className={styles.list}>
      {items.map((item) => (
        <li key={itemKeyFn(item)} className={styles.list__item}>
          {children(item, selected, handleChange)}
        </li>
      ))}
    </ol>
  );
}

export default InputRadioList;
