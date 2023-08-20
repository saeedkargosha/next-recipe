'use client'

import { useDebounce } from '@/hooks/useDebounce'
import { useUpdateQuery } from '@/hooks/useUpdateQuery'
import { useSearchParams } from 'next/navigation'
import { LoadMoreRecipes } from './LoadMoreRecipes'
import { ChangeEvent, PropsWithChildren } from 'react'
import { SearchInput } from '@/uikit'
import { useTranslations } from 'next-intl'

export function SearchRecipes({ children }: PropsWithChildren) {
  const t = useTranslations()
  const updateQueryParam = useUpdateQuery()
  const searchParams = useSearchParams()
  const handleChange = useDebounce(
    (e: ChangeEvent<HTMLInputElement>) =>
      updateQueryParam('search', e.target.value),
    300
  )

  const searchQuery = searchParams.get('search')
  const hasSearch = searchQuery && searchQuery.length > 0

  return (
    <div
      className='container mx-auto px-4 min-h-screen max-w-5xl'
      data-testid='search-recipts'>
      <SearchInput
        placeholder={t('Search')}
        onChange={handleChange}
        defaultValue={searchQuery ?? ''}
        aria-label={t('Search')}
      />
      <ul
        role='list'
        aria-label={t('recipes')}
        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8'
        data-testid='recipts'>
        {!hasSearch && children}
        <LoadMoreRecipes query={searchQuery} />
      </ul>
    </div>
  )
}
