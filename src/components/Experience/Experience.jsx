import { useInView } from "../../hooks/useInView";
import { SectionLabel } from "../ui/SectionLabel";
import { experience, skills } from "../../data/experience";
import styles from "./Experience.module.css";

const ExperienceItem = ({ job, index }) => {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`${styles.item} ${inView ? styles.visible : ""}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className={styles.left}>
        <span className={styles.period}>{job.period}</span>
      </div>
      <div className={styles.right}>
        <h3 className={styles.role}>{job.role}</h3>
        <p className={styles.company}>{job.company}</p>
        <ul className={styles.bullets}>
          {job.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const Experience = () => (
  <section className={styles.section} id="experience">
    <div className={styles.inner}>
      <SectionLabel>Experience</SectionLabel>

      <div className={styles.list}>
        {experience.map((job, i) => (
          <ExperienceItem key={job.id} job={job} index={i} />
        ))}
      </div>

      {/* Skills grid */}
      <div className={styles.skillsWrap}>
        <p className={styles.skillsHeading}>Technologies</p>
        <div className={styles.skillsGrid}>
          {skills.map(({ category, items }) => (
            <div key={category} className={styles.skillGroup}>
              <p className={styles.skillCategory}>{category}</p>
              <ul className={styles.skillList}>
                {items.map((item) => (
                  <li key={item} className={styles.skillItem}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
