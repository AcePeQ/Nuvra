import { NavLink } from "react-router-dom";
import styles from "./MainNav.module.css";

const NAVIGATION_LINKS = [
  {
    label: "Shop",
    href: "/shop",
  },
  {
    label: "On Sale",
    href: "/on-sale",
  },
  {
    label: "New Arrivals",
    href: "/new-arrivals",
  },
  {
    label: "Brands",
    href: "/brands",
  },
];

export default function MainNav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        {NAVIGATION_LINKS.map(({ label, href }) => (
          <li className={styles.nav__item} key={label}>
            <NavLink className={styles.nav__link} to={href}>
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
