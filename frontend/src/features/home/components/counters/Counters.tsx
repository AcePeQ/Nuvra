import Separator from "../../../../shared/ui/separator/Separator";
import styles from "./Counters.module.css";

function Conuters() {
  return (
    <div className={styles.counters}>
      <div className={styles.counters__item}>
        <p className={styles.counters__title}>International Brands</p>
        <p className={styles.counters__number}>100+</p>
      </div>

      <Separator />

      <div className={styles.counters__item}>
        <p className={styles.counters__title}>High-Quality Products</p>
        <p className={styles.counters__number}>2,000+</p>
      </div>

      <Separator />

      <div className={styles.counters__item}>
        <p className={styles.counters__title}>Happy Customers</p>
        <p className={styles.counters__number}>30,000+</p>
      </div>
    </div>
  );
}

export default Conuters;
