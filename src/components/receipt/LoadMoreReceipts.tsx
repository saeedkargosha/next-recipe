'use client'

import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { Spinner } from '@/uikit'
import { Receipts } from './Receipts'
import { useLoadMoreReceipt } from './useLoadMoreReceipt'
import type { LoadMoreReceiptOptions } from './useLoadMoreReceipt'

export function LoadMoreReceipts(props: LoadMoreReceiptOptions) {
  const { handlePage, isEnded, receipts } = useLoadMoreReceipt({
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
      <Receipts receipts={receipts} />
      <div
        className='flex justify-center items-center p-4 col-span-1 sm:col-span-2 md:col-span-3'
        ref={ref}>
        {!isEnded && <Spinner />}
      </div>
    </>
  )
}
