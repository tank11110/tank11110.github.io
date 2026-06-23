'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { useLang } from '@/hooks/useLang'
import styles from './Navbar.module.css'

export default function Navbar() {
  const pathname = usePathname()
  const { lang, setLang, t } = useLang()
  const [settingsOpen, setSettingsOpen] = useState(false)

  const isResume = pathname === '/resume' || pathname === '/resume/'

  return (
    <nav className={styles.nav}>
      <div className={styles.tabs}>
        <Link
          href="/home"
          className={`${styles.tab} ${!isResume ? styles.active : ''}`}
        >
          {t({ zh: '首頁', en: 'Home' })}
        </Link>
        <Link
          href="/resume"
          className={`${styles.tab} ${isResume ? styles.active : ''}`}
        >
          {t({ zh: '履歷', en: 'Resume' })}
        </Link>
      </div>

      <div className={styles.right}>
        {isResume && (
          <a
            href="#"
            className={styles.iconBtn}
            onClick={(e) => { e.preventDefault(); window.print() }}
            aria-label="下載 PDF"
            title="下載 PDF"
          >
            <i className="ti ti-download" aria-hidden="true" />
          </a>
        )}

        <div className={styles.gearWrap}>
          <a
            href="#"
            className={styles.gearBtn}
            onClick={(e) => { e.preventDefault(); setSettingsOpen(o => !o) }}
            aria-label="設定"
          >
            <i className="ti ti-settings" aria-hidden="true" />
          </a>

          {settingsOpen && (
            <>
              <div className={styles.overlay} onClick={() => setSettingsOpen(false)} />
              <div className={styles.panel}>
                <div className={styles.panelLabel}>LANGUAGE</div>
                <div className={styles.langToggle}>
                  <a
                    href="#"
                    className={`${styles.langOpt} ${lang === 'zh' ? styles.langActive : ''}`}
                    onClick={(e) => { e.preventDefault(); setLang('zh') }}
                  >
                    中文
                  </a>
                  <a
                    href="#"
                    className={`${styles.langOpt} ${lang === 'en' ? styles.langActive : ''}`}
                    onClick={(e) => { e.preventDefault(); setLang('en') }}
                  >
                    EN
                  </a>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
