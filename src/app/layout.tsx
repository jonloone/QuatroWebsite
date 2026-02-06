import '@/styles/tailwind.css'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata = {
  title: {
    template: '%s | Quatro',
    default: 'Quatro — Industrial Intelligence at the Speed of Operations',
  },
  description:
    'Quatro delivers end-to-end industrial intelligence — connecting, operating, and commanding critical operations across energy, defense, industrial, infrastructure, and smart city environments.',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans text-neutral-800 antialiased">{children}</body>
    </html>
  )
}
