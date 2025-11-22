import { Link, NavLink } from "react-router-dom";
import styles from "./DropdownLink.module.css";
import { motion } from "framer-motion";

interface DropdownItem {
  label: string;
  href: string;
}

interface DropdownLinkProps {
  label: string;
  href: string;
  isLink: boolean;
  items: DropdownItem[];
}

function DropdownLink({ label, href, isLink, items }: DropdownLinkProps) {
  return (
    <li className={styles.nav__item} key={label}>
      <NavLink className={styles.nav__link} to={href}>
        {({ isActive }) => (
          <>
            {label}
            {isActive && (
              <motion.div
                className={styles.nav__underline}
                layoutId="underline"
                id="underline"
              />
            )}
          </>
        )}
      </NavLink>
      <ul className={styles.nav__dropdown}>
        {items.map((item: DropdownItem) => (
          <li className={styles.nav__item} key={item.label}>
            <Link className={styles.nav__link} to={item.href}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default DropdownLink;
