
import { ProductItem } from "../../../../shared/utils/types";
import ShowcaseProduct from "../../../products/components/showcaseProduct/ShowcaseProduct";
import FilterSort from "../shopFilters/components/filterSort/FilterSort";
import styles from "./ShopGallery.module.css";



function ShopGallery({ productsList }: { productsList: ProductItem[] }) {
  const totalProducts = productsList.length;


  return (
    <div className={styles.gallery}>
      <div className={styles.galleryHeader}>
        <h1></h1>
        <FilterSort totalProducts={totalProducts} />
      </div>

      <ul className={styles.list}>
        {productsList.map(product => <ShowcaseProduct item={product} />)}
      </ul>
    </div>
  );
}

export default ShopGallery;
