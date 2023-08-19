'use client'

import { useDebounce } from '@/hooks/useDebounce'
import { useUpdateQuery } from '@/hooks/useUpdateQuery'
import { useSearchParams } from 'next/navigation'
import { LoadMoreReceipts } from './LoadMoreReceipts'
import { ChangeEvent, PropsWithChildren } from 'react'
import { SearchInput } from '@/uikit'

export function SearchReceipts({ children }: PropsWithChildren) {
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
    <section className='container mx-auto px-4 min-h-screen max-w-5xl'>
      <SearchInput
        placeholder='Search'
        onChange={handleChange}
        defaultValue={searchQuery ?? ''}
      />
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8'>
        {!hasSearch && children}
        <LoadMoreReceipts query={searchQuery} />
      </div>
    </section>
  )
}
