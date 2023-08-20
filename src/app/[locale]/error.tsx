'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center space-y-4'>
      <h2 className='text-2xl'>{'Something went wrong!'}</h2>
      <Link href={'/'}>
        <button
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2'
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }>
          Try again
        </button>
      </Link>
    </div>
  )
}
