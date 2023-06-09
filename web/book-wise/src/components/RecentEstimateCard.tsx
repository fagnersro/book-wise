import { Star } from 'lucide-react'
import Avatar from './Avatar'
import Image from 'next/image'
import example from '../assets/books/o-hobbit.png'

export default function RecentEstimateCard() {
  return (
    <div className="mb-5 mt-4 flex h-[17.5rem] w-full flex-col items-center justify-center gap-[2rem] rounded-lg bg-gray-700">
      <div className="flex h-[3rem] w-[35rem] gap-4">
        <Avatar
          width={40}
          height={40}
          source="https://github.com/diego3g.png"
        />

        <div className="flex h-[3rem] w-[24.5rem] flex-col">
          <span className="text-base text-gray-100">Jseph</span>
          <span className="text-sm text-gray-400">Hoje</span>
        </div>

        <div className="flex h-4 w-[6rem] items-center justify-between">
          <Star className="h-[1rem] w-[1rem] text-purple-100" />
          <Star className="h-[1rem] w-[1rem] text-purple-100" />
          <Star className="h-[1rem] w-[1rem] text-purple-100" />
          <Star className="h-[1rem] w-[1rem] text-purple-100" />
          <Star className="h-[1rem] w-[1rem] text-purple-100" />
        </div>
      </div>
      <div className="flex h-[9.5rem] w-[35rem] gap-5">
        <div className="h-[9.5rem] w-[6.75rem] rounded-[4px]">
          <Image
            className="object-cover"
            src={example}
            width={108}
            height={152}
            quality={100}
            priority
            alt=""
          />
        </div>

        <div className="h-[9.5rem] w-[26.75rem]">
          <div className="flex h-[2.75rem] flex-col">
            <div className="h-[2.75rem] w-full">
              <h3 className="text-base font-bold text-gray-100">O Hobbit</h3>
              <span className="text-sm text-gray-400">Pedrin</span>
            </div>
          </div>
          <div className="mt-5 flex h-[5.5rem] w-full items-center">
            <span className="text-sm text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              suscipit provident quidem iste iure perferendis, eligendi
              consectetur quisquam magnam rem nulla harum est adipisci officiis.
              Perferendis eaque et veniam officiis.
              <strong className="text-purple-100">ver mais</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
