import Breadcrumbs from "../../../shared/ui/breadcrumbs/Breadcrumbs";
import ErrorFull from "../../../shared/ui/errors/errorFull/ErrorFull";
import LoaderFull from "../../../shared/ui/loaders/loaderFull/LoaderFull";

import { ShopData } from "../../../shared/utils/types";
import ShopFilters from "../components/shopFilters/ShopFilters";
import ShopGallery from "../components/shopGallery/ShopGallery";
import useGetShop from "../hooks/useGetShop";
import styles from "./Shop.module.css";

type GetShopFetch = {
  isError: boolean, error: Error | null, isFetching: boolean, data: ShopData
}

function Shop() {
  const { data, isError, error, isFetching }: GetShopFetch = useGetShop();

  if (isFetching) {
    return <LoaderFull />
  }

  if (isError && error) {
    return <ErrorFull message={error.message} />
  }

  return (
    <section className={`container container-padding ${styles.shopSection}`}>
      <Breadcrumbs />

      <div className={styles.contentWrapper}>
        <ShopFilters filters={data.filters} />
        <ShopGallery productsList={data.products} />
      </div>
    </section>
  );
}

export default Shop;
