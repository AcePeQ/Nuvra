import ProductShowcase from "../components/productShowcase/ProductShowcase";
import ProductTabs from "../components/productTabs/ProductTabs";
import styles from "./Product.module.css";

function Product() {
  return (
    <section className={`${styles.product} container-padding`}>
      <ProductShowcase />
      <ProductTabs />
    </section>
  );
}

export default Product;
