import { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Not Found',
  description: 'Not Found',
}

export default function NotFound() {
  const t = useTranslations('NotFoundPage')
  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center space-y-4'>
      <h2 className='text-2xl text-neutral-800'>{t('title')}</h2>
      <p className='text-xl text-red-500'>{t('description')}</p>
      <p>
        <Link href='/'>{t('Home page')}</Link>
      </p>
    </div>
  )
}
