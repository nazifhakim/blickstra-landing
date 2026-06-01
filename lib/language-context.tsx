'use client'

import { createContext, useContext, useState } from 'react'

type Lang = 'en' | 'bm'

interface LangContextValue {
  lang: Lang
  toggle: () => void
}

const LangContext = createContext<LangContextValue>({ lang: 'en', toggle: () => {} })

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')
  return (
    <LangContext.Provider value={{ lang, toggle: () => setLang(l => l === 'en' ? 'bm' : 'en') }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
