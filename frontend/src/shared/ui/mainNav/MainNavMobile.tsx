import { NavLink, useLocation } from "react-router-dom";
import { DROPDOWN_LINK, NAVIGATION_LINKS } from "../../utils/shared";
import DropdownLink from "../dropdownLink/DropdownLink";
import styles from "./MainNavMobile.module.css";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useEffect, useId, useRef, useState } from "react";

const UNDERLINE_ID = "underlineNavMobile";

function MainNavMobile() {
  const { pathname } = useLocation();
  const navRef = useRef<HTMLElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const id = useId();

  useEffect(() => setIsOpen(false), [pathname]);

  useEffect(() => {
    if (!isOpen) return;

    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      const nav = navRef.current;
      const button = buttonRef.current;

      if (nav && !nav.contains(target) && button && !button.contains(target)) {
        setIsOpen(false);
      }
    }

    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  return (
    <LayoutGroup id="nav-mobile">
      <button
        ref={buttonRef}
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
        type="button"
        className={styles.button__openNav}
        onClick={() => setIsOpen((p) => !p)}
        aria-controls={id}
      >
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0, left: 0, top: isOpen ? 15 : 6 }}
          aria-hidden
          className={styles.button__line_1}
        />
        <motion.span
          animate={{ rotate: isOpen ? -45 : 0, left: 0, bottom: isOpen ? 15 : 6 }}
          aria-hidden
          className={styles.button__line_2}
        />
        <motion.span
          animate={{ opacity: isOpen ? 0 : 1, left: 0, top: 15 }}
          aria-hidden
          className={styles.button__line_3}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            id={id}
            ref={navRef}
            aria-label="Main navigation"
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ type: "spring", bounce: 0 }}
            className={`${styles.nav} container-padding`}
          >
            <ul className={styles.nav__list}>
              <DropdownLink {...DROPDOWN_LINK} underlineLayoutId={UNDERLINE_ID} />

              {NAVIGATION_LINKS.map(({ label, href, end }) => (
                <li className={styles.nav__item} key={label}>
                  <NavLink className={styles.nav__link} to={href} end={end}>
                    {({ isActive }) => (
                      <>
                        {label}
                        {isActive && (
                          <motion.div
                            className={styles.nav__underline}
                            layoutId={UNDERLINE_ID}
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
}

export default MainNavMobile;