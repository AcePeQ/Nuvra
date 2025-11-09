import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={`container container-padding ${styles.hero}`}>
      <div className={styles.hero__content}>
        <h1 className={styles.hero__title}>
          Find clothes that matches your style
        </h1>
        <p className={styles.hero__description}>
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
      </div>
    </section>
  );
}

export default Hero;
