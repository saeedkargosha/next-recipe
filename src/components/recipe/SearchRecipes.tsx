'use client'

import { PropsWithChildren } from 'react'
import { useSearchParams } from 'next/navigation'
import { LoadMoreRecipes } from './LoadMoreRecipes'
import { useTranslations } from 'next-intl'

export function SearchRecipes({ children }: PropsWithChildren) {
  const searchParams = useSearchParams()

  const searchQuery = searchParams.get('search')
  const hasSearch = searchQuery && searchQuery.length > 0

  return (
    <>
      {!hasSearch && children}
      <LoadMoreRecipes query={searchQuery} />
    </>
  )
}
