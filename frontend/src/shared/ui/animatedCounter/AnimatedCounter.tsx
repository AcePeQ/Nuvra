import styles from "./AnimatedCounter.module.css";

interface AnimatedCounterProps {
  title: string;
  value: number;
}

function AnimatedCounter({ title, value }: AnimatedCounterProps) {
  return (
    <div className={styles.counters__item}>
      <p className={styles.counters__title}>{title}</p>
      <p className={styles.counters__number}>{value}+</p>
    </div>
  );
}

export default AnimatedCounter;
