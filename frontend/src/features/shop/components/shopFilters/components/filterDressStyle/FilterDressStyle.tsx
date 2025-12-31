import styles from "./FilterDressStyle.module.css";

const PLACEHOLDER = [
  { id: 1, title: "Casual" },
  { id: 2, title: "Formal" },
  { id: 3, title: "Party" },
  { id: 4, title: "Gym" },
];

function FilterDressStyle() {
  return (
    <ul className={styles.wrapper}>
      {PLACEHOLDER.map((item) => (
        <li key={item.id} className={styles.item}>
          {item.title}
        </li>
      ))}
    </ul>
  );
}

export default FilterDressStyle;
