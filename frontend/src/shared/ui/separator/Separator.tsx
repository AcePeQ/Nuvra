import styles from "./Separator.module.css";

function Separator({ type }: { type: string }) {
  if (type === "section")
    return <hr aria-disabled className={styles.separator__section} />;
  if (type === "vertical")
    return <div aria-disabled className={styles.separator}></div>;
}

export default Separator;
