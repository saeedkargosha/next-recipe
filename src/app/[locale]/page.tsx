import { fetchRecipes } from '@/actions/fetch-recipes'
import { Header } from '@/components/Header'
import { Recipes, SearchRecipes } from '@/components/recipe'

export default async function Home() {
  const recipes = await fetchRecipes({ page: 1, pageSize: 10 })

  return (
    <main className='min-h-screen'>
      <Header />
      <SearchRecipes>
        <Recipes recipes={recipes.data.listRecipes.recipes} />
      </SearchRecipes>
    </main>
  )
}
