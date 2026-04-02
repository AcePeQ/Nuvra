import { AnimatePresence } from "framer-motion";
import { getFilteredProducts } from "../../../../shared/utils/helpers";
import { ProductItem } from "../../../../shared/utils/types";
import ShowcaseProduct from "../../../products/components/showcaseProduct/ShowcaseProduct";
import { useShopFilters } from "../../stores/shopStore";
import FilterSort from "../shopFilters/components/filterSort/FilterSort";
import styles from "./ShopGallery.module.css";
import { motion } from "framer-motion"
import { useLocation } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";




function ShopGallery({ productsList }: { productsList: ProductItem[] }) {
  const { search } = useLocation();
  const filters = useShopFilters();
  const totalProducts = productsList.length;
  const params = new URLSearchParams(search);
  const selectedProducts = getFilteredProducts(productsList, filters, params.get("feature"));
  const countSelectedProducts = selectedProducts.length;

  return (
    <div className={styles.gallery}>
      <div className={styles.galleryHeader}>
        {filters.style &&
          <h1>{filters.style}</h1>
        }
        <FilterSort totalSelectedProducts={countSelectedProducts} totalProducts={totalProducts} />
      </div>

      <ul className={styles.list}>
        {selectedProducts.length > 0 ?
          selectedProducts.map(product =>
            <Fragment key={product.id}>
              <AnimatePresence>
                <motion.div layout exit={{ opacity: 0 }}>
                  <ShowcaseProduct item={product} />
                </motion.div>
              </AnimatePresence>
            </Fragment>)
          : <p className={styles.empty}>No products match your current filters. Try adjusting them.</p>}
      </ul>
    </div>
  );
}

export default ShopGallery;
