import { useLang } from '@/hooks/useLang'
import aboutData from '@/data/about.json'
import styles from './AboutSection.module.css'

export default function AboutSection() {
  const { t } = useLang()
  const { name, role, desc, contact } = aboutData

  return (
    <section className={styles.section}>
      <div className={styles.label}>ABOUT</div>
      <h1 className={styles.name}>{t(name)}</h1>
      <p className={styles.role}>{role}</p>
      <p className={styles.desc}>{t(desc)}</p>
      <div className={styles.contactRow}>
        <a className={styles.contactItem} href={`mailto:${contact.email}`}>
          <i className="ti ti-mail" aria-hidden="true" />
          {contact.email}
        </a>
        <a className={styles.contactItem} href={contact.githubUrl} target="_blank" rel="noopener noreferrer">
          <i className="ti ti-brand-github" aria-hidden="true" />
          {contact.github}
        </a>
        <span className={styles.contactItem}>
          <i className="ti ti-map-pin" aria-hidden="true" />
          {t(contact.location)}
        </span>
      </div>
    </section>
  )
}
