import { Star } from 'lucide-react'

export default function LastReadCard() {
  return (
    <>
      <div className="flex h-[12rem] w-[38rem] items-center justify-center gap-[1.5rem] rounded-md bg-gray-600">
        <div className="h-[9.5rem] w-[6.75rem] rounded-[4px] bg-[url(../assets/books/entendendo-algoritmos.png)] bg-cover"></div>

        <div className="h-[9.125rem] w-[26.75rem]">
          <div className="flex h-[4.875rem] flex-col gap-3 ">
            <div className="flex h-[1.375rem] items-center justify-between">
              <span className="text-sm font-normal text-gray-100">
                Há 2 dias
              </span>
              <div className="flex h-full w-[6rem] items-center justify-between">
                <Star className="h-[1rem] w-[1rem] text-purple-100" />
                <Star className="h-[1rem] w-[1rem] text-purple-100" />
                <Star className="h-[1rem] w-[1rem] text-purple-100" />
                <Star className="h-[1rem] w-[1rem] text-purple-100" />
                <Star className="h-[1rem] w-[1rem] text-purple-100" />
              </div>
            </div>

            <div className="h-[2.75rem] w-full">
              <h3 className="text-base font-bold text-gray-100">
                Entendendo Algoritimos
              </h3>
              <span className="text-sm text-gray-400">Aditya Bhargava</span>
            </div>
          </div>
          <div className="mt-6 flex h-[2.75rem] w-full items-center">
            <span className="text-sm text-gray-300">
              Nec tempor nunc in egestas. Euismod nisi eleifend at et in
              sagittis. Penatibus id vestibulum imperdiet a at imperdiet
              lectu...
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
