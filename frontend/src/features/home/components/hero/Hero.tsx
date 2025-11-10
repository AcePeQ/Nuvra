import Button from "../../../../shared/ui/button/Button";
import Conuters from "../counters/Counters";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import { useTopbarIsOpen } from "../../../../shared/stores/topbarStore";

function Hero() {
  const isTopbarOpen = useTopbarIsOpen();

  return (
    <motion.section
      layout
      animate={{ height: isTopbarOpen ? "auto" : "100%" }}
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

        <Button onClick={() => {}} onKeyDown={() => {}}>
          Shop Now
        </Button>

        <Conuters />
      </div>
    </motion.section>
  );
}

export default Hero;
