import styles from "./FilterCategory.module.css";

const CATEGORIES = [
  { label: "T-shirts", link: "/" },
  { label: "Shorts", link: "/" },
  { label: "Shirts", link: "/" },
  { label: "Hoodie", link: "/" },
  { label: "Jeans", link: "/" },
];

export default function FilterCategory() {
  return (
    <ul className={styles.list}>
      {CATEGORIES.map((item) => (
        <li key={item.label} className={styles.item}>
          {item.label}
        </li>
      ))}
    </ul>
  );
}
