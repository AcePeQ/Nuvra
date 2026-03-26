import { ProductItem } from "../../../../shared/utils/types";
import ShowcaseProduct from "../../../products/components/showcaseProduct/ShowcaseProduct";
import { ShopFiltersState, useShopFilters } from "../../stores/shopStore";
import FilterSort from "../shopFilters/components/filterSort/FilterSort";
import styles from "./ShopGallery.module.css";

function getFilteredProducts(products: ProductItem[], filters: ShopFiltersState) {
  let newProductArray = [...products];

  if (filters.color) {

  }

  if (filters.price) {
    newProductArray = newProductArray.filter(product => filters.price && (+product.price < +filters.price[0] && +product.price > +(filters.price[1])))
  }

  if (filters.size) {

  }

  if (filters.sort) {

  }

  if (filters.style) {
    newProductArray = newProductArray.filter(product => filters.style === product.details.style)
  }

  if (filters.type) {
    newProductArray = newProductArray.filter(product => filters.type === product.subcategory)
  }

  return newProductArray;
}

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
        {productsList.map(product => <ShowcaseProduct key={product.id} item={product} />)}
      </ul>
    </div>
  );
}

export default ShopGallery;
