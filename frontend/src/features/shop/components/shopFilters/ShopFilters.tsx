import Button from "../../../../shared/ui/button/Button";
import Separator from "../../../../shared/ui/separator/Separator";
import FilterCategory from "./components/filterCategory/FilterCategory";
import FilterColors from "./components/filterColors/FilterColors";
import FilterDressStyle from "./components/filterDressStyle/FilterDressStyle";
import FilterPrice from "./components/filterPrice/FilterPrice";
import FilterSize from "./components/filterSize/FilterSize";
import FilterTab from "./components/filterTab/FilterTab";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./ShopFilters.module.css";
import { useEffect, useState } from "react";
import useMediaQuery from "../../../../shared/hooks/useMediaQuery";
import { ShopDataFilters } from "../../../../shared/utils/types";
import { getFormattedProductSizes } from "../../../../shared/utils/helpers";
import { useSearchParams } from "react-router-dom";
import { ShopFiltersState, useShopActions, useShopFilters } from "../../stores/shopStore";


type ShopFiltersProps = {
  filters: ShopDataFilters,
}

function ShopFilters({ filters }: ShopFiltersProps) {
  const stateFilters = useShopFilters();
  const { setFilter, setFilters } = useShopActions()
  const [, setSearchParams] = useSearchParams();

  const isMobile = useMediaQuery("(max-width: 680px)");
  const [openMenu, setOpenMenu] = useState(isMobile);

  function handleOpenMenu() {
    setOpenMenu((prev) => !prev);
  }

  useEffect(() => {
    if (isMobile) {
      setOpenMenu(false);
    } else {
      setOpenMenu(true);
    }
  }, [isMobile]);

  const filterSizes = [...new Set(getFormattedProductSizes(filters.clothesSizes))];
  const filterColors = filters.clothesColors;
  const filterStyles = filters.clothesStyles;
  const filterTypes = filters.clothesTypes;
  const filterPrices = filters.clothesPrices;

  function handleChangeFilter(key: string, value: string | string[]) {
    setFilter(key as keyof ShopFiltersState, value)
  }

  function handleClearFilters() {
    setSearchParams((searchParams) => {
      for (const [key, value] of Object.entries(stateFilters)) {
        if (value !== null) {
          if (key === "price") {
            searchParams.delete("priceMin");
            searchParams.delete("priceMax");
            continue;
          }

          searchParams.delete(key)
        }
      }

      return searchParams;
    })

    setFilters({
      size: null,
      price: [String(filters.clothesPrices.min), String(filters.clothesPrices.max)],
      color: null,
      style: null,
      type: null,
      sort: "most-popular"
    })
  }

  function handleApplyFilters() {
    setSearchParams((searchParams) => {
      for (const [key, value] of Object.entries(stateFilters)) {
        if (value !== null) {
          if (key === "price") {
            searchParams.set("priceMin", value[0] as string)
            searchParams.set("priceMax", value[1] as string)
            continue;
          }

          searchParams.set(key, value as string)
        }
      }

      return searchParams;
    })
  }


  return (
    <menu className={styles.filters}>
      <div className={styles.filters_header}>
        <h2>Filters</h2>

        <div className={styles.filter_button_wrapper}>
          <button onClick={handleClearFilters} className={styles.filter_button_clear}>Clear</button>
          <button
            className={styles.filter_button}
            aria-label={openMenu ? "Close filter menu" : "Open filter menu"}
            onClick={handleOpenMenu}
          >
            <svg
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <path
                d="M11.2826 1.28318L6.28255 6.28318C6.21287 6.3531 6.13008 6.40857 6.03892 6.44643C5.94775 6.48428 5.85001 6.50377 5.7513 6.50377C5.65259 6.50377 5.55485 6.48428 5.46369 6.44643C5.37252 6.40857 5.28973 6.3531 5.22005 6.28318L0.220051 1.28318C0.0791548 1.14228 -2.09952e-09 0.951183 0 0.751926C2.09952e-09 0.552669 0.0791548 0.361572 0.220051 0.220676C0.360947 0.0797797 0.552044 0.000625136 0.751301 0.000625133C0.950558 0.000625131 1.14165 0.0797797 1.28255 0.220676L5.75193 4.69005L10.2213 0.220051C10.3622 0.079155 10.5533 0 10.7526 0C10.9518 0 11.1429 0.079155 11.2838 0.220051C11.4247 0.360948 11.5039 0.552044 11.5039 0.751301C11.5039 0.950559 11.4247 1.14165 11.2838 1.28255L11.2826 1.28318Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>

      <Separator type="normal" />

      <AnimatePresence mode="wait">
        {openMenu && (
          <motion.div
            initial={isMobile ? { height: 0 } : false}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className={styles.filters_wrapper}
          >
            <FilterCategory categories={filterTypes} activeValue={shopFilterState.type} onChange={handleChangeFilter} />

            <Separator type="normal" />

            <FilterTab defaultTabState={+stateFilters.price[0] > filterPrices.min || +shopFilterState.price[1] < filterPrices.max} tabTitle="Price">
              <FilterPrice defaultVal={[Number(shopFilterState.price[0]), Number(shopFilterState.price[1])]} onChange={handleChangeFilter} max={filterPrices.max} min={filterPrices.min} />
            </FilterTab>

            <Separator type="normal" />

            <FilterTab defaultTabState={!!shopFilterState.color} tabTitle="Colors">
              <FilterColors colors={filterColors} defaultVal={shopFilterState.color} onChangeState={handleChangeFilter} />
            </FilterTab>

            <Separator type="normal" />

            <FilterTab defaultTabState={!!shopFilterState.size} tabTitle="Sizes">
              <FilterSize sizes={filterSizes} defaultVal={shopFilterState.size} onChangeState={handleChangeFilter} />
            </FilterTab>

            <Separator type="normal" />

            <FilterTab defaultTabState={!!shopFilterState.type} tabTitle="Dress Style">
              <FilterDressStyle dressStyles={filterStyles} activeValue={shopFilterState.type} onChange={handleChangeFilter} />
            </FilterTab>

            <Separator type="normal" />
          </motion.div>
        )}
      </AnimatePresence>
      <Button onClick={handleApplyFilters}>Apply Filter</Button>
    </menu>
  );
}

export default ShopFilters;
