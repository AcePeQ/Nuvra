import { AnimatePresence, motion } from "framer-motion";
import styles from "./FilterDressStyle.module.css";

type FilterDressStyleProps = {
  dressStyles: string[]

  activeValue: string | null;
  onChange: (key: string, value: string | string[]) => void;
}

function FilterDressStyle({ dressStyles, onChange, activeValue }: FilterDressStyleProps) {
  return (
    <ul className={styles.wrapper}>
      {dressStyles.map((item) => (
        <li key={item} className={`${styles.item} ${activeValue === item ? styles.active : ""}`}>
          <button onClick={() => onChange("style", item)}>
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

export default FilterDressStyle;
