import ProductShowcase from "../components/productShowcase/ProductShowcase";
import styles from "./Product.module.css";

function Product() {
  return (
    <section className={`${styles.product} container-padding`}>
      <ProductShowcase />
    </section>
  );
}

export default Product;
