import Button from "../../../../../../shared/ui/button/Button";
import Counter from "../../../../../../shared/ui/counter/Counter";
import styles from "./ProductCTA.module.css";

function ProductCTA() {
  return (
    <div className={styles.productsCTA}>
      <Counter defaultValue={0} className="product" />
      <Button
        type="button"
        buttonSize="normal"
        buttonStyle="primary"
        label="Add to cart"
      >
        Add to Cart
      </Button>
    </div>
  );
}

export default ProductCTA;
