import ExploreCard from '@/components/ExploreCard'
import SearchBook from '@/components/SearchBook'
import SearchCategory from '@/components/SearchCategory'
import { Glasses } from 'lucide-react'

export default function PageExplore() {
  return (
    <section className="mt-[3.25rem] w-[56.25rem] ">
      <header className="h-[7.625rem] w-[56.25rem]">
        <div className="flex h-[3rem] w-full items-start justify-between">
          <div className="flex h-[2.125rem] w-[9.125rem] items-center">
            <Glasses className="mr-[0.75rem] h-[1.5rem] w-[1.5rem] text-green-100" />
            <span className="text text-2xl font-bold text-gray-100">
              Explorar
            </span>
          </div>
          <SearchBook />
        </div>

        <div className="mt-10 h-[2.125rem] w-full">
          <SearchCategory />
        </div>
      </header>

      <main className="mt-[3rem]  grid h-[46rem] w-full grid-cols-3 grid-rows-4 gap-4">
        <ExploreCard />
        <ExploreCard />
        <ExploreCard />
        <ExploreCard />
        <ExploreCard />
        <ExploreCard />
        <ExploreCard />
        <ExploreCard />
        <ExploreCard />
        <ExploreCard />
        <ExploreCard />
        <ExploreCard />
      </main>
    </section>
  )
}
