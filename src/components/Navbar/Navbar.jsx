import { useState } from "react";
import { useScrolled } from "../../hooks/useScrolled";
import { Modal } from "../Modal/Modal";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const scrolled = useScrolled(50);
  const [menuOpen, setMenuOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  const close = () => setMenuOpen(false);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <a href="#" className={styles.logo} onClick={close}>
          Kennedy Castillón Jimenez
        </a>

        {/* Desktop nav */}
        <nav className={styles.desktopNav} aria-label="Primary navigation">
          {NAV_LINKS.map(({ label, href }) => (
            <a key={label} href={href} className={styles.navLink}>
              {label}
            </a>
          ))}
          <button
            className={styles.navLink}
            onClick={() => setResumeOpen(true)}
          >
            Resume
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className={styles.bar} />
          <span className={styles.bar} />
        </button>
      </header>

      {/* Mobile fullscreen menu */}
      {menuOpen && (
        <div className={styles.mobileMenu} role="dialog" aria-modal="true">
          <nav className={styles.mobileNav}>
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className={styles.mobileLink}
                onClick={close}
              >
                {label}
              </a>
            ))}
            <button
              className={styles.mobileLink}
              onClick={() => {
                setResumeOpen(true);
                close();
              }}
            >
              Resume
            </button>
          </nav>
          <p className={styles.mobileFooter}>Kennedy Castillón Jiménez</p>
        </div>
      )}

      <Modal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
};
