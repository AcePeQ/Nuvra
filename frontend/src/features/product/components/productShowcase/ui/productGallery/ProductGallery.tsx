import styles from "./ProductGallery.module.css";

function ProductGallery() {
  return (
    <div className={styles.gallery}>
      <figure className={styles.gallery__small}>
        <button className={styles.gallery__smallButton}>
          <img className={styles.gallery__smallImage} />
        </button>
      </figure>
      <figure className={styles.gallery__big}>
        <img className={styles.gallery__bigImage} />
      </figure>
    </div>
  );
}

export default ProductGallery;
