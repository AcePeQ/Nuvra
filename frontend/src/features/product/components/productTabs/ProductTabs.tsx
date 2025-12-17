import { useState } from "react";
import styles from "./ProductTabs.module.css";
import { motion } from "framer-motion";
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

      <div className={styles.content}>{activeContent}</div>
    </section>
  );
}

export default ProductTabs;
