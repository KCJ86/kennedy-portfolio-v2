import styles from "./SectionLabel.module.css";

export const SectionLabel = ({ children, bordered = true }) => (
  <p className={`${styles.label} ${bordered ? styles.bordered : ""}`}>
    {children}
  </p>
);
