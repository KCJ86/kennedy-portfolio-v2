import { useInView } from "../../hooks/useInView";
import { SectionLabel } from "../ui/SectionLabel";
import styles from "./Contact.module.css";

const CONTACT_LINKS = [
  {
    label: "kcastillonjimenez@gmail.com",
    href: "mailto:kcastillonjimenez@gmail.com",
  },
  {
    label: "linkedin.com/in/kennedyjimenez",
    href: "https://www.linkedin.com/in/kennedyjimenez",
    external: true,
  },
  {
    label: "github.com/KCJ86",
    href: "https://github.com/KCJ86",
    external: true,
  },
];

export const Contact = () => {
  const [ref, inView] = useInView({ threshold: 0.15 });

  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.inner}>
        <SectionLabel>Contact</SectionLabel>

        <div
          ref={ref}
          className={`${styles.content} ${inView ? styles.visible : ""}`}
        >
          <h2 className={styles.headline}>
            Let's
            <br />
            <em>talk.</em>
          </h2>

          <div className={styles.right}>
            <ul className={styles.links}>
              {CONTACT_LINKS.map(({ label, href, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    className={styles.link}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            <p className={styles.availability}>
              Open to full-time roles and interesting collaborations.
            </p>
          </div>
        </div>

        <div className={styles.base}>
          <p className={styles.copy}>
            Kennedy Castillón Jimenez © {new Date().getFullYear()}
          </p>
          <p className={styles.copy}>Full Stack Engineer · Bay Area, CA</p>
        </div>
      </div>
    </footer>
  );
};
