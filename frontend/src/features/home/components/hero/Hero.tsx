import Button from "../../../../shared/ui/button/Button";
import Conuters from "../counters/Counters";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import styles from "./Hero.module.css";
import { useTopbarHeaderHeight } from "../../../../shared/stores/topbarStore";
import { useEffect } from "react";

function Hero() {
  const headerHeight = useTopbarHeaderHeight();
  const height = useMotionValue(headerHeight);
  const offset = useSpring(height, { bounce: 0 });

  useEffect(() => {
    height.set(headerHeight);
  }, [headerHeight, height]);

  const h = useMotionTemplate`calc(100dvh - ${offset}px)`;

  return (
    <motion.section
      layout
      style={{ height: h }}
      className={`container container-padding ${styles.hero}`}
    >
      <div className={styles.hero__content}>
        <h1 className={styles.hero__title}>
          Find clothes that matches your style
        </h1>
        <p className={styles.hero__description}>
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>

        <Button aria-label="Show Now" onClick={() => {}} onKeyDown={() => {}}>
          Shop Now
        </Button>

        <Conuters />
      </div>
    </motion.section>
  );
}

export default Hero;
