import styles from "./FilterDressStyle.module.css";

type FilterDressStyleProps = {
  dressStyles: string[]

  activeValue: string | null;
  onChange: (key: string, value: string | number[]) => void;
}

function FilterDressStyle({ dressStyles, onChange, activeValue }: FilterDressStyleProps) {
  return (
    <ul className={styles.wrapper}>
      {dressStyles.map((item) => (
        <li key={item} className={`${styles.item} ${activeValue === item ? styles.active : ""}`}>
          <button onClick={() => onChange("filterStyle", item)}>
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default FilterDressStyle;
