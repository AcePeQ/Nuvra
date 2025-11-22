import { Link, NavLink } from "react-router-dom";
import styles from "./DropdownLink.module.css";
import { motion } from "framer-motion";

import DropdownIcon from "/src/assets/images/icons/ArrowDropdownIcon.svg";

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
            <span className={styles.nav__link__label}>
              {label}
              <svg
                width="12"
                height="7"
                viewBox="0 0 12 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.2826 1.28318L6.28255 6.28318C6.21287 6.3531 6.13008 6.40857 6.03892 6.44643C5.94775 6.48428 5.85001 6.50377 5.7513 6.50377C5.65259 6.50377 5.55485 6.48428 5.46369 6.44643C5.37252 6.40857 5.28973 6.3531 5.22005 6.28318L0.220051 1.28318C0.0791548 1.14228 -2.09952e-09 0.951183 0 0.751926C2.09952e-09 0.552669 0.0791548 0.361572 0.220051 0.220676C0.360947 0.0797797 0.552044 0.000625136 0.751301 0.000625133C0.950558 0.000625131 1.14165 0.0797797 1.28255 0.220676L5.75193 4.69005L10.2213 0.220051C10.3622 0.079155 10.5533 0 10.7526 0C10.9518 0 11.1429 0.079155 11.2838 0.220051C11.4247 0.360948 11.5039 0.552044 11.5039 0.751301C11.5039 0.950559 11.4247 1.14165 11.2838 1.28255L11.2826 1.28318Z"
                  fill="currentColor"
                />
              </svg>
            </span>
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
