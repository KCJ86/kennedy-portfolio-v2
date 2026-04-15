import { useInView } from "../../hooks/useInView";
import { SectionLabel } from "../ui/SectionLabel";
import styles from "./About.module.css";

export const About = () => {
  const [bioRef, bioInView] = useInView({ threshold: 0.1 });

  return (
    <section className={styles.section} id="about">
      <div className={styles.inner}>
        <SectionLabel>About</SectionLabel>

        <div
          ref={bioRef}
          className={`${styles.bio} ${bioInView ? styles.visible : ""}`}
        >
          {/* Photo — swap src for your Fujifilm shot */}
          <div className={styles.photoWrap}>
            <img
              src="/assets/bio/biopic.JPG"
              alt="Kennedy Castillón Jiménez"
              className={styles.photo}
              loading="lazy"
            />
          </div>

          {/* Text */}
          <div className={styles.textWrap}>
            <blockquote className={styles.quote}>
              "Born on the coast of&nbsp;Jalisco.
              <br />
              Built in the&nbsp;Bay."
            </blockquote>

            <div className={styles.body}>
              <p>
                Growing up in the Bay Area during the tech boom, I witnessed how
                many underrepresented communities were left behind. That fueled
                my drive to pursue engineering, and to show that more of us
                belong in these spaces.
              </p>
              <p>
                As underrepresented people, we deserve to be seen as engineers,
                not just unskilled laborers. I hope you enjoyed exploring my
                work. Feel free to reach out anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
