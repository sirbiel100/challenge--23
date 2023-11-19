import type { Metadata } from 'next'
import './globals.scss'


export const metadata: Metadata = {
  title: 'Comming Soon | GC',
  description: 'Challenge made by Frontend Mentor and coded by Gabriel Crispim',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
