import styles from "./PageLayout.module.css";

export default function PageLayout({
  seoTitle,
  children,
}: {
  seoTitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.page}>
      <div className={styles.main} aria-label={seoTitle}>
        {children}
      </div>
    </div>
  );
}