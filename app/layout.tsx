import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Leopard Annaba - Smart Digital Menu',
  description: 'Modern smart menu for Leopard Annaba restaurant',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  )
}