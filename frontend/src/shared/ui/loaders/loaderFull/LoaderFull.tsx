import { createPortal } from "react-dom";
import styles from "./LoaderFull.module.css";
import { motion } from "framer-motion";

function LoaderFull() {
  return createPortal(
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.loader}>
          <motion.div
            initial={{ x: "-50%", y: "-50%" }}
            animate={{ rotate: 360, x: "-50%", y: "-50%" }}
            transition={{
              repeat: Infinity,
              type: "spring",
              duration: 2,
            }}
            className={styles.loader__inner_1}
          />
          <motion.div
            initial={{ x: "-50%", y: "-50%" }}
            animate={{ rotate: -360, x: "-50%", y: "-50%" }}
            transition={{
              repeat: Infinity,
              type: "spring",
              delay: 2,
              repeatDelay: 2,
              duration: 2,
            }}
            className={styles.loader__inner_2}
          />
        </div>
        <p className={styles.loader_text}>Loading...</p>
      </div>
    </div>,
    document.getElementById("loader")!,
  );
}

export default LoaderFull;
