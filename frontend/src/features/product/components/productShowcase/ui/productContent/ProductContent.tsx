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
  const { data: product }: { data: ProductItem } = useGetSingleProduct(
    productName ?? "",
  );

  const [productState, setProductState] =
    useState<InitialProductState>(initialProductState);

  function handleChangeProductState(key: string, value: string | number) {
    setProductState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  }

  console.log(product);

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
        productState={productState}
        onChange={handleChangeProductState}
      />
    </div>
  );
}

export default ProductContent;
