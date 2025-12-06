import styles from "./Brands.module.css";
import VersaceBrand from "/src/assets/images/brands/versace.png";
import GucciBrand from "/src/assets/images/brands/gucci.png";
import CalvinBrand from "/src/assets/images/brands/calvin.png";
import ZaraBrand from "/src/assets/images/brands/zara.png";
import PradaBrand from "/src/assets/images/brands/prada.png";

const BRANDS_ITEMS = [
  {
    id: 1,
    img: VersaceBrand,
    alt: "Versace Brand",
  },
  {
    id: 2,
    img: ZaraBrand,
    alt: "Zara brand",
  },
  {
    id: 3,
    img: GucciBrand,
    alt: "Gucci brand",
  },
  {
    id: 4,
    img: PradaBrand,
    alt: "Prada brand",
  },
  {
    id: 5,
    img: CalvinBrand,
    alt: "Calvin Klein brand",
  },
];

function Brands() {
  return (
    <section className={`container container-padding ${styles.brands_section}`}>
      <ul className={styles.brands}>
        {BRANDS_ITEMS.map(({ id, img, alt }) => (
          <li
            className={`${styles.brands__item} ${
              styles[`brands__item--${id}`]
            }`}
            key={id}
          >
            <img className={styles.brands__image} src={img} alt={alt} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Brands;
