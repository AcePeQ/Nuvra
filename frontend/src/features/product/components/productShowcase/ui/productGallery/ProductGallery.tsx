import { useState } from "react";
import styles from "./ProductGallery.module.css";
import { useParams } from "react-router-dom";
import { ProductItem } from "../../../../../../shared/utils/types";
import useGetSingleProduct from "../../../../hooks/useGetSingleProduct";
import { IMAGE_URL } from "../../../../../../shared/utils/helpers";
import { motion } from "framer-motion";

function ProductGallery() {
  const { productName } = useParams();
  const { data: product }: { data: ProductItem } =
    useGetSingleProduct(productName);
  const productImages = product.images.gallery
    .map((image, index) => {
      return {
        id: index,
        img: image,
      };
    })
    .slice(0, 3);

  const [currentImage, setCurrentImage] = useState(0);

  function handleSelectImage(id: number) {
    if (currentImage === id) return;

    setCurrentImage(id);
  }

  const bigImage = productImages[currentImage];

  return (
    <div className={styles.gallery}>
      {productImages.map(({ id, img }) => (
        <button
          key={id}
          onClick={() => handleSelectImage(id)}
          className={styles.gallery__smallButton}
        >
          <img
            className={`${styles.gallery__smallImage} ${id === currentImage ? styles.activeImage : ""}`}
            src={`${IMAGE_URL}${img}`}
            alt=""
          />
        </button>
      ))}

      <figure className={styles.gallery__big}>
        <motion.button
          key={currentImage}
          initial={{ filter: "blur(3px)" }}
          animate={{ filter: "blur(0px)" }}
          transition={{ duration: 1, type: "spring" }}
          className={styles.gallery__bigButton}
        >
          <img
            className={styles.gallery__bigImage}
            src={`${IMAGE_URL}${bigImage.img}`}
            alt={product.name}
          />
        </motion.button>
      </figure>
    </div>
  );
}

export default ProductGallery;
