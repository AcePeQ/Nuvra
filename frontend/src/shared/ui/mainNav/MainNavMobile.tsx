import { NavLink, useLocation } from "react-router-dom";
import { DROPDOWN_LINK, NAVIGATION_LINKS } from "../../utils/shared";
import DropdownLink from "../dropdownLink/DropdownLink";
import styles from "./MainNavMobile.module.css";
import { motion } from "framer-motion";
import { useEffect, useId, useRef, useState } from "react";

function MainNavMobile() {
  const { pathname } = useLocation();
  const navRef = useRef<HTMLUListElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const id = useId();

  function toggleNavigation() {
    setIsOpen((prev) => !prev);
  }

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      const button = buttonRef.current;
      const nav = navRef.current;

      function handleClickOutside(event: MouseEvent) {
        if (
          nav &&
          !nav.contains(event.target as Node) &&
          button !== event.target
        ) {
          setIsOpen(false);
        }
      }

      window.addEventListener("click", handleClickOutside);

      return () => window.removeEventListener("click", handleClickOutside);
    }
  }, [isOpen]);

  return (
    <>
      <button
        ref={buttonRef}
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
        type="button"
        className={styles.button__openNav}
        onClick={toggleNavigation}
        aria-controls={id}
      >
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0, left: 0, top: isOpen ? 15 : 6 }}
          aria-hidden
          className={styles.button__line_1}
        ></motion.span>
        <motion.span
          animate={{
            rotate: isOpen ? -45 : 0,
            left: 0,
            bottom: isOpen ? 15 : 6,
          }}
          aria-hidden
          className={styles.button__line_2}
        ></motion.span>
        <motion.span
          animate={{ opacity: isOpen ? 0 : 1, left: 0, top: 15 }}
          aria-hidden
          className={styles.button__line_3}
        ></motion.span>
      </button>

      <motion.nav
        id={id}
        ref={navRef}
        aria-label="Main navigation"
        animate={{
          opacity: isOpen ? 1 : 0,
          x: isOpen ? 0 : "-100%",
          display: isOpen ? "flex" : "none",
          pointerEvents: isOpen ? "auto" : "none",
          transition: {
            pointerEvents: { duration: 0 },
            type: "spring",
            bounce: 0,
          },
        }}
        aria-hidden={!isOpen}
        className={`${styles.nav} container-padding`}
      >
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
      </motion.nav>
    </>
  );
}

export default MainNavMobile;
