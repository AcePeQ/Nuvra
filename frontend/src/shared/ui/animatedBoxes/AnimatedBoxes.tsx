import { useEffect, useState } from "react";
import styles from "./AnimatedBoxes.module.css";
import { motion } from "framer-motion";

function AnimatedBoxes() {
  const [array, setArray] = useState(
    Array.from({ length: 9 }, (_, index) => index)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setArray((prev) => {
        const next = [...prev];
        next.sort(() => Math.random() - 0.5);
        return next;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div aria-hidden className={styles.wrapper}>
      {array.map((box, index) => (
        <motion.div
          layout
          key={box}
          animate={{
            backgroundColor:
              index % 2 === 0
                ? "var(--color-bg-light)"
                : "var(--color-bg-dark)",
            rotate: index % 2 === 0 ? 360 : 0,
            scale: index % 2 === 0 ? 1 : 1.1,
          }}
          transition={{
            type: "spring",
            duration: 1,
            bounce: 0.2,
          }}
          className={styles.box}
        />
      ))}
    </motion.div>
  );
}

export default AnimatedBoxes;
