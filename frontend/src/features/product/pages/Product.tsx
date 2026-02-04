import { useParams } from "react-router-dom";
import ProductsShowcase from "../../products/components/productsShowcase/ProductsShowcase";
import ProductShowcase from "../components/productShowcase/ProductShowcase";
import ProductTabs from "../components/productTabs/ProductTabs";
import useGetSingleProduct from "../hooks/useGetSingleProduct";
import styles from "./Product.module.css";
import ErrorFull from "../../../shared/ui/errors/errorFull/ErrorFull";
import LoaderFull from "../../../shared/ui/loaders/loaderFull/LoaderFull";

function Product() {
  const { productName } = useParams();

  const { isError, isLoading, error } = useGetSingleProduct(productName ?? "");

  if (isLoading) {
    return <LoaderFull />;
  }

  if (isError && error) {
    return <ErrorFull message={error.message} />;
  }

  return (
    <section className={`${styles.product} container-padding`}>
      <ProductShowcase />
      <ProductTabs />
      {/* <ProductsShowcase
        title="You might also like"
        items={PLACEHOLDER}
        sectionClassname="product_item"
      /> */}
    </section>
  );
}

export default Product;
