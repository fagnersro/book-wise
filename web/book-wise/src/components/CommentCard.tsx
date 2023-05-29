import AllStart from './AllStar'
import Avatar from './Avatar'

export default function CommentCard() {
  return (
    <div className="flex h-[11.125rem] w-[35rem] flex-col items-center justify-center gap-5 rounded-lg bg-gray-700">
      <div className="flex h-[2.75rem] w-[32.25rem] items-center gap-4">
        <Avatar
          width={40}
          height={40}
          source="https://github.com/diego3g.png"
        />
        <div className="flex h-[2.75rem] w-[21.75rem] flex-col">
          <span className="text-base font-bold text-gray-100">
            Brandon Botosh
          </span>
          <span className="text-sm text-gray-400 ">Há 2 dias</span>
        </div>
        <div className="h-full">
          <AllStart />
        </div>
      </div>
      <div className="h-[4.125rem] w-[32.25rem]">
        <span className="flex items-center text-sm text-gray-300">
          Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis.
          Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta
          eget nec vitae sit vulputate eget.
        </span>
      </div>
    </div>
  )
}
