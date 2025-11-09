import AnimatedCounter from "../../../../shared/ui/animatedCounter/AnimatedCounter";
import Separator from "../../../../shared/ui/separator/Separator";
import styles from "./Counters.module.css";

function Conuters() {
  return (
    <div className={styles.counters}>
      <AnimatedCounter title="International Brands" value={200} />
      <Separator />
      <AnimatedCounter title="High-Quality Products" value={2000} />
      <Separator />
      <AnimatedCounter title="Happy Customers" value={30000} />
    </div>
  );
}

export default Conuters;
