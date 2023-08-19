'use client'

import clsx from 'clsx'
import Search from './search.svg'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export function SearchInput({ className, id, ...rest }: InputProps) {
  const inputStyle = clsx(
    'block w-full p-4 pl-10 text-sm text-neutral-900 rounded-full bg-gray-100 outline-none placeholder:text-neutral-600',
    className
  )
  return (
    <div>
      <div className='relative'>
        <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
          <Search className='w-4 h-4 text-gray-500' />
        </div>
        <input type='search' className={inputStyle + ' '} {...rest} />
      </div>
    </div>
  )
}
