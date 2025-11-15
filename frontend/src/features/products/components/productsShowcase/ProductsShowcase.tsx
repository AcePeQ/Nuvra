import styles from "./ProductsShowcase.module.css";

interface ProductsShowcaseProps {
  title: string;
  items: any[];
}

function ProductsShowcase({ title, items }: ProductsShowcaseProps) {
  return (
    <section className={styles.productsShowcase}>
      <h2 className={styles.productsShowcase__title}>{title}</h2>
      <ul className={styles.productsShowcase__items}>
        {items.map((item) => (
          <li key={item.id} className={styles.productsShowcase__item}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProductsShowcase;
