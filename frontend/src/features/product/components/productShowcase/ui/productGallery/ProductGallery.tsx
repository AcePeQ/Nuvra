import { useState } from "react";
import styles from "./ProductGallery.module.css";

const GALLERY_ITEMS = [
  {
    id: 1,
    img: "/src/assets/images/placeholders/product1.svg",
    alt: "A guy wearing a casual t-shirt",
  },
  {
    id: 2,
    img: "/src/assets/images/placeholders/product2.svg",
    alt: "A guy wearing a formal suit",
  },
  {
    id: 3,
    img: "/src/assets/images/placeholders/product3.svg",
    alt: "A guy wearing a party dress",
  },
];

function ProductGallery() {
  const [currentImage, setCurrentImage] = useState(1);

  function handleSelectImage(id: number) {
    if (currentImage === id) return;

    setCurrentImage(id);
  }

  const bigImage = GALLERY_ITEMS[currentImage - 1];

  return (
    <div className={styles.gallery}>
      {GALLERY_ITEMS.map(({ id, img, alt }) => (
        <button
          key={id}
          onClick={() => handleSelectImage(id)}
          className={styles.gallery__smallButton}
        >
          <img className={styles.gallery__smallImage} src={img} alt={alt} />
        </button>
      ))}

      <figure className={styles.gallery__big}>
        <button className={styles.gallery__bigButton}>
          <img
            className={styles.gallery__bigImage}
            src={bigImage.img}
            alt={bigImage.alt}
          />
        </button>
      </figure>
    </div>
  );
}

export default ProductGallery;
