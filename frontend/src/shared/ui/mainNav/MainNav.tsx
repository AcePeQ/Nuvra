import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./MainNav.module.css";
import DropdownLink from "../dropdownLink/DropdownLink";

const NAVIGATION_LINKS = [
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

const DROPDOWN_LINK = {
  label: "Shop",
  href: "/shop",
  isLink: true,
  items: [
    {
      label: "Casual",
      href: "/shop?=casual",
    },
    {
      label: "Formal",
      href: "/shop?=formal",
    },
    {
      label: "Party",
      href: "/shop?=party",
    },
    {
      label: "Gym",
      href: "/shop?=gym",
    },
  ],
};

export default function MainNav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        <DropdownLink {...DROPDOWN_LINK} />
        {NAVIGATION_LINKS.map(({ label, href }) => (
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
          </li>
        ))}
      </ul>
    </nav>
  );
}
