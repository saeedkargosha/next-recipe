import { Suspense } from 'react'
import { Header } from '@/components/Header'
import FetchRecipes from './FetchRecipes'
import { SearchBar } from '@/components/recipe/SearchBar'
import RecipeSkeleton from '@/components/recipe/RecipeSkeleton'
import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations()
  return (
    <main className='min-h-screen'>
      <Header />
      <div
        className='container mx-auto px-4 min-h-screen max-w-5xl'
        data-testid='search-recipts'>
        <SearchBar />
        <ul
          role='list'
          aria-label={t('recipes')}
          className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8'
          data-testid='recipts'>
          <Suspense fallback={<RecipeSkeleton />}>
            <FetchRecipes />
          </Suspense>
        </ul>
      </div>
    </main>
  )
}
