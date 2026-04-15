import { useInView } from "../../hooks/useInView";
import { SectionLabel } from "../ui/SectionLabel";
import { Tag } from "../ui/Tag";
import { projects } from "../../data/projects";
import styles from "./Projects.module.css";

const ProjectItem = ({ project, index }) => {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <article
      ref={ref}
      className={`${styles.item} ${inView ? styles.visible : ""}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Thumbnail */}
      <div className={styles.thumb}>
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className={styles.thumbImg}
            loading="lazy"
          />
        ) : (
          <div className={styles.thumbPlaceholder}>
            <span className={styles.thumbLabel}>{project.title}</span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className={styles.info}>
        <span className={styles.num}>{project.num}</span>
        <h3 className={styles.title}>{project.title}</h3>

        <div className={styles.tags}>
          {project.tags.map((t) => <Tag key={t}>{t}</Tag>)}
        </div>

        <p className={styles.desc}>{project.desc}</p>

        {project.highlights && (
          <ul className={styles.highlights}>
            {project.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        )}

        <div className={styles.links}>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkPrimary}
            >
              Live demo →
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkGhost}
            >
              GitHub ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export const Projects = () => (
  <section className={styles.section} id="work">
    <div className={styles.inner}>
      <SectionLabel>Selected Work</SectionLabel>
      <div className={styles.list}>
        {projects.map((p, i) => (
          <ProjectItem key={p.id} project={p} index={i} />
        ))}
      </div>
    </div>
  </section>
);
