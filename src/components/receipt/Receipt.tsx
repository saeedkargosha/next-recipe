import { getImageUrl, getPlaceholder } from '@/lib/utils'
import { Recipe } from '@/types'
import Image from 'next/image'

type ReceiptProps = {
  receipt: Recipe
}

export function Receipt({ receipt }: ReceiptProps) {
  return (
    <div className='rounded-xl bg-white shadow-xl'>
      <div className='flex flex-col items-center justify-center p-0 pt-0 relative'>
        <Image
          src={getImageUrl(receipt?.images?.defaultImage?.path)}
          alt={receipt.title}
          className='object-cover rounded w-full h-auto aspect-[1/0.9]'
          layout='responsive'
          loading='lazy'
          width={500}
          height={750}
          placeholder='blur'
          blurDataURL={getPlaceholder()}
        />
        <div className='absolute bottom-4 left-4 rounded-lg bg-white'>
          <div className='flex flex-col p-4 gap-2 rounded-lg backdrop-blur-3xl'>
            <span className='uppercase text-sm font-semibold text-slate-900'>
              {'Satiety'}
            </span>
            <span className='text-3xl font-semibold text-slate-900'>
              {receipt.satietyScore ? Math.round(receipt.satietyScore) : 0}
            </span>
          </div>
        </div>
      </div>
      <div className='flex flex-col p-4 pt-0'>
        <div className='flex justify-between items-center gap-4'>
          <h3 className='my-2 font-semibold truncate text-slate-900 text-ellipsis '>
            {receipt.title}
          </h3>
          <span className='space-x-1'>
            <span className='text-yellow-400'>{'★'}</span>
            <span className='text-xs text-neutral-400'>{receipt.rating}</span>
          </span>
        </div>
        <p className='text-sm line-clamp-3 text-slate-700'>
          {receipt.description}
        </p>
      </div>
    </div>
  )
}
