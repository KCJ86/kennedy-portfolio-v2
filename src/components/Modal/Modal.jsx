import { useEffect } from "react";
import styles from "./Modal.module.css";

const resumes = [
  {
    title: "Software Engineer, Full Stack",
    file: "/assets/resume/KennedyCastillonJimenez_Full_Stack_Resume.pdf",
  },
  {
    title: "User Experience Designer",
    file: "/assets/resume/KennedyCastillonJimenez_UX_Resume.pdf",
  },
  {
    title: "Solutions Engineer",
    file: "/assets/resume/KennedyCastillonJimenez_Resume_Solutions.pdf",
  },
];

export const Modal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Resume downloads"
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <span className={styles.title}>Resume</span>
          <button
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>
        <ul className={styles.list}>
          {resumes.map((r) => (
            <li key={r.file} className={styles.row}>
              <span className={styles.roleTitle}>{r.title}</span>
              <a
                href={r.file}
                download
                className={styles.downloadBtn}
                onClick={(e) => e.stopPropagation()}
              >
                Download ↓
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
