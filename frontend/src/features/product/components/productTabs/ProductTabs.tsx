import { useState } from "react";
import styles from "./ProductTabs.module.css";
import { AnimatePresence, motion } from "framer-motion";
import ProductReviews from "../productReviews/ProductReviews";
import ProductDetails from "../productDetails/ProductDetails";

const TABS = [
  { id: 0, name: "Product Details", element: <ProductDetails /> },
  { id: 1, name: "Reviews", element: <ProductReviews /> },
];

function ProductTabs() {
  const [activeTab, setActiveTab] = useState<number>(TABS[0].id);

  const activeContent = TABS[activeTab].element;

  return (
    <section className={styles.wrapper}>
      <menu className={styles.tabs}>
        {TABS.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.tab} ${
              activeTab === tab.id ? styles.tab__active : ""
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.name}

            {activeTab === tab.id && (
              <motion.div layoutId="underline" className={styles.underline} />
            )}
          </button>
        ))}
      </menu>

      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          key={activeTab}
          className={styles.content}
        >
          {activeContent}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

export default ProductTabs;
