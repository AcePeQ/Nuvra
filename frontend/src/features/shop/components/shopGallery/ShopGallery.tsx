
import { useSearchParams } from "react-router-dom";
import { ProductItem } from "../../../../shared/utils/types";
import ShowcaseProduct from "../../../products/components/showcaseProduct/ShowcaseProduct";
import FilterSort from "../shopFilters/components/filterSort/FilterSort";
import styles from "./ShopGallery.module.css";



function ShopGallery({ productsList }: { productsList: ProductItem[] }) {
  const [searchParams] = useSearchParams();
  const totalProducts = productsList.length;

  const title = searchParams.get("style");

  return (
    <div className={styles.gallery}>
      <div className={styles.galleryHeader}>
        {title &&
          <h1>{title}</h1>
        }
        <FilterSort totalProducts={totalProducts} />
      </div>

      <ul className={styles.list}>
        {productsList.map(product => <ShowcaseProduct key={product.id} item={product} />)}
      </ul>
    </div>
  );
}

export default ShopGallery;
