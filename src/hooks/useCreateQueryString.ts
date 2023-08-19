import { useSearchParams } from 'next/navigation'
import { useCallback } from 'react'

export function useCreateQueryString() {
  const searchParams = useSearchParams()!
  return useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      if (value.length <= 0) {
        params.delete(name)
      } else {
        params.set(name, value)
      }

      return params.toString()
    },
    [searchParams]
  )
}
