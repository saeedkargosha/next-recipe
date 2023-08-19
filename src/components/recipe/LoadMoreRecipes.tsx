'use client'

import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { Spinner } from '@/uikit'
import { Recipes } from './Recipes'
import { useLoadMoreRecipes } from './useLoadMoreRecipes'
import type { LoadMoreRecipeOptions } from './useLoadMoreRecipes'

export function LoadMoreRecipes(props: LoadMoreRecipeOptions) {
  const { handlePage, isEnded, recipes } = useLoadMoreRecipes({
    ...props,
  })

  const { ref, inView } = useInView({
    skip: isEnded,
  })

  useEffect(() => {
    if (inView) {
      handlePage()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView])

  return (
    <>
      <Recipes recipes={recipes} />
      <div
        className='flex justify-center items-center p-4 col-span-1 sm:col-span-2 md:col-span-3'
        ref={ref}>
        {!isEnded && <Spinner />}
      </div>
    </>
  )
}
