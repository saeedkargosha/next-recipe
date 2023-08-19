import { usePathname, useRouter } from 'next/navigation'
import { useCreateQueryString } from './useCreateQueryString'
import { useCallback } from 'react'

export function useUpdateQuery() {
  const createQueryString = useCreateQueryString()
  const pathname = usePathname()
  const router = useRouter()

  return useCallback(
    (name: string, value: string) => {
      return router.push(pathname + '?' + createQueryString(name, value))
    },
    [router, pathname, createQueryString]
  )
}
