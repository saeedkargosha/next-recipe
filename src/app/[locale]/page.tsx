import { Header } from '@/components/header'

type HomeProps = {
  params: { lng: string }
}

export default function Home({ params: { lng } }: HomeProps) {
  return (
    <main className='container mx-auto px-4 py-8 min-h-screen max-w-5xl'>
      <Header />
    </main>
  )
}
