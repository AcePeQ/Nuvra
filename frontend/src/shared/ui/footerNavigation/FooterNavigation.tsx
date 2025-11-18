import { Link } from "react-router-dom";
import styles from "./FooterNavigation.module.css";

interface Item {
  label: string;
  href: string;
  target?: string;
}

interface FooterNavigationProps {
  title: string;
  items: Item[];
}

function FooterNavigation({ title, items }: FooterNavigationProps) {
  return (
    <>
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.list}>
        {items.map((item: Item) => (
          <li className={styles.item} key={item.label}>
            <Link to={item.href} target={item.target ? item.target : ""}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default FooterNavigation;
