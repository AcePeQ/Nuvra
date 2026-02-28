import { useState } from "react";
import Rating from "../../../../../../shared/ui/raiting/Raiting";
import Separator from "../../../../../../shared/ui/separator/Separator";
import ProductColors from "../productColors/ProductColors";
import ProductCTA from "../productCTA/ProductCTA";
import ProductSize from "../productSize/ProductSize";
import styles from "./ProductContent.module.css";
import { useParams } from "react-router-dom";
import useGetSingleProduct from "../../../../hooks/useGetSingleProduct";
import { ProductItem } from "../../../../../../shared/utils/types";
import { getFormattedProductSizes } from "../../../../../../shared/utils/helpers";
import {
  CartProduct,
  useCart,
  useCartActions,
} from "../../../../../cart/store/cartStore";

export type OnProductChangeState = (
  key: string,
  value: string | number,
) => void;

export interface InitialProductState {
  color: string | null;
  size: string | null;
  quantity: number;
}

const initialProductState = {
  color: null,
  size: null,
  quantity: 1,
};

function ProductContent() {
  const { productName } = useParams();
  const { data: product }: { data: ProductItem } =
    useGetSingleProduct(productName);

  const cart = useCart();
  const { addToCart, updateQuantity } = useCartActions();

  const [productState, setProductState] =
    useState<InitialProductState>(initialProductState);


  function handleChangeProductState(
    key: string,
    value: string | number,
    direction?: number,
  ) {
    setProductState((prevState) => ({
      ...prevState,
      [key]: value,
    }));

    if (key === "quantity") {
      const cartProduct = cart.find(
        (item) =>
          item.id === product.id &&
          item.selectedColor === productState.color &&
          item.selectedSize === productState.size,
      );

      if (!cartProduct) return;

      updateQuantity(cartProduct, direction as number);
    }
  }

  function handleAddToCart() {
    const selectedColor = productState.color;
    const productQuantity = productState.quantity;
    const selectedSize = productState.size;

    if (!selectedColor || !selectedSize) return;

    const newProduct: CartProduct = {
      ...product,
      quantity: productQuantity,
      selectedColor,
      selectedSize,
    };

    addToCart(newProduct);
  }

  const productColorsArray = product.options.colors.map((item) => item.hex);
  const productSizesArray = getFormattedProductSizes(product.options.sizes);

  return (
    <div className={styles.productContent}>
      <h1 className={styles.productContent__title}>{product.name}</h1>
      <div className={styles.productContent__rating}>
        <Rating rating={+product.rating} />
        <p className={styles.productContent__ratingText}>{product.rating}/5</p>
      </div>
      <div className={styles.productContent__price}>
        <p className={styles.productContent__priceNew}>${+product.price}</p>
        {product.compare_at_price && (
          <p className={styles.productContent__priceOld}>
            ${+product.compare_at_price}
          </p>
        )}
        {product.discount_percent > 0 && (
          <p className={styles.productContent__discount}>
            -{product.discount_percent}%
          </p>
        )}
      </div>
      <Separator type="product" />
      <ProductColors
        productColors={productColorsArray}
        productState={productState}
        onChange={handleChangeProductState}
      />
      <Separator type="product" />
      <ProductSize
        productSizes={productSizesArray}
        productState={productState}
        onChange={handleChangeProductState}
      />
      <Separator type="product" />
      <ProductCTA
        productId={product.id}
        productState={productState}
        onChange={handleChangeProductState}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}

export default ProductContent;
