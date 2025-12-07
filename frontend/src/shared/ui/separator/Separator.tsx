import styles from "./Separator.module.css";

function Separator({ type }: { type: string }) {
  if (type === "section")
    return (
      <div aria-hidden className="container container-padding">
        <hr className={styles.separator__section} />
      </div>
    );
  if (type === "vertical")
    return <div aria-hidden className={styles.separator__vertical}></div>;

  if (type === "footer")
    return <div aria-hidden className={styles.footer__separator}></div>;
}

export default Separator;
