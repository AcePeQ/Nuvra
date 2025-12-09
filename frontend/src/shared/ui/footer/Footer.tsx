import useMediaQuery from "../../hooks/useMediaQuery";
import FooterNavigation from "../footerNavigation/FooterNavigation";
import Logo from "../logo/Logo";
import Newsletter from "../newsletter/Newsletter";
import Separator from "../separator/Separator";
import Socialmedia from "../socialmedia/Socialmedia";
import styles from "./Footer.module.css";

const YEAR = new Date().getFullYear();

const COMPANY_LINKS = [
  { label: "About", href: "/about-us" },
  { label: "Features", href: "/features" },
  { label: "Works", href: "/works" },
  { label: "Career", href: "/career" },
];

const HELP_LINKS = [
  { label: "Customer Support", href: "/support" },
  { label: "Delivery Details", href: "/delivery" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/policy" },
];

const FAQ_LINKS = [
  { label: "FAQ", href: "/faq" },
  { label: "Manage Deliveries", href: "/manage" },
  { label: "Orders", href: "/orders" },
  { label: "Payments", href: "/payments" },
];

const RESOURCES_LINKS = [
  { label: "Free eBooks", href: "/ebook" },
  { label: "Development Tutorial", href: "/tutorial" },
  { label: "How to - Blog", href: "/blog" },
  { label: "Youtube Playlist", href: "/youtube" },
];

export default function Footer() {
  const isMobile = useMediaQuery("(max-width: 460px)");

  return (
    <footer className={`${styles.footer} container container-padding`}>
      <div
        key={String(isMobile)}
        style={{
          width: "100%",
          height: "1px",
          position: `${isMobile ? "unset" : "relative"}`,
        }}
        className={`${isMobile ? "" : "container-padding"}`}
      >
        <Newsletter />
      </div>

      <div className={styles.footer__content}>
        <div className={`${styles.footer__col1} ${styles.footer__col}`}>
          <Logo />
          <p className={styles.footer__text}>
            We have clothes that suits your style and which you're proud to
            wear. From women to men
          </p>
          <Socialmedia />
        </div>

        <div className={`${styles.footer__col2} ${styles.footer__col}`}>
          <FooterNavigation title="Company" items={COMPANY_LINKS} />
        </div>

        <div className={`${styles.footer__col3} ${styles.footer__col}`}>
          <FooterNavigation title="Help" items={HELP_LINKS} />
        </div>

        <div className={`${styles.footer__col4} ${styles.footer__col}`}>
          <FooterNavigation title="FAQ" items={FAQ_LINKS} />
        </div>

        <div className={`${styles.footer__col5} ${styles.footer__col}`}>
          <FooterNavigation title="Resources" items={RESOURCES_LINKS} />
        </div>
      </div>

      <Separator type="footer" />

      <p className={styles.footer__copyright}>
        Nurva &copy; {YEAR}, All Rights Reserved
      </p>
    </footer>
  );
}
