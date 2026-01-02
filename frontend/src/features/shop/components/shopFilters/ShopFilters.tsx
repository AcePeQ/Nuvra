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

function ShopFilters() {
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

  return (
    <menu className={styles.filters}>
      <div className={styles.filters_header}>
        <h2>Filters</h2>

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

      <Separator type="normal" />

      <AnimatePresence mode="wait">
        {openMenu && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className={styles.filters_wrapper}
          >
            <FilterCategory />

            <Separator type="normal" />

            <FilterTab tabTitle="Price">
              <FilterPrice />
            </FilterTab>

            <Separator type="normal" />

            <FilterTab tabTitle="Colors">
              <FilterColors />
            </FilterTab>

            <Separator type="normal" />

            <FilterTab tabTitle="Sizes">
              <FilterSize />
            </FilterTab>

            <Separator type="normal" />

            <FilterTab tabTitle="Dress Style">
              <FilterDressStyle />
            </FilterTab>

            <Separator type="normal" />
          </motion.div>
        )}
      </AnimatePresence>
      <Button>Apply Filter</Button>
    </menu>
  );
}

export default ShopFilters;
