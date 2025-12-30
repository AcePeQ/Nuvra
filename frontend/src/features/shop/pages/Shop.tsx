import Breadcrumbs from "../../../shared/ui/breadcrumbs/Breadcrumbs";
import styles from "./Shop.module.css";

function Shop() {
  return (
    <section className={`container container-padding ${styles.shopSection}`}>
      <Breadcrumbs />

      <div className={styles.contentWrapper}>
        <div>Filters</div>
      </div>
    </section>
  );
}

export default Shop;
