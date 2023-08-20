import { Recipe } from './Recipe'
import { useTranslations } from 'next-intl'
import type { Recipe as RecipeType } from '@/types'

type RecipesProps = {
  recipes: RecipeType[] | null
}

export function Recipes({ recipes }: RecipesProps) {
  const t = useTranslations()

  if (!recipes) {
    return (
      <div
        aria-errormessage={t('No Recipes available')}
        className='text-xl font-bold'>
        {t('No Recipes available')}
      </div>
    )
  }

  return recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe} />)
}
