import ShowcaseProduct from "../../../products/components/showcaseProduct/ShowcaseProduct";
import FilterSort from "../shopFilters/components/filterSort/FilterSort";
import styles from "./ShopGallery.module.css";

const PLACEHOLDER = [
  {
    id: 1,
    name: "T-shirt with Tape Details",
    img: "/src/assets/images/placeholders/searchPlaceholder2.png",
    rating: 3,
    currentPrice: 240,
    originalPrice: 260,
    discount: 20,
  },
  {
    id: 2,
    name: "T-shirt with Tape Details",
    img: "/src/assets/images/placeholders/searchPlaceholder2.png",
    rating: 3.5,
    currentPrice: 240,
    originalPrice: 260,
    discount: 20,
  },
  {
    id: 3,
    name: "T-shirt with Tape Details",
    img: "/src/assets/images/placeholders/searchPlaceholder2.png",
    rating: 5,
    currentPrice: 240,
    originalPrice: 260,
    discount: 20,
  },
  {
    id: 4,
    name: "T-shirt with Tape Details",
    img: "/src/assets/images/placeholders/searchPlaceholder2.png",
    rating: 4,
    currentPrice: 240,
    originalPrice: 260,
    discount: 20,
  },
  {
    id: 5,
    name: "T-shirt with Tape Details",
    img: "/src/assets/images/placeholders/searchPlaceholder2.png",
    rating: 4,
    currentPrice: 240,
    originalPrice: 260,
    discount: 20,
  },
];

function ShopGallery() {
  return (
    <div className={styles.gallery}>
      <div className={styles.galleryHeader}>
        <h1>Casual</h1>
        <FilterSort />
      </div>

      <ul className={styles.list}>
        {PLACEHOLDER.map((item) => (
          <ShowcaseProduct item={item} productsLength={PLACEHOLDER.length} />
        ))}
      </ul>
    </div>
  );
}

export default ShopGallery;
