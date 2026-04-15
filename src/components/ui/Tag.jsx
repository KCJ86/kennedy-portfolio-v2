import styles from "./Tag.module.css";

export const Tag = ({ children }) => (
  <span className={styles.tag}>{children}</span>
);
