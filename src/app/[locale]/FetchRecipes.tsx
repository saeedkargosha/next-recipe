import { fetchRecipes } from '@/actions/fetch-recipes'
import { Recipes, SearchRecipes } from '@/components/recipe'

export default async function FetchRecipes() {
  const recipes = await fetchRecipes({ page: 1, pageSize: 10 })

  return (
    <SearchRecipes>
      <Recipes recipes={recipes.data.listRecipes.recipes} />
    </SearchRecipes>
  )
}
