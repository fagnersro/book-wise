import { BookOpen, Library, UserSquare2, Bookmark } from 'lucide-react'
import Avatar from './Avatar'

export default function Analytical() {
  return (
    <div className="m-[0_auto] mt-[7.875rem] flex h-[37.625rem] w-[19.25rem] flex-col items-center border-l-[1px] border-gray-700">
      <div className="flex h-[9.375rem] w-full flex-col items-center justify-center gap-5">
        <Avatar
          width={72}
          height={72}
          source="https://github.com/fagnersro.png"
        />

        <div className="h-[3.125rem] w-full text-center">
          <h3 className="text-xl font-bold">Fagner Henrique</h3>
          <span className="text-sm text-gray-400">membro desde 2019</span>
        </div>
      </div>
      <span className="my-8 h-[4px] w-8 rounded bg-gradient-vertical bg-gray-500"></span>
      <div className="flex h-full w-full items-center justify-center">
        <ul className="flex h-[18.5rem] flex-col gap-10">
          <li className="flex h-11 w-[12.25rem] items-center justify-between">
            <BookOpen className="h-8 w-8 text-green-100" />
            <div className="flex h-11 w-36 flex-col items-start">
              <span className="text-base font-bold">3853</span>
              <span className="text-sm text-gray-300">Páginas lidas</span>
            </div>
          </li>
          <li className="flex h-11 w-[12.25rem] items-center justify-between">
            <Library className="h-8 w-8 text-green-100" />
            <div className="flex h-11 w-36 flex-col items-start">
              <span className="text-base font-bold">10</span>
              <span className="text-sm text-gray-300">Livros avaliados</span>
            </div>
          </li>
          <li className="flex h-11 w-[12.25rem] items-center justify-between">
            <UserSquare2 className="h-8 w-8 text-green-100" />
            <div className="flex h-11 w-36 flex-col items-start">
              <span className="text-base font-bold">8</span>
              <span className="text-sm text-gray-300">Autores lidos</span>
            </div>
          </li>
          <li className="flex h-11 w-[12.25rem] items-center justify-between">
            <Bookmark className="h-8 w-8 text-green-100" />
            <div className="flex h-11 w-36 flex-col items-start">
              <span className="text-base font-bold">Computação</span>
              <span className="text-sm text-gray-300">Categoria mais lida</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
