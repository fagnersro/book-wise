import PopularBooks from '@/components/PopularBooks'
import RatedBookCard from '@/components/RatedBookCard'
import SearchRatedBook from '@/components/SearchRatedBook'
import { ChevronRight, User2 } from 'lucide-react'

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
      <div className="m-[0_auto] mt-[7.875rem] h-[37.625rem] w-[20.25rem]">
        <div className="flex h-[1.875rem] w-full items-center justify-between">
          <span className="text-sm font-normal">Livros pupulares</span>
          <div className="flex h-full w-[6.438rem] items-center justify-between rounded-md text-purple-100 hover:bg-purple-900">
            <a
              className="flex h-full w-full items-center justify-center gap-[0.5rem] text-sm font-bold"
              href=""
            >
              Ver todas
              <ChevronRight className="h-[1rem] w-[1rem]" />
            </a>
          </div>
        </div>

        <div className="mt-4 flex h-[34.75rem] w-full flex-col gap-3">
          <PopularBooks />
          <PopularBooks />
          <PopularBooks />
        </div>
      </div>
    </section>
  )
}
