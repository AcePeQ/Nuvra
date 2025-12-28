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
    <motion.div className={styles.wrapper}>
      {array.map((box) => (
        <motion.div layout key={box} className={styles.box} />
      ))}
    </motion.div>
  );
}

export default AnimatedBoxes;
