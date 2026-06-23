'use client'

import { useState } from 'react'
import { useLang } from '@/hooks/useLang'
import experienceData from '@/data/experience.json'
import skillsData from '@/data/skills.json'
import educationData from '@/data/education.json'
import styles from './ResumeSection.module.css'

function SkillTag({ raw }: { raw: string }) {
  const [hovered, setHovered] = useState(false)
  return (
    <span
      className={styles.skillTag}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered ? `<${raw} />` : raw}
    </span>
  )
}

export default function ResumeSection() {
  const { t } = useLang()

  return (
    <>
      {/* Experience */}
      <section className={styles.section}>
        <div className={styles.label}>EXPERIENCE</div>
        {experienceData.experience.map((exp, i) => (
          <div key={i} className={styles.expItem}>
            <div className={styles.expDate}>{exp.period}</div>
            <div>
              <div className={styles.expRole}>{t(exp.role)}</div>
              <div className={styles.expCompany}>{t(exp.company)}</div>
              <div className={styles.expDesc}>{t(exp.desc)}</div>
            </div>
          </div>
        ))}
      </section>

      {/* Skills */}
      <section className={styles.section}>
        <div className={styles.label}>SKILLS</div>
        {skillsData.skills.map((group) => (
          <div key={group.group} className={styles.skillGroup}>
            <div className={styles.skillGroupLabel}>{group.group}</div>
            <div className={styles.skillGrid}>
              {group.items.map((item) => (
                <SkillTag key={item} raw={item} />
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Education */}
      <section className={styles.section}>
        <div className={styles.label}>EDUCATION</div>
        {educationData.education.map((edu, i) => (
          <div key={i} className={styles.eduItem}>
            <div>
              <div className={styles.eduSchool}>{t(edu.school)}</div>
              <div className={styles.eduDegree}>{t(edu.degree)}</div>
            </div>
            <div className={styles.eduYear}>{edu.period}</div>
          </div>
        ))}
      </section>
    </>
  )
}
