'use client'

import { ChangeEvent } from 'react'
import { useDebounce } from '@/hooks/useDebounce'
import { useUpdateQuery } from '@/hooks/useUpdateQuery'
import { useSearchParams } from 'next/navigation'
import { SearchInput } from '@/uikit'
import { useTranslations } from 'next-intl'

export function SearchBar() {
  const t = useTranslations()
  const updateQueryParam = useUpdateQuery()
  const searchParams = useSearchParams()
  const handleChange = useDebounce(
    (e: ChangeEvent<HTMLInputElement>) =>
      updateQueryParam('search', e.target.value),
    300
  )

  const searchQuery = searchParams.get('search')

  return (
    <SearchInput
      placeholder={t('Search')}
      onChange={handleChange}
      defaultValue={searchQuery ?? ''}
      aria-label={t('Search')}
    />
  )
}
