import { AnimatePresence, motion } from "framer-motion";
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

            <AnimatePresence mode="wait">
              {item === activeValue &&
                <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} exit={{ width: 0 }} className={styles.underline} aria-hidden />
              }
            </AnimatePresence>
          </button>
        </li>
      ))}
    </ul>
  );
}
