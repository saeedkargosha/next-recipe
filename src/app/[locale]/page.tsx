import { fetchRecipes } from '@/actions/fetch-recipes'
import { Header } from '@/components/Header'
import { Receipts } from '@/components/receipt/Receipts'

export default async function Home() {
  const recipes = await fetchRecipes({ page: 1, pageSize: 10 })

  return (
    <main className='min-h-screen'>
      <Header />
      <section className='container mx-auto px-4 min-h-screen max-w-5xl'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          <Receipts receipts={recipes.data.listRecipes.recipes} />
        </div>
      </section>
    </main>
  )
}
