import { useEffect, useRef } from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
  const firstRef = useRef(null);
  const lastRef  = useRef(null);
  const metaRef  = useRef(null);

  useEffect(() => {
    const els = [firstRef.current, lastRef.current, metaRef.current];
    els.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(24px)";
      setTimeout(() => {
        el.style.transition = `opacity ${800}ms var(--ease-out), transform ${800}ms var(--ease-out)`;
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 120 + i * 100);
    });
  }, []);

  return (
    <section className={styles.hero} aria-label="Introduction">
      <div className={styles.inner}>
        <h1 className={styles.name}>
          <span ref={firstRef} className={styles.nameFirst}>Kennedy</span>
          <span ref={lastRef}  className={styles.nameLast}>Castillón</span>
        </h1>

        <div ref={metaRef} className={styles.meta}>
          <p className={styles.tagline}>Full Stack Engineer · Bay Area, CA</p>
          <p className={styles.desc}>
            Building thoughtful, full-stack products. Passionate about AI,
            community, and making tech more accessible for everyone.
          </p>
          <div className={styles.actions}>
            <a href="#work"    className={styles.ctaPrimary}>View my work ↓</a>
            <a href="#contact" className={styles.ctaSecondary}>Say hello</a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollHint} aria-hidden="true">
        <span className={styles.scrollLine} />
      </div>
    </section>
  );
};
