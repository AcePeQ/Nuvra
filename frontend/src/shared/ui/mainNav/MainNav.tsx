import { NavLink, useLocation } from "react-router-dom";
import { motion, LayoutGroup } from "framer-motion";
import styles from "./MainNav.module.css";
import DropdownLink from "../dropdownLink/DropdownLink";
import { DROPDOWN_LINK, NAVIGATION_LINKS } from "../../utils/shared";

const UNDERLINE_ID = "underlineNavDesktop";

export default function MainNav() {
  const location = useLocation()
  const params = new URLSearchParams(location.search);


  return (
    <LayoutGroup id="nav-desktop">
      <nav className={styles.nav}>
        <ul className={styles.nav__list}>
          <DropdownLink {...DROPDOWN_LINK} underlineLayoutId={UNDERLINE_ID} />

          {NAVIGATION_LINKS.map(({ label, href, end, param }) => {
            const isActive = location.pathname === "/shop" && params.get("feature") === param;
            return (
              (
                <li className={styles.nav__item} key={label}>
                  <NavLink className={styles.nav__link} to={href} end={end}>
                    {label}
                    {isActive && (
                      <motion.div
                        className={styles.nav__underline}
                        layoutId={UNDERLINE_ID}
                      />
                    )}
                  </NavLink>
                </li>
              )
            )
          })}
        </ul>
      </nav>
    </LayoutGroup>
  );
}