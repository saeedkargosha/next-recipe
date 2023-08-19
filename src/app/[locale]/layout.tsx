import '../globals.css'
import { Inter } from 'next/font/google'
import { useLocale, useMessages, NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hava',
  description: 'Appetite for life',
}

type RootLayoutProps = {
  children: React.ReactNode
  params: { locale: string }
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  const locale = useLocale()
  const messages = useMessages()
  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound()
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
