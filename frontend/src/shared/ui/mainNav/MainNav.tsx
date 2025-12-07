import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./MainNav.module.css";
import DropdownLink from "../dropdownLink/DropdownLink";
import { DROPDOWN_LINK, NAVIGATION_LINKS } from "../../utils/shared";

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
