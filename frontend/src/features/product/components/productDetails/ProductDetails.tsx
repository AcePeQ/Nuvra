import styles from "./ProductDetails.module.css";

const PRODUCT_DETAILS = [
  {
    title: "Highlights",
    list: [
      "Soft, breathable fabric",
      "Comfortable fit",
      "Unique design",
      "High-quality construction",
    ],
  },
  {
    title: "Material",
    list: ["100% cotton"],
  },
  {
    title: "Fit",
    list: ["Regular fit"],
  },
  {
    title: "Delivery",
    list: ["Standard delivery: 3-5 business days"],
  },
];

function ProductDetails() {
  return (
    <section className={styles.details}>
      <table className={styles.table}>
        {PRODUCT_DETAILS.map(({ title, list }) => (
          <tbody key={title}>
            <tr>
              <th>{title}</th>
            </tr>
            {list.map((item) => (
              <tr key={item}>
                <td>{item}</td>
              </tr>
            ))}
          </tbody>
        ))}
      </table>
    </section>
  );
}

export default ProductDetails;
