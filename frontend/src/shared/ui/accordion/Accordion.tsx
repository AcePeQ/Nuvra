
import { useState } from "react";
import styles from "./Accordion.module.css";

export default function Accordion({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={styles.wrap}>
      {items.map((it, i) => {
        const open = i === openIndex;
        return (
          <div key={i} className={styles.item}>
            <button
              className={styles.button}
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
            >
              <span className={styles.q}>{it.q}</span>
              <span className={styles.icon}>{open ? "–" : "+"}</span>
            </button>
            {open ? <div className={styles.a}>{it.a}</div> : null}
          </div>
        );
      })}
    </div>
  );
}