import Breadcrumbs from "../../../shared/ui/breadcrumbs/Breadcrumbs";
import ProductsShowcase from "../../products/components/productsShowcase/ProductsShowcase";
import ProductShowcase from "../components/productShowcase/ProductShowcase";
import ProductTabs from "../components/productTabs/ProductTabs";
import styles from "./Product.module.css";

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

function Product() {
  return (
    <section className={`${styles.product} container-padding`}>
      <ProductShowcase />
      <ProductTabs />
      <ProductsShowcase
        title="You might also like"
        items={PLACEHOLDER}
        sectionClassname="product_item"
      />
    </section>
  );
}

export default Product;
