'use client'

import clsx from 'clsx'
import Search from './search.svg'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export function SearchInput({ className, id, ...rest }: InputProps) {
  const inputStyle = clsx(
    'block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500',
    className
  )
  return (
    <div>
      <div className='relative'>
        <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
          <Search className='w-4 h-4 text-gray-500 dark:text-gray-400' />
        </div>
        <input type='search' className={inputStyle} {...rest} />
      </div>
    </div>
  )
}
