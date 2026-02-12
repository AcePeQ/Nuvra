import { useParams } from "react-router-dom";
import ProductsShowcase from "../../products/components/productsShowcase/ProductsShowcase";
import ProductShowcase from "../components/productShowcase/ProductShowcase";
import ProductTabs from "../components/productTabs/ProductTabs";
import useGetSingleProduct from "../hooks/useGetSingleProduct";
import styles from "./Product.module.css";
import ErrorFull from "../../../shared/ui/errors/errorFull/ErrorFull";
import LoaderFull from "../../../shared/ui/loaders/loaderFull/LoaderFull";
import useGetShowcaseProducts from "../../home/hooks/useGetShowcaseProducts";
import LoaderContainer from "../../../shared/ui/loaders/loaderContainer/LoaderContainer";

function Product() {
  const { productName } = useParams();
  const { isError, isLoading, error } = useGetSingleProduct(productName);

  const {
    data: showcaseProducts,
    isLoading: isLoadingShowcaseProducts,
    isError: isErrorShowcaseProducts,
  } = useGetShowcaseProducts();

  if (isLoading) {
    return <LoaderFull />;
  }

  if (isError && error) {
    return <ErrorFull message={error?.message} />;
  }

  const showcaseItems = showcaseProducts?.topSaleProducts ?? [];

  return (
    <section className={`${styles.product} container-padding`}>
      <ProductShowcase />
      <ProductTabs />
      {isLoadingShowcaseProducts ? (
        <LoaderContainer />
      ) : isErrorShowcaseProducts ? null : (
        <ProductsShowcase
          title="You might also like"
          items={showcaseItems}
          sectionClassname="product_item"
        />
      )}
    </section>
  );
}

export default Product;
