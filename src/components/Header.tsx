import { useTranslations } from 'next-intl'

export function Header() {
  const t = useTranslations()
  return (
    <header className='sticky top-0 bg-white px-4 py-8 z-50 container mx-auto max-w-5xl'>
      <h1 className='text-3xl font-bold text-slate-700'>{t('Hava')}</h1>
      <div className='text-slate-500'>{t('Appetite for life')}</div>
    </header>
  )
}
