import type { Metadata } from 'next'
import { Suspense } from 'react'
import './globals.css'
import { LangProvider } from '@/hooks/useLang'
import Navbar from '@/components/layout/Navbar'

export const metadata: Metadata = {
  title: '張定洋 Intro · Backend / DevOps Engineer',
  description: '張定洋的個人網站，提供專案作品集、合作方式介紹，以及完整履歷，歡迎洽談專案合作、外包開發或職缺機會。',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-TW">
      <body>
        <LangProvider>
          <Suspense>
            <Navbar />
          </Suspense>
          <main style={{ padding: '2.25rem 2.5rem 4rem', maxWidth: '780px', margin: '0 auto' }}>
            {children}
          </main>
        </LangProvider>
      </body>
    </html>
  )
}
