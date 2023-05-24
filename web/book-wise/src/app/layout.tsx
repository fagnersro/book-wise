import { ReactNode } from 'react'
import './globals.css'
import { Nunito } from 'next/font/google'

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-nunito',
})

export const metadata = {
  title: 'BookWise',
  description: 'Crie recomendações e avaliações de diversos livros',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} flex items-center overflow-x-hidden bg-gray-800 font-sans text-gray-100`}
      >
        {children}
      </body>
    </html>
  )
}
