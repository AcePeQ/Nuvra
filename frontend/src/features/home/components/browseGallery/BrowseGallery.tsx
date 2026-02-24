import styles from "./BrowseGallery.module.css";
import { motion } from "framer-motion";
import CasualImage from "/src/assets/images/gallery/casual.png";
import FormalImage from "/src/assets/images/gallery/formal.png";
import PartyImage from "/src/assets/images/gallery/party.png";
import GymImage from "/src/assets/images/gallery/gym.png";
import { Link } from "react-router-dom";


const GALLERY_ITEMS = [
  {
    id: 1,
    img: CasualImage,
    text: "Casual",
  },
  {
    id: 2,
    img: FormalImage,
    text: "Formal",
  },
  { id: 3, img: PartyImage, text: "Party" },
  { id: 4, img: GymImage, text: "Gym" },
];

function BrowseGallery() {
  const MotionLink = motion(Link);

  return (
    <section className="container container-padding">
      <div className={styles.browseGallery}>
        <h2 className={styles.browseGallery__title}>Browse by dress style</h2>
        <div className={styles.browseGallery__items}>
          {GALLERY_ITEMS.map(({ id, img, text }) => (
            <MotionLink
              key={id}
              style={{ backgroundImage: `url(${img})` }}
              whileHover={{ scale: 1.025 }}
              whileFocus={{ scale: 1.025 }}
              whileTap={{ scale: 0.99 }}
              to="/products" className={styles.browseGallery__link}>
              <p className={styles.browseGallery__text}>{text}</p>
            </MotionLink>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BrowseGallery;
