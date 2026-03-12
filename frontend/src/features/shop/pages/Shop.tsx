import Breadcrumbs from "../../../shared/ui/breadcrumbs/Breadcrumbs";
import ErrorFull from "../../../shared/ui/errors/errorFull/ErrorFull";
import LoaderFull from "../../../shared/ui/loaders/loaderFull/LoaderFull";
import ShopFilters from "../components/shopFilters/ShopFilters";
import ShopGallery from "../components/shopGallery/ShopGallery";
import useGetShop from "../hooks/useGetShop";
import styles from "./Shop.module.css";

function Shop() {
  const { data, isError, error, isFetching } = useGetShop();

  if (isFetching) {
    return <LoaderFull />
  }

  if (isError && error) {
    return <ErrorFull message={error.message} />
  }

  console.log(data)

  return (
    <section className={`container container-padding ${styles.shopSection}`}>
      <Breadcrumbs />

      <div className={styles.contentWrapper}>
        <ShopFilters />
        <ShopGallery />
      </div>
    </section>
  );
}

export default Shop;
