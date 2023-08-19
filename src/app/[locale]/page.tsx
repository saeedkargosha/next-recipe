import { fetchRecipes } from '@/actions/fetch-recipes'
import { Header } from '@/components/Header'
import { Receipts, SearchReceipts } from '@/components/receipt'

export default async function Home() {
  const recipes = await fetchRecipes({ page: 1, pageSize: 10 })

  return (
    <main className='min-h-screen'>
      <Header />
      <SearchReceipts>
        <Receipts receipts={recipes.data.listRecipes.recipes} />
      </SearchReceipts>
    </main>
  )
}
