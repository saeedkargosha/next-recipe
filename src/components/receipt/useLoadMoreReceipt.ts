import { useState, useEffect, useCallback } from 'react'
import { fetchRecipes } from '@/actions/fetch-recipes'
import type { Recipe } from '@/types'

const PAGE_SIZE = 10

export type LoadMoreReceiptOptions = {
  initialPage?: number
  query?: string | null
}

export function useLoadMoreReceipt({
  initialPage = 1,
  query,
}: LoadMoreReceiptOptions) {
  const [receipts, setReceipts] = useState<Recipe[]>([])
  const [page, setPage] = useState(initialPage)
  const [isEnded, setEnded] = useState(false)

  const loadReceipts = useCallback(
    async (page: number) => {
      const response = await fetchRecipes({ page, pageSize: PAGE_SIZE, query })
      const newReceipts = response?.data?.listRecipes.recipes ?? []
      setReceipts(prevReceipts => [...prevReceipts, ...newReceipts])
      setEnded(newReceipts.length === 0)
    },
    [query]
  )

  const handlePage = async () => {
    const nextPage = page + 1
    loadReceipts(nextPage)
    setPage(nextPage)
  }

  useEffect(() => {
    setReceipts([])
    setEnded(false)
    setPage(1)
    if (query && query?.length > 0) {
      loadReceipts(1)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  return { handlePage, isEnded, receipts }
}
