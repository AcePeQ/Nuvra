import Breadcrumbs from "../../../../shared/ui/breadcrumbs/Breadcrumbs";
import styles from "./ProductShowcase.module.css";
import ProductContent from "./ui/productContent/ProductContent";
import ProductGallery from "./ui/productGallery/ProductGallery";

function ProductShowcase() {
  return (
    <article className={styles.productShowcase}>
      <Breadcrumbs />
      <ProductGallery />
      <ProductContent />
    </article>
  );
}

export default ProductShowcase;
