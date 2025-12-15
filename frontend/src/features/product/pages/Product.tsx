import ProductShowcase from "../components/productShowcase/ProductShowcase";
import ProductReviews from "../components/productShowcase/ui/productReviews/ProductReviews";
import styles from "./Product.module.css";

function Product() {
  return (
    <section className={`${styles.product} container-padding`}>
      <ProductShowcase />
      <ProductReviews />
    </section>
  );
}

export default Product;
