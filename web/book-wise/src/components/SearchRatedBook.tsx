import { Search } from 'lucide-react'

export default function SearchRatedBook() {
  return (
    <label className="flex h-[3rem] w-[37.90rem] items-center justify-center rounded-md border-[2px] border-gray-500">
      <span className="sr-only">Search</span>
      <span className="flex items-center gap-2">
        <input
          className="w-[33rem] border-none bg-transparent text-gray-400 outline-none placeholder:italic placeholder:text-gray-400"
          type="text"
          placeholder="Buscar livro avaliado"
        />
        <span>
          <Search className="h-5 w-5 text-gray-500" />
        </span>
      </span>
    </label>
  )
}
