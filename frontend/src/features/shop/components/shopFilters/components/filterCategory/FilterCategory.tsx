import styles from "./FilterCategory.module.css";

type FilterCategoryProps = {
  categories: string[]

  activeValue: string | null;
  onChange: (key: string, value: string | string[]) => void;
}

export default function FilterCategory({ categories, onChange, activeValue }: FilterCategoryProps) {
  return (
    <ul className={styles.list}>
      {categories.map((item) => (
        <li key={item} className={`${styles.item} ${item === activeValue ? styles.active : ""}`}>
          <button onClick={() => onChange("type", item)}>
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
}
