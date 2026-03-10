import FilterSort from "../shopFilters/components/filterSort/FilterSort";
import styles from "./ShopGallery.module.css";



function ShopGallery() {
  return (
    <div className={styles.gallery}>
      <div className={styles.galleryHeader}>
        <h1>Casual</h1>
        <FilterSort />
      </div>

      <ul className={styles.list}>

      </ul>
    </div>
  );
}

export default ShopGallery;
