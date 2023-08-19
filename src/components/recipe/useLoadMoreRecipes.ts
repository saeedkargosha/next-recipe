import { useState, useEffect, useCallback } from 'react'
import { fetchRecipes } from '@/actions/fetch-recipes'
import type { Recipe } from '@/types'

const PAGE_SIZE = 10

export type LoadMoreRecipeOptions = {
  initialPage?: number
  query?: string | null
}

export function useLoadMoreRecipes({
  initialPage = 1,
  query,
}: LoadMoreRecipeOptions) {
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [page, setPage] = useState(initialPage)
  const [isEnded, setEnded] = useState(false)

  const loadRecipes = useCallback(
    async (page: number) => {
      const response = await fetchRecipes({ page, pageSize: PAGE_SIZE, query })
      const newRecipes = response?.data?.listRecipes.recipes ?? []
      setRecipes(prevRecipes => [...prevRecipes, ...newRecipes])
      setEnded(newRecipes.length === 0)
    },
    [query]
  )

  const handlePage = async () => {
    const nextPage = page + 1
    loadRecipes(nextPage)
    setPage(nextPage)
  }

  useEffect(() => {
    setRecipes([])
    setEnded(false)
    setPage(1)
    if (query && query?.length > 0) {
      loadRecipes(1)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  return { handlePage, isEnded, recipes }
}
