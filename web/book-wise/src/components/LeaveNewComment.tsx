import { Check, X } from 'lucide-react'
import Avatar from './Avatar'
import BigStar from './BigStar'

export default function LeaveNewComment() {
  return (
    <div className="flex h-[20.5rem] w-[35rem] flex-col items-center justify-center gap-6 rounded-lg bg-gray-700">
      <div className="flex h-10 w-[32.25rem] items-center border-[0px] border-gray-50">
        <Avatar
          width={40}
          height={40}
          source="https://github.com/fagnersro.png"
        />
        <label className="ml-4 w-[18.25rem] text-base font-bold text-gray-100">
          Fagner Henrique
        </label>
        <div className="h-full w-[10.5rem]">
          <BigStar />
        </div>
      </div>

      <div className="flex h-[13.5rem] w-[32.25rem] flex-col items-end justify-between">
        <textarea
          spellCheck={false}
          placeholder="Escreva sua avaliação"
          className="h-[10.25rem] w-[32rem] resize-none rounded border-[1px] border-gray-500 bg-gray-800 px-5 py-3 text-gray-400 outline-none placeholder:text-sm placeholder:italic placeholder:text-gray-400"
        />

        <div className="flex h-[2.5rem] w-[5.5rem] justify-between">
          <button className="flex h-10 w-10 items-center justify-center rounded bg-gray-600">
            <X className="text-purple-100" />
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded bg-gray-600">
            <Check className="text-green-100" />
          </button>
        </div>
      </div>
    </div>
  )
}
