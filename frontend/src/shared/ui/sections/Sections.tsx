// src/components/Sections/Sections.tsx
import styles from "./Sections.module.css";
import type { PageSection } from "../../../content/footerPages"
import Accordion from "../accordion/Accordion";


export default function Sections({ sections }: { sections: PageSection[] }) {
  return (
    <div className={styles.stack}>
      {sections.map((s, idx) => {
        if (s.type === "hero") {
          return (
            <section key={idx} className={styles.hero}>
              <div className={styles.heroInner}>
                <h1 className={styles.h1}>{s.title}</h1>
                <p className={styles.sub}>{s.subtitle}</p>
                {s.cta ? (
                  <a className={styles.cta} href={s.cta.href}>
                    {s.cta.label}
                  </a>
                ) : null}
              </div>
            </section>
          );
        }

        if (s.type === "richText") {
          return (
            <section key={idx} className={styles.section}>
              {s.title ? <h2 className={styles.h2}>{s.title}</h2> : null}
              <div className={styles.text}>
                {s.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>
          );
        }

        if (s.type === "cards") {
          return (
            <section key={idx} className={styles.section}>
              <h2 className={styles.h2}>{s.title}</h2>
              <div className={styles.grid}>
                {s.items.map((it, i) => (
                  <article key={i} className={styles.card}>
                    <h3 className={styles.h3}>{it.title}</h3>
                    <p className={styles.p}>{it.text}</p>
                  </article>
                ))}
              </div>
            </section>
          );
        }

        if (s.type === "steps") {
          return (
            <section key={idx} className={styles.section}>
              <h2 className={styles.h2}>{s.title}</h2>
              <ol className={styles.steps}>
                {s.items.map((it, i) => (
                  <li key={i} className={styles.step}>
                    <div className={styles.stepTitle}>{it.title}</div>
                    <div className={styles.stepText}>{it.text}</div>
                  </li>
                ))}
              </ol>
            </section>
          );
        }

        if (s.type === "policy") {
          return (
            <section key={idx} className={styles.section}>
              <h2 className={styles.h2}>{s.title}</h2>
              <div className={styles.policy}>
                {s.blocks.map((b, i) => (
                  <div key={i} className={styles.policyBlock}>
                    <h3 className={styles.h3}>{b.heading}</h3>
                    <ul className={styles.ul}>
                      {b.body.map((line, j) => (
                        <li key={j}>{line}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          );
        }

        if (s.type === "faq") {
          return (
            <section key={idx} className={styles.section}>
              <h2 className={styles.h2}>{s.title}</h2>
              <Accordion items={s.items} />
            </section>
          );
        }

        return null;
      })}
    </div>
  );
}