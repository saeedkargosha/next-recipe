import { getImageUrl, getPlaceholder } from '@/lib/utils'
import { Recipe } from '@/types'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

type RecipeProps = {
  recipe: Recipe
}

export function Recipe({ recipe }: RecipeProps) {
  const t = useTranslations()
  return (
    <div className='rounded-xl bg-white shadow-xl'>
      <div className='flex flex-col items-center justify-center p-0 pt-0 relative'>
        <Image
          src={getImageUrl(recipe?.images?.defaultImage?.path)}
          alt={recipe.title}
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
              {t('Satiety')}
            </span>
            <span className='text-3xl font-semibold text-slate-900'>
              {recipe.satietyScore ? Math.round(recipe.satietyScore) : 0}
            </span>
          </div>
        </div>
      </div>
      <div className='flex flex-col p-4 pt-0'>
        <div className='flex justify-between items-center gap-4'>
          <h3 className='my-2 font-semibold truncate text-slate-900 text-ellipsis '>
            {recipe.title}
          </h3>
          <span className='space-x-1'>
            <span className='text-yellow-400'>{'★'}</span>
            <span className='text-xs text-neutral-400'>{recipe.rating}</span>
          </span>
        </div>
        <p className='text-sm line-clamp-3 text-slate-700'>
          {recipe.description}
        </p>
      </div>
    </div>
  )
}
