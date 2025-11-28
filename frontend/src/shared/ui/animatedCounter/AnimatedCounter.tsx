import {
  animate,
  useInView,
  useMotionValue,
  useMotionValueEvent,
} from "framer-motion";
import styles from "./AnimatedCounter.module.css";
import { useEffect, useRef } from "react";

interface AnimatedCounterProps {
  title: string;
  value: number;
}

const formatter = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 });

function AnimatedCounter({ title, value }: AnimatedCounterProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const numberRef = useRef<HTMLParagraphElement | null>(null);
  const isInView = useInView(containerRef, { once: true });
  const count = useMotionValue(0);

  useMotionValueEvent(count, "change", (latest) => {
    if (numberRef.current)
      numberRef.current.textContent = `${formatter.format(
        Math.round(latest)
      )}+`;
  });

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, value, {
      duration: 6,
      ease: [0.1, 1, 0.1, 1],
    });

    return () => controls.stop();
  }, [isInView, value, count]);

  return (
    <div ref={containerRef} className={styles.counters__item}>
      <p className={styles.counters__title}>{title}</p>
      <p ref={numberRef} className={styles.counters__number}>
        <span aria-hidden="true" ref={numberRef}>
          0+
        </span>
        <span className="sr-only">{formatter.format(value)} plus</span>
      </p>
    </div>
  );
}

export default AnimatedCounter;
