import { getFilteredProducts } from "../../../../shared/utils/helpers";
import { ProductItem } from "../../../../shared/utils/types";
import ShowcaseProduct from "../../../products/components/showcaseProduct/ShowcaseProduct";
import { useShopFilters } from "../../stores/shopStore";
import FilterSort from "../shopFilters/components/filterSort/FilterSort";
import styles from "./ShopGallery.module.css";



function ShopGallery({ productsList }: { productsList: ProductItem[] }) {
  const filters = useShopFilters();
  const totalProducts = productsList.length;
  const selectedProducts = getFilteredProducts(productsList, filters)

  return (
    <div className={styles.gallery}>
      <div className={styles.galleryHeader}>
        <FilterSort totalProducts={totalProducts} />
      </div>

      <ul className={styles.list}>
        {selectedProducts.map(product => <ShowcaseProduct key={product.id} item={product} />)}
      </ul>
    </div>
  );
}

export default ShopGallery;
