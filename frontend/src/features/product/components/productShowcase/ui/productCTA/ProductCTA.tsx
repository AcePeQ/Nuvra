import Button from "../../../../../../shared/ui/button/Button";
import Counter from "../../../../../../shared/ui/counter/Counter";
import {
  InitialProductState,
  OnProductChangeState,
} from "../productContent/ProductContent";
import styles from "./ProductCTA.module.css";

function ProductCTA({
  productState,
  onChange,
}: {
  productState: InitialProductState;
  onChange: OnProductChangeState;
}) {
  return (
    <div className={styles.productsCTA}>
      <Counter
        defaultValue={productState.quantity}
        className="product"
        onChange={onChange}
      />
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
