import styles from "./ProductGallery.module.css";

function ProductGallery() {
  return (
    <div className={styles.gallery}>
      <button className={styles.gallery__smallButton}>
        <img
          className={styles.gallery__smallImage}
          src="/src/assets/images/placeholders/product1.png"
        />
      </button>
      <button className={styles.gallery__smallButton}>
        <img
          className={styles.gallery__smallImage}
          src="/src/assets/images/placeholders/product2.png"
        />
      </button>
      <button className={styles.gallery__smallButton}>
        <img
          className={styles.gallery__smallImage}
          src="/src/assets/images/placeholders/product3.png"
        />
      </button>

      <figure className={styles.gallery__big}>
        <button className={styles.gallery__bigButton}>
          <img
            className={styles.gallery__bigImage}
            src="/src/assets/images/placeholders/productBig.png"
          />
        </button>
      </figure>
    </div>
  );
}

export default ProductGallery;
