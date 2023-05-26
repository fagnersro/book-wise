import LastReadCard from '@/components/LastReadCard'
import { ChevronRight, LineChart } from 'lucide-react'

export default function NewStart() {
  return (
    <>
      <section className="grid grid-cols-[38rem_auto]">
        <main className="mt-[3.25rem]">
          <header className="flex h-[2.125rem] w-[9.125rem] items-center">
            <LineChart className="mr-[0.75rem] h-[1.5rem] w-[1.5rem] text-green-100" />
            <span className="text text-2xl font-bold text-gray-100">
              Inicio
            </span>
          </header>

          <div className="mt-[2.5rem] flex h-[14.875rem] w-[38rem] flex-col gap-4">
            <div className="flex h-[1.875rem] w-full items-center justify-between">
              <span className="text-sm font-normal">Sua última leitura</span>
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
            <div className="flex h-full w-full items-center justify-center">
              <LastReadCard />
            </div>
          </div>
        </main>
        <div className="m-[0_auto] h-[37.625rem] w-[20.25rem] border-[1px] border-red-500"></div>
      </section>
    </>
  )
}
