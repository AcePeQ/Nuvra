import { useSearchParams } from "react-router-dom";
import Breadcrumbs from "../../../shared/ui/breadcrumbs/Breadcrumbs";
import ErrorFull from "../../../shared/ui/errors/errorFull/ErrorFull";
import LoaderFull from "../../../shared/ui/loaders/loaderFull/LoaderFull";

import { ShopData } from "../../../shared/utils/types";
import ShopFilters from "../components/shopFilters/ShopFilters";
import ShopGallery from "../components/shopGallery/ShopGallery";
import useGetShop from "../hooks/useGetShop";
import styles from "./Shop.module.css";
import { useEffect } from "react";
import { useShopActions } from "../stores/shopStore";

type GetShopFetch = {
  isError: boolean, error: Error | null, isFetching: boolean, data: ShopData
}

export type ShopFilterStateType = {
  size: string | null;
  price: string[];
  color: string | null;
  style: string | null;
  type: string | null;
  sort: string
}

function Shop() {
  const { setFilters } = useShopActions()
  const { data, isError, error, isFetching }: GetShopFetch = useGetShop();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    setFilters({
      size: searchParams.get("size"),
      price: [searchParams.get("priceMin") ?? String(data.filters.clothesPrices.min), searchParams.get("priceMax") ?? String(data.filters.clothesPrices.max)],
      color: searchParams.get("color"),
      style: searchParams.get("style"),
      type: searchParams.get("type"),
      sort: searchParams.get("sort") ?? "most-popular",
    })
  }, [setFilters, searchParams, data.filters.clothesPrices.max, data.filters.clothesPrices.min])

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
