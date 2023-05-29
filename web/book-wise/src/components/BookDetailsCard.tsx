import { BookOpen, Bookmark } from 'lucide-react'
import AllStart from './AllStar'

export default function BookDetailsCard() {
  return (
    <div className="flex h-[25.875rem] w-[35rem] flex-col items-center justify-center gap-[2.5rem] rounded-xl bg-gray-700">
      <div className="flex h-[15.125rem] w-[31.25rem] justify-between">
        <div className="h-[15.125rem] w-[10.728rem] rounded-xl bg-[url(../assets/books/arquitetura-limpa.png)] bg-cover"></div>
        <div className="flex h-[15.125rem] w-[18.522rem] flex-col justify-between">
          <div className="flex h-[5.25rem] w-full flex-col ">
            <h3 className="text-lg font-bold text-gray-100">
              Arquitetura limpa
            </h3>
            <span className="text-base text-gray-300">Robert C. Martin</span>
          </div>

          <div className="flex h-[2.875rem] w-[7.25rem] flex-col justify-between">
            <AllStart />
            <span className="text-sm text-gray-400">3 avaliações</span>
          </div>
        </div>
      </div>
      <div className="flex h-[5.75rem] w-[31.25rem] items-center border-t-[1px] border-gray-600">
        <div className="flex h-[2.75rem] w-[13.688rem] items-center justify-between">
          <Bookmark className="h-5 w-5 text-green-100" />
          <div className="flex h-full w-[11rem] flex-col">
            <span className="text-sm text-gray-300">Categoria</span>
            <span className="text-base font-bold text-gray-200">
              Computação, Educação
            </span>
          </div>
        </div>
        <div className="ml-[4.063rem] flex h-[2.75rem] w-[6.125rem] items-center justify-between">
          <BookOpen className="h-5 w-5 text-green-100" />
          <div className="flex h-full w-[3.125rem] flex-col">
            <span className="text-sm text-gray-300">Páginas</span>
            <span className="text-base font-bold text-gray-200">160</span>
          </div>
        </div>
      </div>
    </div>
  )
}
