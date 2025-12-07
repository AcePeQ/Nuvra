import { NavLink } from "react-router-dom";
import { DROPDOWN_LINK, NAVIGATION_LINKS } from "../../utils/shared";
import DropdownLink from "../dropdownLink/DropdownLink";
import styles from "./MainNavMobile.module.css";
import { motion } from "framer-motion";

function MainNavMobile() {
  return (
    <>
      <button
        aria-label="Open navigation"
        type="button"
        className={styles.button__openNav}
      >
        <span aria-hidden className={styles.button__line_1}></span>
        <span aria-hidden className={styles.button__line_2}></span>
        <span aria-hidden className={styles.button__line_3}></span>
      </button>

      <nav className={`${styles.nav} container-padding`}>
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
    </>
  );
}

export default MainNavMobile;
