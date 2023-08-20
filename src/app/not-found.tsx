import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Not Found',
  description: 'Not Found',
}

export default function NotFound() {
  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center space-y-4'>
      <h4 className='text-2xl text-neutral-800'>404. Page not found</h4>
      <p className='text-xl text-red-500'>
        Sorry, we couldn&apos;t find this page.
      </p>
      <p>
        View <Link href='/'>Home page</Link>
      </p>
    </div>
  )
}
