import { useLang } from '@/hooks/useLang'
import projectsData from '@/data/projects.json'
import collab from '@/data/collab.json'
import styles from './ProjectsSection.module.css'

export default function ProjectsSection() {
  const { t } = useLang()
  const { projects } = projectsData

  return (
    <>
      {/* Projects */}
      <section className={styles.section}>
        <div className={styles.label}>PROJECTS</div>
        {projects.map((p) => (
          <div key={p.name} className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.projectName}>{p.name}</span>
              <a href={p.url} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                <i className="ti ti-external-link" aria-hidden="true" />
                {p.urlLabel}
              </a>
            </div>
            <p className={styles.projectDesc}>{t(p.desc)}</p>
            <div className={styles.stackRow}>
              {p.stack.map((s) => (
                <span key={s} className={styles.stackPill}>{s}</span>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Collab */}
      <section className={styles.section}>
        <div className={styles.label}>OPEN TO COLLAB</div>
        <div className={styles.collabGrid}>
          {collab.items.map((item) => (
            <div key={item.icon} className={styles.collabCard}>
              <i className={`ti ${item.icon} ${styles.collabIcon}`} aria-hidden="true" />
              <div className={styles.collabTitle}>{t(item.title)}</div>
              <div className={styles.collabDesc}>{t(item.desc)}</div>
            </div>
          ))}
        </div>
        <div className={styles.cta}>
          <div>
            <div className={styles.ctaTitle}>{t(collab.cta.title)}</div>
            <div className={styles.ctaDesc}>{t(collab.cta.desc)}</div>
          </div>
          <a href={`mailto:${collab.cta.email}`} className={styles.ctaBtn}>
            <i className="ti ti-mail" aria-hidden="true" />
            {t(collab.cta.buttonLabel)}
          </a>
        </div>
      </section>
    </>
  )
}
