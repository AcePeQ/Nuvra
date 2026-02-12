import { useParams } from "react-router-dom";
import { ProductItem } from "../../../../shared/utils/types";
import useGetSingleProduct from "../../hooks/useGetSingleProduct";
import styles from "./ProductDetails.module.css";

function ProductDetails() {
  const { productName } = useParams();
  const { data: product }: { data: ProductItem } =
    useGetSingleProduct(productName);

  const product_details = [
    {
      title: "Highlights",
      list: Array.isArray(product.details.highlights)
        ? product.details.highlights
        : [product.details.highlights],
    },
    {
      title: "Material",
      list: Array.isArray(product.details.material)
        ? product.details.material
        : [product.details.material],
    },
    {
      title: "Fit",
      list: Array.isArray(product.details.fit)
        ? product.details.fit
        : [product.details.fit],
    },
    {
      title: "Delivery",
      list: Array.isArray(product.details.delivery)
        ? product.details.delivery
        : [product.details.delivery],
    },
  ];

  return (
    <section className={styles.details}>
      <table className={styles.table}>
        {product_details.map(({ title, list }) => (
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
