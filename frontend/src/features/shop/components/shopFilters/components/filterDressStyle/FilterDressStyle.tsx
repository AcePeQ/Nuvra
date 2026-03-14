import styles from "./FilterDressStyle.module.css";

type FilterDressStyleProps = {
  dressStyles: string[]
}

function FilterDressStyle({ dressStyles }: FilterDressStyleProps) {
  return (
    <ul className={styles.wrapper}>
      {dressStyles.map((item) => (
        <li key={item} className={styles.item}>
          <button>
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default FilterDressStyle;
