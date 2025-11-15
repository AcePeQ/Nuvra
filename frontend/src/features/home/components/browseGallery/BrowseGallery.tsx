import styles from "./BrowseGallery.module.css";

import CasualImage from "/src/assets/images/gallery/casual.png";
import FormalImage from "/src/assets/images/gallery/formal.png";
import PartyImage from "/src/assets/images/gallery/party.png";
import GymImage from "/src/assets/images/gallery/gym.png";

const GALLERY_ITEMS = [
  {
    id: 1,
    img: CasualImage,
    alt: "A guy wearing a casual t-shirt",
    text: "Casual",
  },
  {
    id: 2,
    img: FormalImage,
    alt: "A guy wearing a formal suit",
    text: "Formal",
  },
  { id: 3, img: PartyImage, alt: "A guy wearing a party dress", text: "Party" },
  { id: 4, img: GymImage, alt: "A guy wearing gym clothes", text: "Gym" },
];

function BrowseGallery() {
  return (
    <section className={styles.browseGallery}>
      <h2 className={styles.browseGallery__title}>Browse by dress style</h2>
      <div className={styles.browseGallery__items}></div>
    </section>
  );
}

export default BrowseGallery;
