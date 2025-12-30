import Breadcrumbs from "../../../shared/ui/breadcrumbs/Breadcrumbs";
import ShopFilters from "../components/shopFilters/ShopFilters";
import ShopGallery from "../components/shopGallery/ShopGallery";
import styles from "./Shop.module.css";

function Shop() {
  return (
    <section className={`container container-padding ${styles.shopSection}`}>
      <Breadcrumbs />

      <div className={styles.contentWrapper}>
        <ShopFilters />
        <ShopGallery />
      </div>
    </section>
  );
}

export default Shop;
