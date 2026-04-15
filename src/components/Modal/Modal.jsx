import { useEffect } from "react";
import styles from "./Modal.module.css";

export const Modal = ({ isOpen, onClose }) => {
  // Lock body scroll when open
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

  // Close on Escape key
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const pdfSrc = "/assets/resume/KennedyCastillonJimenez_Resume.pdf";

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Resume viewer"
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.title}>Resume</span>
          <div className={styles.headerActions}>
            <a
              href={pdfSrc}
              download
              className={styles.downloadBtn}
              onClick={(e) => e.stopPropagation()}
            >
              Download ↓
            </a>
            <button
              className={styles.closeBtn}
              onClick={onClose}
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>
        </div>

        {/* PDF viewer */}
        <iframe
          src={pdfSrc}
          className={styles.iframe}
          title="Kennedy Castillón Jiménez — Resume"
        />
      </div>
    </div>
  );
};
