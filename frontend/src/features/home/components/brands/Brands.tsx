import styles from "./Brands.module.css";

function Brands() {
  return (
    <section className={`container container-padding ${styles.brands_section}`}>
      <ul className={styles.brands}></ul>
    </section>
  );
}

export default Brands;
