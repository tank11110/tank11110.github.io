'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { Lang } from '@/types'

interface LangContextType {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (obj: { zh: string; en: string }) => string
}

const LangContext = createContext<LangContextType>({
  lang: 'zh',
  setLang: () => {},
  t: (obj) => obj.zh,
})

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('zh')
  const t = (obj: { zh: string; en: string }) => obj[lang]
  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
