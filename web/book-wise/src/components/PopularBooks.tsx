import { Star } from 'lucide-react'

export default function PopularBooks() {
  return (
    <div className="flex h-[8.125rem] w-[20.00rem] items-center justify-center gap-5 rounded-md bg-gray-700">
      <div className="h-[5.875rem] w-[4rem] rounded-[4px] bg-[url(../assets/books/entendendo-algoritmos.png)] bg-cover"></div>

      <div className="flex h-[6.125rem] w-[12.5rem] flex-col justify-between">
        <div className="flex h-[2.75rem] flex-col">
          <div className="h-[2.75rem] w-full">
            <h3 className="text-base font-bold text-gray-100">
              A revolução dos bichos
            </h3>
            <span className="text-sm text-gray-400">George Orwell</span>
          </div>
        </div>

        <div className="flex h-4 w-[6rem] items-center justify-between">
          <Star className="h-[1rem] w-[1rem] text-purple-100" />
          <Star className="h-[1rem] w-[1rem] text-purple-100" />
          <Star className="h-[1rem] w-[1rem] text-purple-100" />
          <Star className="h-[1rem] w-[1rem] text-purple-100" />
          <Star className="h-[1rem] w-[1rem] text-purple-100" />
        </div>
      </div>
    </div>
  )
}
