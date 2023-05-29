import Analytical from '@/components/Analytical'
import RatedBookCard from '@/components/RatedBookCard'
import SearchRatedBook from '@/components/SearchRatedBook'
import { User2 } from 'lucide-react'

export default function PageProfile() {
  return (
    <section className="grid grid-cols-[38rem_auto] border-[0px] border-gray-50">
      <main className="mt-[3.25rem]">
        <header className="flex h-[2.125rem] w-[9.125rem] items-center">
          <User2 className="mr-[0.75rem] h-[1.5rem] w-[1.5rem] text-green-100" />
          <span className="text text-2xl font-bold text-gray-100">Perfil</span>
        </header>

        <div className="mt-[2.5rem] flex h-[auto] w-[38rem] flex-col gap-4">
          <SearchRatedBook />
        </div>

        <div className="mt-[2.5rem] flex h-[auto] w-[38rem] flex-col gap-6 border-[0px] border-red-400 pb-5">
          <RatedBookCard />
          <RatedBookCard />
          <RatedBookCard />
        </div>
      </main>

      <Analytical />
    </section>
  )
}
