import styles from "./Separator.module.css";

function Separator({ type }: { type: string }) {
  if (type === "section")
    return (
      <div aria-disabled className="container container-padding">
        <hr className={styles.separator__section} />
      </div>
    );
  if (type === "vertical")
    return <div aria-disabled className={styles.separator}></div>;
}

export default Separator;
