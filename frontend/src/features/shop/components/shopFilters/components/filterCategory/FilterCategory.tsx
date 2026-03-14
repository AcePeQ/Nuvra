import styles from "./FilterCategory.module.css";

type FilterCategoryProps = {
  categories: string[]
}

export default function FilterCategory({ categories }: FilterCategoryProps) {
  return (
    <ul className={styles.list}>
      {categories.map((item) => (
        <li key={item} className={styles.item}>
          <button>
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
}
