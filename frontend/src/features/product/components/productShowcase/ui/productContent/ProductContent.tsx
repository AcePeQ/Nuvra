import Rating from "../../../../../../shared/ui/raiting/Raiting";
import ProductColors from "../productColors/ProductColors";
import ProductCTA from "../productCTA/ProductCTA";
import ProductSize from "../productSize/ProductSize";
import styles from "./ProductContent.module.css";

function ProductContent() {
  return (
    <div className={styles.productContent}>
      <h1 className={styles.productContent__title}>Product title</h1>
      <div className={styles.productContent__rating}>
        <Rating rating={5} />
        <p className={styles.productContent__ratingText}>4.5/5</p>
      </div>
      <div className={styles.productContent__price}>
        <p className={styles.productContent__priceNew}>$260</p>
        <p className={styles.productContent__priceOld}>$300</p>
        <p className={styles.productContent__discount}>-40%</p>
      </div>
      <p className={styles.productContent__description}></p>

      <ProductColors />
      <ProductSize />
      <ProductCTA />
    </div>
  );
}

export default ProductContent;
